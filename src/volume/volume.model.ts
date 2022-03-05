import { ListCollectionsOptions } from "typeorm";

export class Volume{
    constructor(
    public id:string,
    public title:string,
    public description:string,
    public Genre:string,
    )  {}
}
export class Bookshelf{
    constructor(
    public id:string,
    public userID:string,
    public name:string,
    public volumeID:string,
    )  {}
}
export class ReadingPosition{
    constructor(
        public id:string,
        public userID:string,
        public volumeID:string,
        public pagenumber:number,
        public wordnumber:number,
        
        )  {}
}

export class Review{
    constructor(
        public id:string,
        public userID:string,
        public volumeID:string,
        public review:string,
        public stars:number,
        )  {}
}