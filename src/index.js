import _ from 'lodash';

function componet(){
    const element = document.createElement('div');

    element.innerHTML = _.join(['hello','webpack'],' ');
    return element;
}

document.body.appendChild(componet());