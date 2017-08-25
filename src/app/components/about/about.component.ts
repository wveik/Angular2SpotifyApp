import { Component } from '@angular/core';
import { AudioscrobblerService } from '../../services/audioscrobbler.service';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: './about.component.html'
})
export class AboutComponent {
    private artist:any = null;
    constructor(private _audioscrobbler:AudioscrobblerService){
        this.artist = _audioscrobbler.artist;
        console.log(_audioscrobbler.artist);
    }
}
