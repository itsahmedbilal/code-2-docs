import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { StepModel } from '../../models/step.model';
import { RouterOutlet } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ChooseSourceComponent } from './choose-source/choose-source.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { ChooseResultComponent } from './choose-result/choose-result.component';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StepsModule,
    CardModule,
    RouterOutlet,
    DividerModule,
    ChooseSourceComponent,
    SelectLanguageComponent,
    ChooseResultComponent,
    ReactiveFormsModule,
    ButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('stepperAnimation', [
      transition(':increment', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':decrement', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
    ])
  ]
})
export class HomeComponent {
  form!: FormGroup;

  readonly steps: StepModel[] = [
    { label: 'Choose The Source' },
    {
      label: 'Choose Programming Language',
    },
    { label: 'Choose The Result' },
  ];
  activeIndex = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      source: this.fb.group({
        path: [''],
=======
        path: ['',],
>>>>>>> Stashed changes
      }),
      language: this.fb.group({
        selected: ['Java'],
      }),
      output: this.fb.group({
        type: [''],
      }),
    });
  }

  onActiveIndexChange(event: number): void {
    this.activeIndex = event;
  }

  onNext(): void {
    if (this.activeIndex < 3) {
      this.activeIndex = this.activeIndex + 1;
      console.log(this.activeIndex);
    }
  }

  onBack() {
    if (this.activeIndex > -1) {
      this.activeIndex = this.activeIndex - 1;
    }
  }

  onSubmit(): void {}
}
