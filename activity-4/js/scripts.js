// weelcome message
var user = 'Mike';
var salutation = 'Hello, ';
var message = salutation + user + '! Here are the latest Atom reviews.';
var greetingEl = document.getElementById('welcome');

greetingEl.textContent = message;

//product pricing
var price = 20,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price')
    studentPriceEl = document.getElementById('studentpricedisplay');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);