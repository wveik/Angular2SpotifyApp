import { Component } from '@angular/core';
import { AudioscrobblerService } from '../../services/audioscrobbler.service';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: './about.component.html'
})
export class AboutComponent {    
    about_us:string;
    constructor(private _audioscrobbler:AudioscrobblerService){
        this.about_us ="лучшая компания на свете";
    }
}
