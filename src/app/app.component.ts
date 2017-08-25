import { Component } from '@angular/core';
import { AudioscrobblerService } from './services/audioscrobbler.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AudioscrobblerService]
})
export class AppComponent {
 
}
