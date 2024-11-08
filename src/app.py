from flask import Flask, request, jsonify
from src.utils.nlp_utils import extract_symptoms_from_text
from flask_cors import CORS  # To allow cross-origin requests

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

@app.route('/generate_query', methods=['POST'])
def generate_query():
    # Receive the text input from the frontend
    input_text = request.json.get('text')  # Use .json for JSON data
    print(f"Received input text: {input_text}")  # Debug: Log the received text

    # Process the text to generate a Boolean query
    boolean_query = extract_symptoms_from_text(input_text)
    print(f"Generated Boolean query: {boolean_query}")  # Debug: Log the generated Boolean query

    # Return the query in JSON format
    return jsonify({"boolean_query": boolean_query})  # Return the boolean query

if __name__ == '__main__':
    print("Starting Flask server...")  # Debug: Starting server
    app.run(debug=True)
