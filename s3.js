let arr = [1,5,7,12];

let media = arr.reduce((insieme, elementi) => insieme + elementi, 0)/arr.length;

console.log(media);
console.log(arr.filter(elementi => elementi < media));
