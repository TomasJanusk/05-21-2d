import ajaxService from "./ajaxService";
import createMovieCard from "./createMovieCard";

const searchCode = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = document.querySelector('.term').value;
        let searchResponse;
        ajaxService(searchTerm)
            .then(result => {
                searchResponse = result;
                if (searchResponse.Response === "False") {
                    document.querySelector('.error-message').style.display = 'block';
                } else {
                    document.querySelector('.error-message').style.display = 'none';
                    const movieCardHTML = createMovieCard(searchResponse);
                    document.querySelector('.result').innerHTML = movieCardHTML;

                    document.querySelector('.add-comment-btn').addEventListener('click', (event) => {
                        const imdbID = event.target.dataset.imdbid;
                        const commentInput = document.querySelector('.comment-input').value;
                        if (commentInput) {
                            let comments = JSON.parse(localStorage.getItem(imdbID)) || [];
                            comments.push(commentInput);
                            localStorage.setItem(imdbID, JSON.stringify(comments));
                            document.querySelector('.comment-input').value = '';
                            const commentsHTML = comments.map(comment => `<p>${comment}</p>`).join('');
                            document.querySelector('.comments').innerHTML = commentsHTML;
                        }
                    });
                }
            });
    });
};

export default searchCode;
