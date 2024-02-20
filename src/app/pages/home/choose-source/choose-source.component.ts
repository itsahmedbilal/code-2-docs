import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TitleCasePipe } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface MenuOptions {
  name: string;
  value: string;
}

@Component({
  selector: 'app-choose-source',
  standalone: true,
  imports: [
    CardModule,
    TitleCasePipe,
    ReactiveFormsModule,
    FormsModule,
    RadioButtonModule,
  ],
  templateUrl: './choose-source.component.html',
  styleUrl: './choose-source.component.scss',
})
export class ChooseSourceComponent {
  selectedSource: string = '';
  @Input() form!: FormGroup;

  constructor() {}

  get sourceFromGroup(): FormGroup {
    return this.form.get('source') as FormGroup;
  }

  onFolderSelect(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      console.log(inputElement.files);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) {
      console.log(files);
    }
  }
}
