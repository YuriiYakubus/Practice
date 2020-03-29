const yura = new User();

yura.name = 'Yura';
yura.iin = 'abcdEFJG';

console.log(yura.name);
console.log(yura.iin);

const citizen = new Citizen(['1234567a', '1234321r']);
citizen.bad_iin = '1234567a';
console.log(citizen.bad_iin);

const zen = new MegaCitizen({ ERR_IIN_LENGTH: 'длина iin неправильная', ERR_IIN_SYMBOL: 'некорректные символы в iin', IIN_BLACKLIST: 'iin в черном списке' });
zen.bad_iin = '3425f';
console.log(zen)