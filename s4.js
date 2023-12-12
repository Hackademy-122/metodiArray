function java(x, y) {
return x.filter(elementi => elementi % y === 0 );
    
}
let array = [1, 3, 5, 12, 13, 14, 30];
let divisore = 3;
console.log(java(array,divisore));