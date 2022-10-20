import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    element.textContent = 'Testing, testing';

    return element;
}

document.body.appendChild(component());