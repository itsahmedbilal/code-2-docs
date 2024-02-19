import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-select-language',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    TitleCasePipe,
    RadioButtonModule,
  ],
  templateUrl: './select-language.component.html',
  styleUrl: './select-language.component.scss',
})
export class SelectLanguageComponent {
  @Input() form!: FormGroup;

  languages: string[] = [
    'Java',
    'Node',
    'C++',
    'Angular',
    'React',
    'Python',
    'Others',
  ];

  constructor() {}

  get languageFrom(): FormGroup {
    return this.form.get('language') as FormGroup;
  }
}
