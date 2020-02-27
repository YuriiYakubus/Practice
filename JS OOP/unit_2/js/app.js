// Task 1
// и метод getCost (count) который возвращает стоимость количества единиц товара. 
// Ввели 5 - возвратит стоимость 5 единиц.

goods.price = 225;
goods.unit = 4;

console.log('************* Task 1 *************');
console.log(goods.getCost());

// Task 2
// Дополните объект двумя методами

// метод imperialSize () который возвращает массив [this.size_x, this.size_y] 
// преобразованных размеров в дюймы(в одном // дюйме 25.4 миллиметров). Значения должны быть округлены до сотых.
// метод isSquare () - возвращает true или false в зависимости от того, является ли плитка квадратная.

tile.size_x = 900;
tile.size_y = 945;

console.log('************* Task 2 *************');
console.log(tile.imperialSize());
console.log(tile.isSquare());

// Task 3
// В данном объекте размеры одинаковы для всех и равны:
// size_x = 1292 (mm)
// size_y = 194 (mm)
// Дополните объект двумя методами
// метод getBoard(square) int принимает параметр площади в m2 и возвращает количество досок ламината.
// метод getUnitCount(square) int - принимает параметр в m2 и возвращает количество полных упаковок 
// (округление в большую сторону).

laminate.size_x = 1292;
laminate.size_y = 194;

console.log('************* Task 3 *************');
console.log(laminate.getBoard(500));

// Task 4 
// Мы упустили важный параметр у каждого товара есть уникальный номер артикул. добавим art в объект goods.
//Убедитесь, что он стал доступен и в laminate и в tile.

goods.art = 432145;
tile.art = 432144;
laminate.art = 432135;

console.log('************* Task 4 *************');
console.log(goods.art);
console.log(tile.art);
console.log(laminate.art);

// Task 5
// Давайте пощупаем полиморфизм - в объекте laminate заменим свойство img на массив. 
//Теперь у нас везде есть свойства img, однако они реализованы по - разному.В дальнейшем поработаем с этим.
goods.image = ['goods_image_1', 'goods_image_2']
laminate.image = ['laminate_image_1', 'laminate_image_2'];

console.log('************* Task 5 *************');
console.log(goods.image);
console.log(tile.image);
console.log(laminate.image);