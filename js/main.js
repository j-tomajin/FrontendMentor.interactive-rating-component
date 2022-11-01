const label = document.querySelector('form').querySelectorAll('label');
const submitBtn = document.querySelector('.submit');
const main = document.querySelector('main');
const bottomArticle = document.querySelector('.article-bottom');
let rate = document.querySelector('.rate');

label.forEach(element => {
    element.addEventListener('click', function(){
        label.forEach(rate.innerHTML = this.innerHTML);
    })
});

submitBtn.addEventListener('click', () => {
    main.style.animation = "animationMain 1s forwards";
    bottomArticle.style.animation = "bottomAnimation 2s forwards";
});