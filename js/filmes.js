document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'SUA_CHAVE_API';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const movies = data.results;
            const listaFilmes = document.getElementById('lista-filmes');

            movies.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.className = 'movie';
                movieElement.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.overview}</p>
                `;
                listaFilmes.appendChild(movieElement);
            });
        })
        .catch(error => console.error('Erro ao buscar filmes:', error));
});