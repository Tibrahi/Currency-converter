function convert() {
    // Get the input values
    var amount = document.getElementById("amount").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    // Define the conversion rates for each currency
    var conversion_rates = {
        "USD": {
            "EUR":0.92,
            "Rwf": 1119.28
        },
        "EUR": {
            "USD":1.09,
            "Rwf":1219.40
        },
        "Rwf": {
            "USD":  0.00082,
            "EUR":0.00089
        }
        


    };

    // Convert the amount to the target currency
    var rate = conversion_rates[from][to];
    var converted_amount = amount * rate;

    // Display the result
    document.getElementById("result").innerHTML = amount + " " + from + " = " + converted_amount.toFixed(2) + " " + to;
}