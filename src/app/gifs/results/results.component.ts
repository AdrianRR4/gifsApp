import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../service/gifs-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  get resultados() {
    return this.gifsServiceService.resultados;
  }
  constructor(private gifsServiceService: GifsServiceService) {}

  ngOnInit(): void {}
}
