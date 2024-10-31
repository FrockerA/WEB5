function replaceQuestionMarks(){
    const pa = document.querySelector("#pa");
    pa.innerHTML = pa.innerHTML.replace(/\?/g, '*'); 
}

