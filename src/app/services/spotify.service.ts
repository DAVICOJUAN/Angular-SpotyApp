import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  private headers = new HttpHeaders({
    'Authorization': 'Bearer BQDWI8GO3Pmu-JKJCqH_MABuJdzo3Oz_-Sej4wQzIhWzXF8zGjcCzdyXh1HWS3AltXXL3i2vKAWSBeoxMhc '})

  private URL:string='https://api.spotify.com/v1'  

  public GetNewRelease(){
    return this.http.get(`${this.URL}/browse/new-releases?country=MX&limit=9`, {headers:this.headers});
  }

  public searchdata(termino,type){

    termino = encodeURI(termino)
    let urlSend:string=`${this.URL}/search?q=${termino}&type=${type}&market=MX&limit=9`
    return this.http.get(urlSend,{headers:this.headers})
  }

  public getTopTrackArtist(idArtist){
    let urlSend=`${this.URL}/artists/${idArtist}/top-tracks?country=MX`;
    return this.http.get(urlSend,{headers:this.headers})
  }

  public getArtist(idArtist){
    let urlSend=`${this.URL}artists/${idArtist}`;

    return this.http.get(urlSend,{headers:this.headers})
  }


}
