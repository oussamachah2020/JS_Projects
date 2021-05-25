const TapBtn = document.querySelectorAll('.tap-btn');
const About = document.querySelector('.about');
const articles = document.querySelectorAll('.content');


About.addEventListener('click',function(e) {
    // <--get the data-id of all buttons-->
    const id = e.target.dataset.id;

    if(id) {
        // <--for each button remove active class and add it with the data-->
        TapBtn.forEach(function(btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        //<--for each article remove active class so they don't be displayed-->
        articles.forEach(function(article) {
            article.classList.remove("active");
        });

        // <--get the active class in the data to be disayed-->
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});