import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent implements OnInit {
  step: number = 1;

  constructor(private router: Router){

  }

  ngOnInit(): void {
    // const  container:any = document.getElementsByClassName('container')[0];
    // container.style.color = 'white';
    // container.style.backgroundColor = 'black'
  }

  changeStep(step: number){
   this.step = step
  }

  routeDashboard(){
    this.router.navigate(['/dashboard'])
  }

  routeLoginPage(){
    this.router.navigate(['/login'])
  }
}
