const createMovieCard = (movie) => {
    const comments = JSON.parse(localStorage.getItem(movie.imdbID)) || [];
    const commentsHTML = comments.map(comment => `<p>${comment}</p>`).join('');

    return `
        <div class="card mt-3">
            <div class="card-header">
                <h2>${movie.Title}</h2>
            </div>
            <div class="card-body">
                <img src="${movie.Poster}" alt="${movie.Title} Poster" class="img-fluid mb-3"/>
                <p><strong>Writer:</strong> ${movie.Writer}</p>
                <p><strong>Awards:</strong> ${movie.Awards}</p>
                <p><strong>Runtime:</strong> ${movie.Runtime}</p>
                <p><strong>imdbRating:</strong> ${movie.imdbRating}</p>
                <p><strong>Release Date:</strong> ${movie.Released}</p>
                <p><strong>Actors:</strong> ${movie.Actors}</p>
                <p><strong>Genre:</strong> ${movie.Genre}</p>
                <p><strong>Director:</strong> ${movie.Director}</p>
                <p><strong>Plot:</strong> ${movie.Plot}</p>
                <div class="comments-section">
                    <h3>Comments</h3>
                    <div class="comments">${commentsHTML}</div>
                    <textarea class="form-control mb-2 comment-input" placeholder="Add a comment"></textarea>
                    <button class="btn btn-secondary add-comment-btn" data-imdbid="${movie.imdbID}">Add Comment</button>
                </div>
            </div>
        </div>
    `;
};

export default createMovieCard;
