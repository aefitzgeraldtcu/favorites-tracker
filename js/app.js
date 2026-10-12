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