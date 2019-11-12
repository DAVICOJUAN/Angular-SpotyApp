import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent  {

  public idArtist:string="";
  public Artist:any;
  public topTracks: any;
  

  constructor( private _SpotifyService:SpotifyService, private activatedRoute:ActivatedRoute) { 
    this.idArtist= this.activatedRoute.snapshot.paramMap.get('id');
    this._SpotifyService.getTopTrackArtist(this.idArtist).subscribe((data:any)=>{
      this.topTracks = data.tracks;
      this._SpotifyService.getArtist(this.idArtist).subscribe(data=>{this.Artist = data;
      console.log(this.Artist);  
      })
      
  })
  }



}
