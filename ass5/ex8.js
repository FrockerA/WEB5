function splitSentences() {
    const paragraph = document.querySelector('#par'); 
    paragraph.innerHTML = paragraph.innerHTML
        .split(/(?<=[.!?])/)
        .join('</p><p>') + '</p>';

    
}