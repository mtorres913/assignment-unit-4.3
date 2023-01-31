console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5

function addItem(item){
    basket.push(item);
    return true;
}
addItem('grape');

//testing addItem
console.log(addItem('grape'));
console.log(basket);

function listItems(){
    for (let item of basket){
        console.log(item);
    }
}

//testing listItems
addItem('apple');
listItems();
addItem('bread');
console.log (basket)

function empty(){
    while (basket.length > 0){
        basket.pop();
    }
}
//basket = []; also works as substitue of while loop
//testing empty function
empty()
console.log(basket)


function isFull(){
     if (basket.length < maxItems){
    return false;
    } else {
        return true;
     }
}
//testing isFull function
console.log(isFull())

// function addItem(item){
//     if (isFull()){
//     basket.push(item);
//     return true;
//     } else {
//         return false;
//     }
   
// }
console.log(basket)
console.log(addItem('beans'))
console.log(addItem('lightsaber'))
console.log(addItem('pie'))
console.log(basket)
console.log(basket.length)