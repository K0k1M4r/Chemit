export interface Game {
    id: number,
    name: string,
    genre: string,
    isBased: boolean,
    goodArt: boolean,
    acceptTerms: boolean
}

export interface GameType {
    key: number,
    value: string
}