const list = document.querySelector('ul').querySelectorAll('li');
const submitBtn = document.querySelector('.submit');
const main = document.querySelector('main');
const bottomArticle = document.querySelector('.article-bottom');
let rate = document.querySelector('.rate');

list.forEach(element => {
    element.addEventListener('click', function(){
        list.forEach(ul=>ul.classList.remove('active'));

        this.classList.add('active');
        // console.log(this);
        rate.innerHTML = this.innerHTML;
    })
});

submitBtn.addEventListener('click', () => {
    main.style.animation = "animationMain 1s forwards";
    bottomArticle.style.animation = "bottomAnimation 2s forwards";
});