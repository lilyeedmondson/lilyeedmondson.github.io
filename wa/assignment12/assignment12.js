function random() {
    outputInt = randomNumber(0, 9);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  function submit() {
    alert(output.textContent);
    
  }
  function random1() {
    outputInt = randomNumber(0, 9);
    output.textContent = outputInt;
}

function random2() {
    outputInt = randomNumber(0, 9);
    output.textContent = outputInt;
}

function random3() {
    outputInt = randomNumber(0, 9);
    output.textContent = outputInt;
}

function random4() {
    outputInt = randomNumber(0, 9);
    output.textContent = outputInt;
}

function random5() {
    outputInt = randomNumber(0, 9);
    output.textContent = outputInt;
}

function random6() {
    outputInt = randomNumber(0, 9);
    output.textContent = outputInt;
}

function random7() {
    outputInt = randomNumber(0, 9);
    output.textContent = outputInt;
}

function random8() {
    outputInt = randomNumber(0, 9);
    output.textContent = outputInt;
}

function random9() {
    outputInt = randomNumber(0, 9);
    output.textContent = outputInt;
}

 
  const randomButton = document.querySelector('.random-button').addEventListener('click', random);
  const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);
  const randomButton1 = document.querySelector('.random-button1').addEventListener('click', random); 
  const randomButton2 = document.querySelector('.random-button2').addEventListener('click', random);
  const randomButton3 = document.querySelector('.random-button3').addEventListener('click', random);
  const randomButton4 = document.querySelector('.random-button4').addEventListener('click', random);
  const randomButton5 = document.querySelector('.random-button5').addEventListener('click', random);
  const randomButton6 = document.querySelector('.random-button6').addEventListener('click', random);
  const randomButton7 = document.querySelector('.random-button7').addEventListener('click', random);
  const randomButton8 = document.querySelector('.random-button8').addEventListener('click', random);
  const randomButton9 = document.querySelector('.random-button9').addEventListener('click', random);
