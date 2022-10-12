export const getAnimeList = (URL, ...options) => {
    const [page, limit = 18] = options;
    if (options.length > 0) {
        return fetch(URL + new URLSearchParams({
                page,
                limit
            }).toString())
            .then((response) => response.json())
            .then(data => data.data);
    }
    return fetch(URL)
        .then((response) => response.json())
        .then(data => data.data);
};

export const getAnimeDetails = (animeId) => {
    return fetch(`https://api.jikan.moe/v4/anime/${animeId}`)
        .then((response) => response.json());
};