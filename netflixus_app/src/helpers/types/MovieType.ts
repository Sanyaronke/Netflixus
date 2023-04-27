export type Genre = {
    id: number;
    name: string;
    label?: string;
};

export type Poster = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    name?: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    runtime?: number;
    genres?: Genre[];
    hover?: boolean;
}

type ProductionCompany = {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

type spokenLanguages = {
    english_name: string;
    iso_639_1: string;
    name: string;
}

type BelongsToCollection = {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export type MovieDetail = {
    adult: false,
    belongs_to_collection: BelongsToCollection,
    backdrop_path: string,
    genres: Genre[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: 0.5,
    poster_path: null,
    production_companies: ProductionCompany[],
    spoken_languages: spokenLanguages[],
    release_date: string,
    revenue: number,
    runtime: number,
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}


export type MovieDetails = {
    page?: number;
    results?: Poster[];
    total_pages?: number;
    total_results?: number;
}


export type MovieDetailsWithGenre = {
    genre: string,
    results: Poster[];
}

type VideoDetails = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;

}

export type MovieVideo = {
    id: number,
    results: VideoDetails[]
}
