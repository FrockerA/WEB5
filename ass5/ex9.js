function countWords() {
    const paragraph = document.querySelector('#para');

    
    const words = paragraph.innerText.split(' ');

    const wordCount = words.length;
    alert(`The number of words in the paragraph is: ${wordCount}`);
}    