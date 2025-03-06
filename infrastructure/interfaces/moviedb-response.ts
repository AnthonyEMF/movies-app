// Copiar Headers de las respuesta
// Ctrl + Shift + P -> Paste JSON as Code
export interface MovieDBMoviesResponse {
    dates:         Dates;
    page:          number;
    results:       MovieResult[];
    total_pages:   number;
    total_results: number;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface MovieResult {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}
