var header = document.querySelector('.head p');
var add_btn = document.getElementById('add-btn');
var inputValue = document.querySelector('input[name=input]');
var cancel = document.getElementsByClassName('fa-times');
var ul = document.querySelector('ul');



add_btn.addEventListener('click', function(){
if (inputValue.value !== '') {
    var ul = document.querySelector('ul');

    var lis = document.createElement('li');
    var span = document.createElement('span');
    var i1 = document.createElement('i');
    var i2 = document.createElement('i');
    var input = document.createElement('input');

    lis.className = 'note';
    i1.className = 'fas fa-times';
    i2.className = 'fas fa-edit';
    input.type = 'text';
    input.className = 'input2';

    lis.appendChild(span);
    lis.appendChild(i1);
    lis.appendChild(i2);
    lis.appendChild(input);

    span.textContent = inputValue.value;
    ul.appendChild(lis);
    inputValue.value ='';
}

})

ul.addEventListener('click', function(e){

    if(e.target.classList[1] === "fa-times"){
        var li = e.target.parentNode;
        ul.removeChild(li);
    }else if(e.target.classList[1] === "fa-edit"){
        var inp = e.target.nextElementSibling;
        inp.style.display = 'block';
        var li = e.target.parentNode;
        var cancel = li.children[1];
        var edit = li.children[2];
        cancel.style.display = 'none';
        edit.style.display = 'none';
        var span = inp.previousElementSibling.previousElementSibling.previousElementSibling;
        inp.value = span.textContent;
        
        inp.addEventListener('keypress', function(e){
            if(e.keyCode === 13){
                if(inp.value !== ''){
                    span.textContent = inp.value;
                    inp.style.display = 'none';
                    cancel.style.display = 'block';
                    edit.style.display = 'block';

                } else{
                    var li = inp.parentNode;
                    li.parentNode.removeChild(li);
                }
            } 

        })
    }
});
var hide = document.getElementById('hide');
var label = document.querySelector('label');

hide.addEventListener('click', function(){
    if(hide.checked) {
        ul.style.display = 'none';
        label.textContent = 'unhide Notes';
        
    }else {
        ul.style.display = 'block';
        label.textContent = 'Hide Notes';
    }
    });

    var search = document.querySelector('#search_note input');

    search.addEventListener('keyup', function(e){
        searchChar = e.target.value.toUpperCase();
        var notes = Array.from(ul.getElementsByTagName('li'));
        
        notes.forEach(function(note){
            var char = note.firstElementChild.textContent;
            if(char.toUpperCase().indexOf(searchChar) !== -1){
                note.style.display = 'block';
            } else{
                note.style.display = 'none';
            }
        })
    })

