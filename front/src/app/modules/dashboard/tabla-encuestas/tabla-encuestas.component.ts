import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/core/services/database.service';
import { ISurveyAnswers } from 'src/app/models/answers';

@Component({
  selector: 'app-tabla-encuestas',
  templateUrl: './tabla-encuestas.component.html',
  styleUrls: ['./tabla-encuestas.component.css']
})
export class TablaEncuestasComponent implements OnInit {
  surveys: ISurveyAnswers[] = [];

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.db.getAllSurveys().subscribe((data) => {
      this.surveys = data;
      console.log(this.surveys);
      
    });
  }


}
