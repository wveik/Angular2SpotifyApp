import { Component } from '@angular/core';
import { AudioscrobblerService } from '../../services/audioscrobbler.service';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
    searchStr:string;

    constructor(private _audioscrobbler:AudioscrobblerService){
        
    }

    searchMusic(){
        this._audioscrobbler.searchMusic(this.searchStr).subscribe(response => {
            console.log(response);
        });
    }
}
