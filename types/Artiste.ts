export interface Artiste {
    name: string;
    image: string;
    songs: Song[];
    genre: string;
}

export interface Song {
    title: string;
    image: string;
    src: any;
}
