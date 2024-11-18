const inputBtn = document.getElementById('check-btn');

inputBtn.addEventListener("click", checkInput);


function checkInput() {
  const inputText = document.getElementById("text-input").value;
  const resultElement = document.getElementById("result");

  if (inputText === ""){
    alert("Please input a value");
  }

  const regex = /[^a-z0-9]/g;
  const cleanInput = inputText.toLowerCase().replace(regex, "");
  const reverseInput = cleanInput.split("").reverse().join("");
  const isPalindrome = cleanInput === reverseInput;

  if (isPalindrome){
    resultElement.innerText = `${inputText} is a palindrome`;
  }else resultElement.innerText = `${inputText} is not a palindrome`;
}


