//menu items
const menu = [
    {
        id:1,
        image:"./image/puncake.jpg",
        category:"breakfast",
        info:"Exta puncake with fruits",
        price:"15$",
    },
    {
        id:2,
        image:"./image/CB.jpg",
        category:"breakfast",
        info:"Full-Breakfast",
        price:"25$",
    },
    {
        id:3,
        image:"./image/burger.jpg",
        category:"lunch",
        info:"Cheese Burger with extra fries ",
        price:"21$",
    },
    {
        id:4,
        image:"./image/pasta.jpg",
        category:"lunch",
        info:"Pasta with meat-balls",
        price:"13$",
    },
    {
        id:5,
        image:"./image/soup.jpg",
        category:"Dinner",
        info:"Chicken soup ",
        price:"11$",
    },
]

const SectionContainer = document.querySelector('.menu-container');
const container = document.querySelector('.btns-container');

//DOM-traveling
window.addEventListener('DOMContentLoaded',function() {
    displayMenuItems(menu);

    //<--buttons displaying roles-->

    const categories = menu.reduce(
        function(value,item) {
            if(!value.includes(item.category)) {
                value.push(item.category);
            }
            return value;
        },["All"]);
    const categoryBtn = categories.map(function(category) {
        return `<button class="filter-btn" 
                data-id=${category}>
                    ${category}
                </button>`
    }).join("");
    container.innerHTML = categoryBtn;

    //<----------------------------->

    //<--Filter items-->

    const FilterBtns = document.querySelectorAll('.filter-btn');
    FilterBtns.forEach(function(btns) {
        btns.addEventListener('click',function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                if(menuItem.category === category) {
                    return menuItem;
                }
            });
            if(category === "All") {
                displayMenuItems(menu);
            }else {
                displayMenuItems(menuCategory);
            }
        });
    });
    
    //<---------------->
});


//<--Showing the menu items-->

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return ` <section class="menu-container">
        <a href="">
            <img src=${item.image} width="400px"
            height="200px">
        </a>
        <p class="info">${item.info}<span class="price1">${item.price}</span></p>
        </section>`;
    });
    displayMenu = displayMenu.join("");
    SectionContainer.innerHTML = displayMenu;
}

//<--------------------------->