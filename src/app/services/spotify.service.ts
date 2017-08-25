import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    private searchUrl: string;

    constructor(private _http: Http){
        let url = "https://accounts.spotify.com/api/token";
        let headers = new Headers({ 'Authorization': 'Basic ' + btoa('abc123jdhs3h4js' + ':' + '87kljf66jlf9jj98q89f7s8i')});
        let res = this._http.post(url, {
            headers: headers
          })
            .map(res => res.json());
        console.log(res);
    }

    searchMusic(str:string, type='artist'){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl)
            .map(res => res.json());
    }
}
