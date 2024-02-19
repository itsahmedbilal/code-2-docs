import { Component, OnInit } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { StepModel } from '../../models/step.model';
import { Router, RouterOutlet } from '@angular/router';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StepsModule, CardModule, RouterOutlet, DividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  readonly steps: StepModel[] = [
    { label: 'Choose the Source', routerLink: '/home/choose-the-source' },
    {
      label: 'Choose Programming Language',
      routerLink: '/home/choose-programming-language',
    },
    { label: 'Choose the Result', routerLink: '/home/choose-the-result' },
  ];
  activeIndex: number;

  constructor(private router: Router) {
    if (this.router.url === '/home') {
      this.router.navigate(['/']);
    }
    this.activeIndex = 0;
  }

  ngOnInit() {
    this.activeIndex = 1;
  }
}
