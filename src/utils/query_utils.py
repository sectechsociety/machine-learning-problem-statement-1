# src/utils/query_utils.py

def generate_boolean_query(parsed_terms):
    # For simplicity, we’ll join terms with AND logic
    if not parsed_terms:
        return ""

    # Example Boolean query
    query = " AND ".join(f'("{term}")' for term in parsed_terms)
    return query
