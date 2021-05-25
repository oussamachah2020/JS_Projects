const ShowBtn1 = document.querySelector('.plus-btn-1');
const HideBtn1 = document.querySelector('.minus-btn-1');
const ShowText1 = document.querySelector('.show-text-1');

const ShowBtn2 = document.querySelector('.plus-btn-2');
const HideBtn2 = document.querySelector('.minus-btn-2');
const ShowText2 = document.querySelector('.show-text-2');

// <-For the First Modal->

ShowBtn1.addEventListener('click',function() {
    const text1 = answers[0];
    ShowText1.textContent = text1;
});

HideBtn1.addEventListener('click',function() {
  ShowText1.textContent = "";
});

// <-For the Second Modal->

ShowBtn2.addEventListener('click',function() {
    const text2 = answers[1];
    ShowText2.textContent = text2;
});

HideBtn2.addEventListener('click',function() {
    ShowText2.textContent = "";
});
