const reviews = [
    {
        id: 1,
        image: "https://i2.wp.com/toyp.jci.cc/wp-content/uploads/2020/06/Akash-Chourasiya.jpg?ssl=1",
        name: "Steven",
        job: "Web Developer",
        info: "My name is Steven and i'am a self-taught Full-stuck web-developer, i use different Technologies specialy javascript.",
    },

    {
        id: 2,
        name: "Jordan",
        image:"https://www.euroshop-tradefair.com/cache/pica/2/1/0/1/0/2/136951555571194/Bolz.PNG",
        job: "Software Engineer",
        info:"Hello,I'am a Software engineer at Microsoft,with 10 years of experience and i really love my career."
    },

    {
        id:3,
        name:"Alex",
        image:"https://profile-images.xing.com/images/1e92785312a6f5a11a21184211b5c7ac-4/franziska-schmeck.256x256.jpg",
        job:"UX Designer",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores magnam dignissimos pariatur non aliquid.",
    },
];

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');

const name = document.getElementById('name');
const image = document.getElementById('image');
const job = document.getElementById('job');
const info = document.getElementById('info');

let CurrentItem = 0;

// <-Travel in the DOM structure->

window.addEventListener('DOMContentLoaded',function() {
    ShowPerson(CurrentItem);
});

// <-change context for each person->

function ShowPerson() {
    const item = reviews[CurrentItem];
    image.src = item.image;
    name.textContent = item.name;
    job.textContent = item.job
    info.textContent = item.info;
}

// <-show me the next person->

nextBtn.addEventListener('click',function() {
    CurrentItem++;
    if(CurrentItem > reviews.length - 1) {
        CurrentItem = 0;
    }
    ShowPerson();
});

// <-show me the previous person->

prevBtn.addEventListener('click',function() {
    CurrentItem--;
    if(CurrentItem < 0) {
        CurrentItem = reviews.length - 1;
    }
    ShowPerson();
});

// <-Get natural random number within the reviews array->

function RandomNumber() {
    return Math.floor(Math.random() * reviews.length);
}

// <-show me randomly a person->

randomBtn.addEventListener('click',function() {
    CurrentItem = RandomNumber();
    ShowPerson();
});