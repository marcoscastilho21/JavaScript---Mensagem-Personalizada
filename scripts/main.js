// Código do alternador de imagem
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Código de mensagem de boas-vindas personalizado
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Por favor visitante, insira seu nome..');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla é Legal, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla é Legal, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


