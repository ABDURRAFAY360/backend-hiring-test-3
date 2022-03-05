import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { VolumeService } from './volume.service';

@Controller('volume')
export class VolumeController{
    constructor(private readonly myService: VolumeService) {}

    @Post()
    addVoulume(
        @Body('title') myTitle: string,
        @Body('description') myDescription: string,
        @Body('genre') myGenre: string,

    ){
        const myId = this.myService.AddVolume(myTitle,myDescription,myGenre);
        return {id:myId}
    }
    @Post('book')
    addBookshelf(
        @Body('userID') userID: string,
        @Body('VolumeID') VolumeID: string,
        @Body('name') name: string,

    ){
        const myId = this.myService.AddBookShelf(userID,VolumeID,name);
        return {BookselfID:myId}
    }
    @Post('position')
    addReadingposition(
        @Body('userID') userID: string,
        @Body('VolumeID') VolumeID: string,
        @Body('pagenum') pagenum: number,
        @Body('wordnum') wordnum: number,

    ){
        const myId = this.myService.AddReadingPosition(userID,VolumeID,pagenum,wordnum);
        return {ReadingpositionID:myId}
    }
    @Post('review')
    addReview(
        @Body('userID') userID: string,
        @Body('VolumeID') VolumeID: string,
        @Body('review') review: string,
        @Body('stars') stars: number,

    ){
        const myId = this.myService.AddReview(userID,VolumeID,review,stars);
        return {ReviewID:myId}
    }
    
    @Get()
    getVolume() {
        return {Volume:this.myService.GetVolume()}
    }
    @Get('position/:userid')
    getReadingPosition(@Param('userid') userID:string) {
        return {ReadingPosition:this.myService.GetReadingPosition(userID)}
    }
    @Get(':id')
    getBookShelf(@Param('id') userID:string){
        return this.myService.GetBookShelf(userID)
    }
}