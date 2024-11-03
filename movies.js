// Array of movie objects
const movies = [
    { title: "Movie 1", description: "Movie 1 Description", imageUrl: "kf1.jpg", link: "https://example.com/movie1" },
    { title: "Movie 2", description: "Movie 2 Description", imageUrl: "kf2.jpg", link: "https://example.com/movie2" },
    { title: "Movie 3", description: "Movie 3 Description", imageUrl: "kf3.jpg", link: "https://example.com/movie3" },
    { title: "Movie 4", description: "Movie 4 Description", imageUrl: "kf4.jpg", link: "https://example.com/movie4" },
    { title: "Movie 5", description: "Movie 5 Description", imageUrl: "kf5.jpg", link: "https://example.com/movie5" },
];

// Function to populate the movie gallery
function populateGallery() {
    const gallery = document.getElementById('movieGallery');
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.style.backgroundImage = `url('${movie.imageUrl}')`;

        const movieInfo = document.createElement('div');
        movieInfo.className = 'movie-info';
        movieInfo.innerHTML = `
            <h4>${movie.title}</h4>
            <p>${movie.description}</p>
            <a href="${movie.link}" target="_blank" style="color: ${getComputedStyle(document.body).getPropertyValue('--accent-color')}; text-decoration: underline;">More Info</a>
        `;

        movieDiv.appendChild(movieInfo);
        gallery.appendChild(movieDiv);
    });
}


// Call the function to populate the gallery on load
window.onload = populateGallery;
function populateGallery() {
    const gallery = document.getElementById('movieGallery');
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.style.backgroundImage = `url('${movie.imageUrl}')`;
        
        const movieInfo = document.createElement('div');
        movieInfo.className = 'movie-info';
        movieInfo.innerHTML = `
            <h4>${movie.title}</h4>
            <p>${movie.description}</p>
            <a href="${movie.link}" target="_blank">More Info</a>
        `;

        movieDiv.appendChild(movieInfo);
        gallery.appendChild(movieDiv.cloneNode(true)); // Duplicate for seamless effect
    });
}
function populateGallery() {
    const gallery = document.getElementById('movieGallery');
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.style.backgroundImage = `url('${movie.imageUrl}')`;

        const movieInfo = document.createElement('div');
        movieInfo.className = 'movie-info';
        movieInfo.innerHTML = `
            <h4>${movie.title}</h4>
            <p>${movie.description}</p>
            <a href="${movie.link}" target="_blank" style="color: ${getComputedStyle(document.body).getPropertyValue('--accent-color')}; text-decoration: underline;">More Info</a>
        `;

        movieDiv.appendChild(movieInfo);
        gallery.appendChild(movieDiv);
    });

    // Clone the first movie for looping effect
    const firstMovieClone = gallery.firstElementChild.cloneNode(true);
    gallery.appendChild(firstMovieClone);
}

// Call the function on load
window.onload = () => {
    populateGallery();
};
