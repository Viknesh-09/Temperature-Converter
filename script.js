document.getElementById('convert').addEventListener('click', function() {
    // Get the value from the input field
    const celsius = parseFloat(document.getElementById('celsius').value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('result').textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid temperature.';
    }
});
