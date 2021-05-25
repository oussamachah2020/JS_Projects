const timeContent = document.querySelector('.time');
const items = document.querySelectorAll(".time-format h4");

const FutureDate = new Date(2021,4,3,21,01,0);

const FutureTime = FutureDate.getTime();

function getTime() {
    const Today = new Date().getTime();
    const Diff = FutureTime - Today;
    
    let OneDay = 24 * 60 * 60 * 1000;
    let OneHour = 60 * 60 * 1000;
    let OneMinute = 60 * 1000;

    let Day = Math.floor(Diff / OneDay);
    let hour = Math.floor((Diff % OneDay) / OneHour);
    let minute =  Math.floor((Diff % OneHour) / OneMinute);
    let second = Math.floor((Diff % OneMinute) / 1000); 

    const values = [Day,hour,minute,second];

    function format(item) {
        if(item < 10) {
            return item = `0${item}`;
        }
        return item;
    }

    items.forEach(function(item,index) {
        item.innerHTML = format(values[index]);
    })
};

let countdown = setInterval(getTime,1000);

getTime();
