document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'SUA_CHAVE_API';
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const series = data.results;
            const listaSeries = document.getElementById('lista-series');

            series.forEach(serie => {
                const serieElement = document.createElement('div');
                serieElement.className = 'serie';
                serieElement.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                    <h3>${serie.name}</h3>
                    <p>${serie.overview}</p>
                `;
                listaSeries.appendChild(serieElement);
            });
        })
        .catch(error => console.error('Erro ao buscar séries:', error));
});