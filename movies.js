// Example movie text data copied from Telegram or similar source
const movieText = `
Image URL: https://m.media-amazon.com/images/M/MV5BZmFlMTMyMzQtNmI4NC00YTcyLTgwOGUtMzc4YjcyNDUyOGY3XkEyXkFqcGc@._V1_.jpg
Title: Don't Move
Rating: ⭐️ 6.1 / 10
Release Date: 25/10/2024 (United States)
Genre: 🧟 Horror, Thriller
Language: English
Story Line: It follows a seasoned killer as he injects a grieving woman with a paralytic agent. She must run, fight and hide before her body shuts down.
Directors: Brian Netto, Adam Schindler
Stars: Finn Wittrock, Moray Treadwell, Daniel Francis, Denis Kostadinov, Kate Nichols, Kelsey Asbille, Dylan Beam
`;

// Function to parse movie text data
function parseMovieText(text) {
    const imageUrlMatch = text.match(/Image URL: (.+)/);
    const titleMatch = text.match(/Title: (.+)/);
    const genreMatch = text.match(/Genre: (.+)/);
    const languageMatch = text.match(/Language: (.+)/);
    const storyLineMatch = text.match(/Story Line: (.+)/);

    return {
        imageUrl: imageUrlMatch ? imageUrlMatch[1] : '',
        title: titleMatch ? titleMatch[1] : 'Untitled',
        genre: genreMatch ? genreMatch[1] : 'Unknown',
        language: languageMatch ? languageMatch[1] : 'Unknown',
        storyLine: storyLineMatch ? storyLineMatch[1] : 'No description available.'
    };
}

// Parse the data
const movieData = parseMovieText(movieText);

// Function to populate the gallery with movie data
function populateGallery(data) {
    const gallery = document.getElementById('movieGallery');
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.style.backgroundImage = `url(${data.imageUrl})`;

    movieCard.innerHTML = `
        <div class="movie-info">
            <h4>${data.title}</h4>
            <p><strong>Genre:</strong> ${data.genre}</p>
            <p><strong>Language:</strong> ${data.language}</p>
            <p>${data.storyLine}</p>
        </div>
    `;

    gallery.appendChild(movieCard);
}

// Call the function to display movie data
populateGallery(movieData);
