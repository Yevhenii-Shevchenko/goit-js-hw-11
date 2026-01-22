console.log('start');
// import axios from 

const form = document.querySelector('.form');
const input = document.querySelector('.delay-input');
input.addEventListener('input', logInput);

function logInput(event) {
    console.log(event.target.value);
    
}


form.addEventListener('submit', querySearch);
function querySearch(event) {
    event.preventDefault();
    const query =(event.target.elements["search-text"].value.trim());
    console.log("🚀 ~ querySearch ~ query:", query)
    
}
