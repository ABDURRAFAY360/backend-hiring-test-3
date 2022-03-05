import { Injectable, Post } from "@nestjs/common";
import  { Volume } from "./volume.model"
import  { Bookshelf } from "./volume.model"
import  { ReadingPosition } from "./volume.model"
import  { Review } from "./volume.model"
@Injectable()
export class VolumeService {
    volume : Volume[] = [];
    bookself:Bookshelf[] = [];
    readingposition: ReadingPosition[] = [];
    review: Review[] = [];
    
    AddVolume(title:string, description:string, genre:string){
        const myID = Math.floor(Math.random()*100).toString()
        const myVolume = new Volume(myID, title, description, genre)
        this.volume.push(myVolume)
        return myID;
    }

    GetVolume() {
        return [...this.volume]
    }

    AddBookShelf(userID:string, VolumeID:string, name:string){
        const myID = Math.floor(Math.random()*100).toString()
        const myBookself = new Bookshelf(myID, userID, name, VolumeID)
        this.bookself.push(myBookself)
        return myID;
    }

    AddReadingPosition(userID:string, VolumeID:string, pagenumber:number,wordnumber:number){
        const myID = Math.floor(Math.random()*100).toString()
        const myreadingposition = new ReadingPosition(myID, userID,VolumeID,pagenumber,wordnumber)
        this.readingposition.push(myreadingposition)
        return myID;
    }

    
    AddReview(userID:string, VolumeID:string, review:string,stars:number){
        const myID = Math.floor(Math.random()*100).toString()
        const myreview = new Review(myID, userID,VolumeID,review,stars)
        this.review.push(myreview)
        return myID;
    }

    GetBookShelf(userID:string){
        var my_list = {}
        const shelf = this.bookself.filter((book) => book.userID === userID)
        Object.values(shelf).forEach(val =>{
            if (!my_list[val.name]) {
                my_list[val.name] = [];
            }
            var volume_name = this.volume.find((vol) => vol.id === val.volumeID)
            my_list[val.name].push(volume_name.title)
        })
        return {my_list}
    }
    GetReadingPosition(userID:string) {
        var my_list = {}
        const shelf = this.readingposition.filter((pos) => pos.userID === userID)
        return {...shelf}
    }

}