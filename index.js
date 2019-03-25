/*
const TypeWriter = function(txtElement, words, wait=3000){
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

//Type Method
TypeWriter.prototype.type = function(){
  //get current word index
  const current = this.wordIndex % this.words.length
  //get full text of curent word
  const fullTxt = this.words[current];
  
  //check if deleting
  if(this.isDeleting){
    //Remove a character
    this.txt = fullTxt.substring(0, this.txt.length - 1);

  } else{
    //add a character
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  //Initial Type Speed
  let typeSpeed = 300;
  if(this.isDeleting){
    typeSpeed /=2;
  }

  //check if word is complete
  if(!this.isDeleting && this.txt === fullTxt){

    //pause at the end
    typeSpeed = this.wait;

    //set delete to true
    this.isDeleting = true;
  }else if(this.isDeleting && this.txt === ''){
    this.isDeleting = false;

    //move to next word
    this.wordIndex++;

    //pause before restart of typing 
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
}

//Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);

//The Init app
function init(){
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  //initialize typewriter
  new TypeWriter(txtElement, words, wait);
}

*/

class TypeWriter{
  constructor(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type(){
    //get current word index
  const current = this.wordIndex % this.words.length
  //get full text of curent word
  const fullTxt = this.words[current];
  
  //check if deleting
  if(this.isDeleting){
    //Remove a character
    this.txt = fullTxt.substring(0, this.txt.length - 1);

  } else{
    //add a character
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  //Initial Type Speed
  let typeSpeed = 300;
  if(this.isDeleting){
    typeSpeed /=2;
  }

  //check if word is complete
  if(!this.isDeleting && this.txt === fullTxt){

    //pause at the end
    typeSpeed = this.wait;

    //set delete to true
    this.isDeleting = true;
  }else if(this.isDeleting && this.txt === ''){
    this.isDeleting = false;

    //move to next word
    this.wordIndex++;

    //pause before restart of typing 
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
  }
}

//Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);

//The Init app
function init(){
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  //initialize typewriter
  new TypeWriter(txtElement, words, wait);
}