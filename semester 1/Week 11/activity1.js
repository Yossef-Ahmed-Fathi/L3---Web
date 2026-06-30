let movies = ["The Odyssey", "The Iliad", "The Divine Comedy"];
console.log("Current list of movies:");
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

function addMovie(movie) {
    movies.push(movie);
    console.log(`${movie} has been added to the list.`);
    console.log(`The current list of movies is: ${movies.join(", ")}`);
}

function removeMovie() {
    movies.pop();
    console.log(`The last movie has been removed from the list.`);
    console.log(`The current list of movies is: ${movies.join(", ")}`);
}


console.log("---------------------------------------------");
addMovie("The Aeneid");
console.log("---------------------------------------------");
removeMovie();