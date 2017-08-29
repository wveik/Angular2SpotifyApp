import { Component } from '@angular/core';
import { AudioscrobblerService } from '../../services/audioscrobbler.service';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
    albums: any[];
    searchStr:string;

    constructor(private _audioscrobbler:AudioscrobblerService, private _router: Router){
        
    }

    searchMusic(){
        
        this.albums = [];
        if(this.searchStr == "" || this.searchStr == null) {
            return;
        }
        this._audioscrobbler.searchMusic(this.searchStr).subscribe(response => {           
            this.albums = response.topalbums.album;
            console.log(this.albums);
            //this._audioscrobbler.artist = this.albums[0].artist;
        });
    }

    getImage(album: any){
        //console.log(album.image[0]["#text"]);
        let result: string = album.image[3]["#text"];
        if(result == "") result ="http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found-300x225.jpg";
        return result;
    }

    myClick(album: any){
        console.log(album);
        this._audioscrobbler.artist = album.artist;
        this._router.navigate(['artist']);
    }
}
