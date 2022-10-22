import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
    
    const element = document.createElement('container');
    // element.classList.add('content');
    const navBar = document.createElement('nav');
    
    element.appendChild(navBar);
    element.textContent = 'Testing, testing';

    return element;
}

document.body.appendChild(component());