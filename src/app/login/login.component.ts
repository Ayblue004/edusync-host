import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor(private router: Router){}

  step: number = 1;

  ngOnInit(): void {
    
  }

  changeStep(step: number){
    this.step = step
   }

   routeRegisterPage(){
    this.router.navigate(['/register'])
   }
}
