function convert() {
    var conversionType = document.getElementById("conversionType").value;
    var inputValue = document.getElementById("inputValue").value;
    var result = "";

    switch (conversionType) {
        case "binToDec":
            result = parseInt(inputValue, 2);
            break;
        case "binToHex":
            result = parseInt(inputValue, 2).toString(16).toUpperCase();
            break;
        case "binToOct":
            result = parseInt(inputValue, 2).toString(8);
            break;
        case "decToBin":
            result = parseInt(inputValue, 10).toString(2);
            break;
        case "decToHex":
            result = parseInt(inputValue, 10).toString(16).toUpperCase();
            break;
        case "decToOct":
            result = parseInt(inputValue, 10).toString(8);
            break;
        case "hexToBin":
            result = parseInt(inputValue, 16).toString(2);
            break;
        case "hexToDec":
            result = parseInt(inputValue, 16);
            break;
        case "hexToOct":
            result = parseInt(inputValue, 16).toString(8);
            break;
        case "octToBin":
            result = parseInt(inputValue, 8).toString(2);
            break;
        case "octToDec":
            result = parseInt(inputValue, 8);
            break;
        case "octToHex":
            result = parseInt(inputValue, 8).toString(16).toUpperCase();
            break;
        default:
            result = "Pilihan tidak valid";
    }

    document.getElementById("result").textContent = result;
}