import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged = false;
  constructor(private auth: AuthService, private router: Router) { 
    this.isLogged = this.auth.isLogged();
  }
  ngOnInit(): void {
    if(this.isLogged) {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
