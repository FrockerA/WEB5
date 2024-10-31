function findFirstNonRepeated() {
    const input = document.getElementById('charInput').value;

    const charCount = {};
    for (let char of input) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of input) {
        if (charCount[char] === 1) {
            document.getElementById('nonRepeatedOutput').innerText = `First non-repeated character: ${char}`;
            return;
        }
    }

    document.getElementById('nonRepeatedOutput').innerText = "No non-repeated character found";
}
