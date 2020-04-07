import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'

// object destructureing
const Person = {
    name: undefined,
    age: 60,
    location: {
        city: 'Ahmedabad',
        temp: 40
    }

};

const {name='guest', age, location} = Person
const {temp, city} = location
console.log(`${name} is ${age} and from ${city} has temprature of ${temp}`)

// array destructuring
const address = ['add1', 'add2', 'add3', 'add4'];
const [street, city1, state, zip] = address;
console.log(`you have address ${street} and ${zip}`)

ReactDOM.render('', document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
