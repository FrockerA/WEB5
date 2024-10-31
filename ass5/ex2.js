function sortWords() {
    const input = document.getElementById('inputText').value;

    const sortedSentence = input.split(" ")
        .map(word => word.split("").sort().join(""))
        .join(" ");

    document.getElementById('output').innerText = sortedSentence;
}


