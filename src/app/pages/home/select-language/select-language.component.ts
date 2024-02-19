import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-language',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './select-language.component.html',
  styleUrl: './select-language.component.scss',
})
export class SelectLanguageComponent {
  @Input() form!: FormGroup;
}
