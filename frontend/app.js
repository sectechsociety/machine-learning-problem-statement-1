document.getElementById("symptomForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the input text value
    let symptomText = document.getElementById("symptoms").value;

    // Send the input text to the Flask backend
    fetch("http://127.0.0.1:5000/generate_query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "text": symptomText }) // Send text as JSON
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        console.log("Received data:", data); // Debug: Log the received data

        // Display the generated Boolean query
        document.getElementById("result").innerText = "Generated Boolean Query: " + data.boolean_query;
    })
    .catch(error => {
        console.error("Error:", error); // Handle any errors
    });
});
