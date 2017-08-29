import { Component } from '@angular/core';
import { AudioscrobblerService } from '../../services/audioscrobbler.service';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: './artist.component.html'
})
export class ArtistComponent {
    private artist:any = null;
    constructor(private _audioscrobbler:AudioscrobblerService){
        this.artist = _audioscrobbler.artist;
        console.log(_audioscrobbler.artist);
    }
}