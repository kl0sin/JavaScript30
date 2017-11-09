const button1 = document.querySelector(".button1");
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }, { name: 'Criss', age: 4 }];

button1.addEventListener('click', makeGreen);

function makeGreen() {
    this.style.color = '#295cc9';
    this.style.fontSize = '1.2em';
}

console.log('Hello I\'m a %s string!', 'poop');

console.log('%cHello I\'m some great text', 'font-size: 20px; color: #fff; background-color: #000000;');

console.warn('Oh NOOOO');

console.error('Oh crap!');

console.info('Crocodiles eat 3-4 people per year');

console.assert(button1.classList.contains('ouch'), 'That is wrong!');

console.clear();

console.log(button1);
console.dir(button1);

console.clear();

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');

console.clear();

console.time('fetching data');
fetch('https://api.github.com/users/kl0sin')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

console.table(dogs);