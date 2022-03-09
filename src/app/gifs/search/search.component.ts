import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsServiceService } from '../service/gifs-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gifsServiceService:GifsServiceService) { }

  ngOnInit(): void {
  }


  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
 
 
  search(termino:string){
    //console.log(this.txtBuscar);
   const valor=this.txtBuscar.nativeElement.value;
    console.log(valor);
    if(valor.trim().length===0){
      return;
    }
    this.gifsServiceService.searchGifs(valor);
    this.txtBuscar.nativeElement.value='';
 
 
  }


}
