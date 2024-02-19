import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-choose-result',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './choose-result.component.html',
  styleUrl: './choose-result.component.scss',
})
export class ChooseResultComponent {
  @Input() form!: FormGroup;
}
