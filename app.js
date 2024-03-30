const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

checkBtn.addEventListener('click', () => {
  checkPalindrome(textInput.value);
});

const checkPalindrome = (str) => {
  const originalStr = str;

  if(str === "") {
    alert("Please input a value");
    return;
  }

  resultDiv.replaceChildren();

  
  const lowerStr = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  const altStr = lowerStr.split("").reverse().join("");

  let resultMsg = '';

  if(lowerStr === altStr) {
    resultMsg = `${originalStr} is a palindrome`;
  } else {
    resultMsg = `${originalStr} is not a palindrome`;
  }


const pEl = document.createElement('p');
pEl.innerHTML = resultMsg;
resultDiv.appendChild(pEl);

}