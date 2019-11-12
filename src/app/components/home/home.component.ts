import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public NewReleases:Array<any>=[];

  constructor(private _spotifyService:SpotifyService) { 
    this._spotifyService.GetNewRelease().subscribe((releases:any)=>{
      this.NewReleases=releases.albums.items;
      
    })

  }

  ngOnInit() {
  }

}
