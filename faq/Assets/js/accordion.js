
// Grab elements
function selectElement(selector){
    const element = document.querySelector(selector);
    if(element) return element; 
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
}

const accordion = selectElement('.accordion');
var exit = selectElement('.question');

accordion.addEventListener('click', function(e){
    if(e.target.classList[0] === 'question'){
        var answer = e.target.parentNode.nextElementSibling;
        answer.classList.toggle('show');
        e.target.classList.toggle('show');
    }
})
