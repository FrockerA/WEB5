function shiftCharacters() {
    const input = document.getElementById('alphabetInput').value;
    let shiftedText = "";

    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);

        shiftedText += String.fromCharCode(((charCode - 97 + 1) % 26) + 97);
    }

    alert(shiftedText);
}
