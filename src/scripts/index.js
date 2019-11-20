import _ from 'lodash';
import { ABC } from './test'
import '../styles/index.scss'

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());


const fn = () => {
    console.log('Hello From Index Dot JS')
};
fn();

console.log(ABC);

class X {
    a = 10;

    ABC(){
        console.log(a)
    }
}

let a = new X();
a.ABC();
