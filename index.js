const color = ['red', 'green', 'blue'];
const [firstC, secondC, thirdC] = color;

console.log(secondC); 
console.log(thirdC); 


// second assignment

const person = { name: 'Alice', age: 25, city: 'Wonderland' };

const { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);

const settings = { theme: 'dark', language: 'en' };

const { theme, language, property = 'light'} = settings;

console.log(theme);
console.log(language);
console.log(property);