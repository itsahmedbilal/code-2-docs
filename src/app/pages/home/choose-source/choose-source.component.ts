import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-choose-source',
    standalone: true,
    imports: [
        CardModule,
        TitleCasePipe,
    ],
    templateUrl: './choose-source.component.html',
    styleUrl: './choose-source.component.scss'
})
export class ChooseSourceComponent {
    activeIndex = 0;
}
