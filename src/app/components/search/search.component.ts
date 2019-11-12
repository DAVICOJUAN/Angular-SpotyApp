import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {debounceTime} from 'rxjs/operators';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public searchFilter:Array<string>=['track','artist']

  public searchresults:any=[];

  constructor( private _spotifyService:SpotifyService, private router:Router) { }

  ngOnInit() {
  }

  search(type, termino){
    if(type=='null' || termino=="" || termino==" ") return
    this._spotifyService.searchdata(termino,type).pipe(debounceTime(2000)).subscribe((data:any)=>{console.log(data);
    if(data.tracks){
      this.searchresults=data.tracks.items

    }
    else{
      this.searchresults=data.artists.items
    }
    console.log(this.searchresults)
    })
    
  }

  public GotoArtist(artistId){
    this.router.navigate(['/artist',artistId]);
  }

}
