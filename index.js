document.getElementsByClassName('container')
document.getElementById('container').style.color = 'red';
document.getElementById('container').style.backgroundColor = '#e2e2e2'

document.getElementById('text').innerHTML = 'My name is Nyambura and I am 21 years old'

let child = document.getElementById('container').childNodes;
console.log({child});

let children = document.getElementById('container').children;
console.log({children});

let p = document.createElement('p');
p.innerHTML = 'I am new'
document.getElementById('container').appendChild(p);
p.setAttribute('class', 'paragraph');
p.setAttribute('id','paragraph');
document.getElementById('paragraph').style.color = 'green'
let button = document.getElementById('button')
button.addEventListener('click',function(){
    button.innerHTML = 'Clicked!!'
    button.style.backgroundColor = '#f7bde7'
    button.style.padding = '10px'
    button.style.borderRadius = '5px'
    button.style.border= 'none'
})