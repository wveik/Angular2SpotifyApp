import { Component } from '@angular/core';
import { AudioscrobblerService } from '../../services/audioscrobbler.service';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: './about.component.html'
})
export class AboutComponent {    
    constructor(private _audioscrobbler:AudioscrobblerService){

    }
}
