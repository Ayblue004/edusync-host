import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import { CoursesComponent } from "../courses/courses.component";
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from "../challenge/challenge.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HomeComponent, CoursesComponent, CommonModule, ChallengeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  constructor(private router: Router) {}

  tab: string = 'home'

  ngOnInit(): void {
    
  }

  changeTab(tab: string){
    this.tab = tab;
  }

}
