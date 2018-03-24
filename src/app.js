import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp/>, window.document.getElementById("app"));











































/* const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    )
}; */

/* const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
); */



/* ReactDOM.render(
    <Layout>
        <div>
            <h1>Page Title</h1>
            <p>This is my page</p>
        </div>
    </Layout>
, document.getElementById('app')); */













/* class OldSyntax {
    constructor() {
        this.name = 'Mike';
    }

    getGreeting() {
        return `Hi, I am ${this.name}.`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;


class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi, I am ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGreeting = newSyntax.getGreeting;
console.log(newGreeting()); */



/* import validator from 'validator';

console.log(validator.isEmail('test@gmail.com')); */

/* import oduzimanje, { square, add } from './utilis.js';
import isSenior, { isAdult, canDrink } from './person.js';

console.log(isAdult(100));
console.log(canDrink(200));
console.log(oduzimanje(200, 100));
console.log(isSenior(64)); */