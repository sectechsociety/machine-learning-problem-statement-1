import pandas as pd
import re
from collections import defaultdict
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import nltk
from index_handler import save_index_to_file, load_index_from_file  # Importing index handler

# Ensure necessary nltk data files are downloaded
nltk.download('punkt')
nltk.download('stopwords')

# Function to build inverted index
def build_keyword_index(df):
    stop_words = set(stopwords.words('english'))
    keyword_index = defaultdict(list)
    
    # Iterate through each article in the dataset
    for article_id, row in df.iterrows():
        abstract = row['abstract']
        
        # Tokenize abstract and remove stopwords
        words = word_tokenize(abstract.lower())  # Tokenize and lowercase the words
        filtered_words = [word for word in words if word.isalnum() and word not in stop_words]
        
        # Store the keywords and their positions in the inverted index
        for pos, word in enumerate(filtered_words):
            keyword_index[word].append((article_id, pos))  # (article_id, position)
    
    return keyword_index

# Function to evaluate boolean queries
def evaluate_boolean_query(query, keyword_index):
    # Normalize the query by converting to lowercase
    query = query.lower()
    
    # Define basic logical operators
    operators = {
        'and': lambda a, b: a & b,
        'or': lambda a, b: a | b,
        'not': lambda a, b: a - b
    }
    
    # Tokenize the query and handle parenthesis and operators
    tokens = re.findall(r'\w+|[&|!(){}]', query)
    
    # Helper function to evaluate the expression
    def process_expression(tokens):
        stack = []
        current_set = set()
        
        while tokens:
            token = tokens.pop(0)
            
            if token == '(':
                # Evaluate the subexpression inside the parentheses
                current_set = process_expression(tokens)
            elif token == ')':
                # Return the result of the current expression
                return current_set
            elif token == 'and':
                # Combine sets using AND operator
                next_set = process_expression(tokens)
                current_set = operators['and'](current_set, next_set)
            elif token == 'or':
                # Combine sets using OR operator
                next_set = process_expression(tokens)
                current_set = operators['or'](current_set, next_set)
            elif token == 'not':
                # Apply NOT operator
                next_set = process_expression(tokens)
                current_set = operators['not'](current_set, next_set)
            else:
                # Look up the keyword in the inverted index
                if token in keyword_index:
                    current_set = set(article_id for article_id, _ in keyword_index[token])
                else:
                    current_set = set()
        
        return current_set
    
    # Process the entire query
    result = process_expression(tokens)
    
    return result

# Function to search articles based on Boolean query
def search_articles(df, query, keyword_index):
    # Evaluate the query
    relevant_articles = evaluate_boolean_query(query, keyword_index)
    
    # Ensure that the indices are valid and within the range of the DataFrame
    valid_indices = [index for index in relevant_articles if index < len(df)]
    
    # If there are valid results, filter articles based on the query results
    if valid_indices:
        result_df = df.iloc[valid_indices]
    else:
        result_df = pd.DataFrame()  # Return an empty DataFrame if no valid results
    
    return result_df

# Main function to execute the program
def main():
    # Load your dataset from Parquet file
    df = pd.read_parquet('cleaned_articles_dataset.parquet')  # replace with your actual filename
    
    # Check if the inverted index file exists, otherwise build it
    keyword_index = load_index_from_file('keyword_index.pkl')
    if not keyword_index:
        print("Building the keyword index from the dataset...")
        keyword_index = build_keyword_index(df)
        save_index_to_file(keyword_index)  # Save the index after building it
    
    # Example query (can be replaced with user input)
    query = "(cancer AND diabetes)"
    
    # Perform the search
    result_df = search_articles(df, query, keyword_index)
    
    # Print results
    if not result_df.empty:
        print(f"Found {len(result_df)} relevant articles:")
        print(result_df[['article', 'abstract']])
    else:
        print("No relevant articles found.")
    
if __name__ == '__main__':
    main()
