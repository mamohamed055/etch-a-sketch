//window on load very important
for (let i=0; i<16; i++){
    const newDiv1 = document.createElement("div");
    newDiv1.classList.add("container");
    document.body.appendChild(newDiv1);
    for (let j=0; j<16; j++){
        const newDiv2 = document.createElement("div");
        newDiv2.classList.add("content");
        newDiv1.appendChild(newDiv2);
    }
    newDiv1.style.flex;
}

let contentElements = document.getElementsByClassName("content");
const contentElementArr = Array.from(contentElements);
for (let i=0; i<contentElements.length; i++){
    contentElements[i].addEventListener("mouseover", event => event.target.style.backgroundColor = "black");
}

function createGrid() {
    let num = prompt("Please enter grid size not to exceed 100:", 64);
    if (num<=0 || num>100 || typeof num != "string") {
        num = 16;
    }
    document.getElementsByTagName('BODY')[0].innerHTML = '';
    for (let i=0; i<num; i++){
        const newDiv1 = document.createElement("div");
        newDiv1.classList.add("container");
        document.body.appendChild(newDiv1);
        for (let j=0; j<num; j++){
            const newDiv2 = document.createElement("div");
            newDiv2.classList.add("content");
            newDiv1.appendChild(newDiv2);
        }
        newDiv1.style.flex;
    }
    //code is run in sequence. This needs to be below the for loop 
    let contentElements = document.getElementsByClassName("content");
    const contentElementArr = Array.from(contentElements);
    for (let i=0; i<contentElements.length; i++){
        contentElements[i].addEventListener("mouseover", event => event.target.style.backgroundColor = "black");
    }
}