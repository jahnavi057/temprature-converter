function convertToCelsius() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result").innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid temperature in Celsius.";
    }
}
