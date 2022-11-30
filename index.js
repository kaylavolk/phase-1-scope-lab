// Write your solution in this file!
var customerName = 'bob'
console.log(customerName)
function upperCaseCustomerName(){
   customerName = customerName.toUpperCase();
}
function setBestCustomer(){
    bestCustomer = 'not bob'
}
function overwriteBestCustomer(customer){
    bestCustomer = customer
}
const leastFavoriteCustomer = 'probably bob'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'definitely bob'
}