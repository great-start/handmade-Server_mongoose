const path = require('path');

console.log(path.join('one', 'two', 'three'));
console.log('Склеить участки пути',path.join(__dirname,'one', 'two', 'three'))
const fullPath = path.resolve('one', 'two', 'three.js');
console.log('Путь на несколько уровней назад',path.resolve(__dirname,'..','..'))
console.log('Парсинг', path.parse(fullPath));


console.log('Разделитель в ОС',path.sep);
console.log('Название файла', path.basename(fullPath));
console.log('Расширение файла', path.extname(fullPath));

// ----------------------------------------------------------------------------------

const siteURL = 'https://localhost:5000/users/photos/avatar/123.png?user=TOlya';

const url = new URL(siteURL);

console.log(url);