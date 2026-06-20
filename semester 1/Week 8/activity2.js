//Defining and Visualizing Movie Names and Rating
let movie1 = {name : "The Dark Knight", rating : 10};
let movie2 = {name : "Interstellar", rating : 8};
let movie3 = {name : "Inception", rating : 9};

//Visualizing The Movie Names and Ratings
console.log(`${movie1.name} --> Rating : ${movie1.rating}`)
console.log(`${movie2.name} --> Rating : ${movie2.rating}`)
console.log(`${movie3.name} --> Rating : ${movie3.rating}`)

//Filtering Movie Names if Includes "The"
let m1include = movie1.name.includes('The');
let m2include = movie2.name.includes('The');
let m3include = movie3.name.includes('The');

//Visualizing Movie Names If Includes "The"
console.log(`${movie1.name} Includes 'The' : ${m1include}`);
console.log(`${movie2.name} Includes 'The' : ${m2include}`);
console.log(`${movie3.name} Includes 'The' : ${m3include}`);

//Defining and visualizing MIN/MAX Rating
let maxRating = Math.max(movie1.rating, movie2.rating, movie3.rating);
let minRating = Math.min(movie1.rating, movie2.rating, movie3.rating);
console.log(`The Highest Rating is ${maxRating}`);
console.log(`The Min Rating is ${minRating}`);

//Defining and Visualizing Total Ratings
let total = movie1.rating + movie2.rating + movie3.rating;
console.log(`Total Rating is ${total}`);

//Defining and Visualizing Average Rating
let average = (movie1.rating + movie2.rating + movie3.rating) / 3;
console.log(`Average Rating : ${average}`);

//Defining and Visualizing Recommendation Date
let today = new Date();
let fullYear = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
console.log(`Recommendation Date : ${date}/${month -2}/${fullYear}`);

//Defining and Visualizing Valid Ratings
let validRating = (movie1.rating < 0 || movie1.rating != null) && (movie2.rating < 0 || movie2.rating != null) && (movie3.rating < 0 || movie3.rating != null);
console.log(`All Ratings Valid : ${validRating}`);

// Defining and Visualizing Highly Recommended
let highlyRecommended = movie1.rating > 7 && movie2.rating > 7 && movie3.rating > 7;
console.log(`Highly Recommended : ${highlyRecommended}`);

// Defining and Visualizing Perfect 10 Movies Exist
let perfectMovies = movie1.rating > 6 && movie2.rating > 6 && movie3.rating > 6;
console.log(`Perfect 10 Movies Exist : ${perfectMovies}`)
