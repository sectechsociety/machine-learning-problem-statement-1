import spacy
from sklearn.feature_extraction.text import ENGLISH_STOP_WORDS

# Load the SpaCy NLP model
nlp = spacy.load("en_core_web_sm")

# Function to extract keywords from the text and generate a boolean query
def extract_symptoms_from_text(text):
    parsed_terms = []

    # Process the sentence with SpaCy
    doc = nlp(text.lower())

    # Loop through each token and look for relevant terms (Nouns and Adjectives)
    for token in doc:
        # Debugging line to check token type
        print(f"Token: {token.text}, Type: {type(token)}")  # Add debug to check the type of token

        # Check if the token is a noun or adjective and it's not a stop word
        if token.pos_ in ['NOUN', 'ADJ'] and not token.is_stop:
            # If lemma is available, use it. Otherwise, use the token's text.
            lemma = token.lemma_ if token.lemma_ != token.text else token.text
            parsed_terms.append(lemma)

    # Join the terms with "AND" without adding quotes and backslashes
    return " AND ".join(parsed_terms)
