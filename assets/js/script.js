const data = [
    {
        "name": "Biryani",
        "categories": ["lunch","dinner"],
        "price": "$32",
        "rating": 4,
        "image": "assets/img/menu images/biryani.jpg"
    },
    {
        "name": "Pasta",
        "categories": ["lunch","dinner"],
        "price": "$25",
        "rating": 5,
        "image": "assets/img/menu images/pasta.jpg"
    },
    {
        "name": "Burger",
        "categories": ["lunch"],
        "price": "$18",
        "rating": 4,
        "image": "assets/img/menu images/burger.jpg"
    },
    {
        "name": "Chicken Pizza",
        "categories": ["dinner"],
        "price": "$28",
        "rating": 5,
        "image": "assets/img/menu images/chicken-pizza.jpg"
    },
    {
        "name": "Roasted Chicken",
        "categories": ["breakfast","dinner"],
        "price": "$30",
        "rating": 4,
        "image": "assets/img/menu images/roasted-chicken.jpg"
    },
    {
        "name": "Shawarma",
        "categories": ["lunch", "dinner"],
        "price": "$20",
        "rating": 5,
        "image": "assets/img/menu images/shawarma.jpg"
    },
    {
        "name": "Steak",
        "categories": ["breakfast","lunch","dinner"],
        "price": "$35",
        "rating": 5,
        "image": "assets/img/menu images/steak-and-fries-with-sauce.jpg"
    },
    {
        "name": "Sweet",
        "categories": ["breakfast"],
        "price": "$12",
        "rating": 3,
        "image": "assets/img/menu images/sweet.jpg"
    }
];


// DECLERATION
const tabsElem = document.querySelectorAll(".tabs a");
const burgerMenu = document.querySelector(".burger-menu");
const tabs = document.querySelector(".tabs");
const menutabs = document.querySelectorAll('.menu-tab');
const menuContainer = document.getElementById('menu-container');

// handle the color change of active tab
function handleTab(event) {
    tabsElem.forEach(t => t.classList.remove("active"));
    this.classList.add("active");
    tabs.classList.remove("show-tabs")
    setTimeout(()=>{
      tabsElem.forEach(t => t.classList.remove("active"));
      tabs.firstElementChild.firstChild.classList.add("active") 
    },1000)
}

tabsElem.forEach(tab => {        
    tab.addEventListener("click",handleTab)
})

// BURGER MENU FUNCTIONALITY
burgerMenu.addEventListener("click", () => {
    tabs.classList.toggle("show-tabs");
});

// MENU CONTAINER

// Creating Cards in Menu
data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-categories', item.categories.join(' '));

    card.innerHTML = `
        <div class="menu-img">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="menu-content">
            <div class="menu-text">
                <h3>${item.name}</h3>
            </div>
            <div class="menu-info">
                <div class="rating">${getRatingStars(item.rating)}</div>
                <div class="price">${item.price}</div>
            </div>
        </div>
    `;

    menuContainer.appendChild(card);
});

// Add event listeners to tabs after cards are created
menutabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-tab');
        menutabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        document.querySelectorAll('.card').forEach(card => {
            if (category === "all") {
                card.style.display = 'block';
            } else {
                const categories = card.getAttribute('data-categories').split(' ');
                card.style.display = categories.includes(category) ? 'block' : 'none';
            }
        });
    });
});

function getRatingStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fa-solid fa-star"></i>';
        } else {
            stars += '<i class="fa-regular fa-star"></i>';
        }
    }
    return stars;
}

// Scroll triggering animation
AOS.init();
