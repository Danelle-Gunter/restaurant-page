import './style.css';

function createHeader() {
    const header = document.createElement("header");
    header.setAttribute('id', 'header');

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Whatever";

    header.appendChild(restaurantName);
    header.appendChild(createNav());
    
    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'navigation');

    const list = document.createElement('ul');
    list.classList.add('nav-ul');
    nav.appendChild(list);

    const listItems = ['Menu', 'LOGO', 'Contact'];
    
    for (const item of listItems) {
        const li = document.createElement('li');
        li.classList.add('nav-li');
        li.textContent = item;
        list.appendChild(li);
    }

    return nav;
}

function createMain() {
    const main = document.createElement("main");
    main.setAttribute('id', 'main');

    main.textContent = "Whatever you want to eat, we have it - maybe";

    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.setAttribute('id', 'footer');

    const copyright = document.createElement('p');
    copyright.textContent = `Copyright ${new Date().getFullYear()}`;

    footer.appendChild(copyright);

    return footer;
}

function createWebpage() {
    
    const webpage = document.createElement('div');
    webpage.setAttribute('id', 'container');

    webpage.appendChild(createHeader());
    webpage.appendChild(createMain());
    webpage.appendChild(createFooter());

    return webpage;
}

document.body.appendChild(createWebpage());