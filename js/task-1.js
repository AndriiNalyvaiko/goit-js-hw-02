function makeTransaction(quantity, pricePerDroid, customerCredits)
{
const totalPrice = quantity * pricePerDroid;
    if
        (allPrice > customerCredits) {
        return "Insufficient funds!"
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`
    }
}
const result1 = makeTransaction(5, 300, 23000);
console.log(result1); 
const result2 = makeTransaction(3, 1000, 15000);
console.log(result2); 
const result3 = makeTransaction(10, 5000, 8000);
console.log(result3); 
const result4 = makeTransaction(8, 2000, 1000);
console.log(result4); 
const result5 = makeTransaction(10, 500, 5000);
console.log(result5); 