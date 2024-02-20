import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-choose-result',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    TitleCasePipe,
    RadioButtonModule,
  ],
  templateUrl: './choose-result.component.html',
  styleUrl: './choose-result.component.scss',
})
export class ChooseResultComponent {
  @Input() form!: FormGroup;

  options: { id: string; value: string; image: string; label: string }[] = [
    {
      id: 'rb11',
      value: 'Generate Full Document',
      image: 'project-management.png',
      label: 'Generate Full Document',
    },
    {
      id: 'rb22',
      value: 'Generate Flow Diagram',
      image: 'flow-chart.png',
      label: 'Generate Flow Diagram',
    },
    {
      id: 'rb33',
      value: 'Generate Sequence Diagram',
      image: 'process.png',
      label: 'Generate Sequence Diagram',
    },
    {
      id: 'rb44',
      value: 'Generate Class Diagram',
      image: 'architectual-model.png',
      label: 'Generate Class Diagram',
    },
    {
      id: 'rb55',
      value: 'Generate Unit Test Cases',
      image: 'unit-testing.png',
      label: 'Generate Unit Test Cases',
    },
  ];

  get resultForm(): FormGroup {
    return this.form.get('output') as FormGroup;
  }

  test() {
    console.log(this.form.value);
  }
}
