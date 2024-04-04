var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}
var bestCustomer = setBestCustomer();
function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  
  leastFavoriteCustomer = 'someone else';
}
console.log(upperCaseCustomerName()); 