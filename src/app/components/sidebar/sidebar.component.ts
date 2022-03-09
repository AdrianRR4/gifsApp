import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../gifs/service/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private gifsServiceService: GifsServiceService) {}

  ngOnInit(): void {}

  get historial() {
    return this.gifsServiceService.historial;
  }

  search(item: string) {
    this.gifsServiceService.searchGifs(item);
    console.log(item);
  }
}
