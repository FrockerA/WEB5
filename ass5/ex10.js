function highlightWords() {
    const paragraph = document.querySelector("#parag");
    paragraph.innerHTML = paragraph.innerText
    .split(' ')
    .map(word => word.toLowerCase().startsWith('a') ? `<span style="font-style: italic">${word}</span>` : word)
    .map(word => word.toLowerCase().endsWith('y') ? `<span style="text-decoration: underline">${word}</span>` : word)
    .join(' ');

}