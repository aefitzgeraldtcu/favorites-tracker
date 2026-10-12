let today = new Date().toLocaleDateString();
let myFavorite = {
    name: 'Starbucks on University Drive',
    category: 'coffee',
    rating: 5,
    notes: 'Great study spot with fast wifi',
    dateAdded: 'May 2026',
};
let displayText = myFavorite.name + ' - Rating: ' + myFavorite.rating + '/5';
let placeName = 'Starbucks';
let rating = 5;

console.log(myFavorite);
console.log(typeof myFavorite.name);
console.log(typeof myFavorite.rating);

console.log(today);

console.log(myFavorite.name);

console.log(placeName + ' - ' + rating + '/5');
console.log('⭐'.repeat(rating) + ' ' + placeName);

function greetFavorite(placeName, rating) {
    console.log(placeName + ' has ' + rating + ' stars!');
}
greetFavorite('Starbucks', 5);   // "Starbucks has 5 stars!"

const nameInput = document.getElementById('name');
console.log(nameInput.value); //what the user typed

const practiceForm = document.getElementById('add-favorite-form');

function handleSubmit(event) {
    event.preventDefault();
    console.log('You typed: ' + nameInput.value);
}

practiceForm.addEventListener('submit', handleSubmit);
