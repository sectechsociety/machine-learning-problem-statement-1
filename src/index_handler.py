import pickle

# Function to save the keyword index to a file
def save_index_to_file(keyword_index, filename='keyword_index.pkl'):
    with open(filename, 'wb') as file:
        pickle.dump(keyword_index, file)
    print(f"Index saved to {filename}")

# Function to load the keyword index from a file
def load_index_from_file(filename='keyword_index.pkl'):
    try:
        with open(filename, 'rb') as file:
            keyword_index = pickle.load(file)
        print(f"Index loaded from {filename}")
        return keyword_index
    except FileNotFoundError:
        print(f"Index file {filename} not found.")
        return None
