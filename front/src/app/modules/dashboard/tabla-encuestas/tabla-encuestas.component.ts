import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/core/services/database.service';
import { ISurveyAnswers } from 'src/app/models/answers';

@Component({
  selector: 'app-tabla-encuestas',
  templateUrl: './tabla-encuestas.component.html',
  styleUrls: ['./tabla-encuestas.component.css']
})
export class TablaEncuestasComponent implements OnInit {
  surveys: ISurveyAnswers[] = [];
  pages = 1;
  pageSize = 5;
  currentStart = 0;
  currentSurveys: ISurveyAnswers[] = [];

  constructor(private db: DatabaseService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.surveys = data['tableData'];
      this.currentSurveys = this.surveys.slice(0, this.pageSize);
      this.pages = Math.ceil(this.surveys.length / this.pageSize);
    });
  }

  changePage(page: number) {
    this.currentStart = (page) * this.pageSize;
    this.currentSurveys = this.surveys.slice(
      this.currentStart,
      this.currentStart + this.pageSize
    );
  }

}
