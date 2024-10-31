function findLongestAndShortest() {
    const word1 = prompt("Enter the first word:");
    const word2 = prompt("Enter the second word:");
    const word3 = prompt("Enter the third word:");

    const words = [word1, word2, word3];

    let longest = words[0];
    let shortest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }

    document.getElementById('longest').innerText = "The longest word is: " + longest;
    document.getElementById('shortest').innerText = "The shortest word is: " + shortest;
}
