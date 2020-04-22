let list = new List(['one', 'two', 'three', 'four', 'five']);
let list2 = new List2(['one', 'two', 'three', 'four', 'five'], 'cssClass');
let list3 = new List3(['one', 'two', 'three', 'four'], ['text-center', 'bold', 'text-red']);


document.body.appendChild(list.render());
document.body.appendChild(list2.render());
document.body.appendChild(list3.render());