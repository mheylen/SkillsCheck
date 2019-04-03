console.dir(document);

function consoleYell(){
}

console.dir(document.getElementById('my-button'));
document.getElementById("my-button").onclick = function (){
    console.warn('Dont eat the potato chips!'); 
};
console.dir(document.getElementById('my-button'));
document.getElementById("my-button").onclick = function (){
    console.warn('Dont eat the potato chips! AGAIN!'); 
}
function addedClickEvent(){
    console.log('clicked from the first added event');
}
    function addedClickEvent2(){
    console.log('clicked from the second added event');
}
document
.getElementById("my-button")
.addEventListener('click', addedClickEvent2);

document.body.onclick = function (){
    console.log('you clicked the body');
};
document.getElementById('my-button').onclick =  function (event) {
    console.log(event);
    event.stopPropagation();
};

document.querySelector("form").onsubmit = function (event){
    event.preventDefault();
    let name = document.querySelector("#email");
    document.querySelector(".message").innerHTML = name.value;
    name.value = "";

};

function makeSomething(){
    let newElement = document.createElement("a")
    let text = document.createTextNode('Go to da Googles!');
    newElement.setAttribute("href", "https://google.com");
    newElement.appendChild(text);

    document.body.appendChild(newElement);
}
document.querySelector(".cr-btn").onclick = makeSomething;