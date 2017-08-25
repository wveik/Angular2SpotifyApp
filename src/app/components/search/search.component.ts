import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
    searchStr:any;

    searchMusic(){
     console.log(this.searchStr);   
    }
}
