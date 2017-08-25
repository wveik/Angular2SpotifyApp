import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AudioscrobblerService {
    private searchUrl: string;
    private YOUR_API_KEY: string = "8ea0be38326c1275db95968ab677cfb6";

    constructor(private _http: Http){
        this.searchUrl = "http://ws.audioscrobbler.com/2.0/?format=json&api_key=" + this.YOUR_API_KEY + "&method=";
    }

    searchMusic(artist:string){
        let url = this.searchUrl + "artist.gettopalbums&artist=" + artist;
        return this._http.get(url)
        .map(res => res.json());
    }
}
