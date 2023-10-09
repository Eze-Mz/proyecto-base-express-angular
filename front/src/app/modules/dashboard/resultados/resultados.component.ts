import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/core/services/database.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent implements OnInit {
  cantidadEncuestas = 0;
  constructor(private db: DatabaseService) {}
  ngOnInit(): void {
    this.db.surveyCount().subscribe((count) => {
      this.cantidadEncuestas = count;
    }
    );
  }
}
