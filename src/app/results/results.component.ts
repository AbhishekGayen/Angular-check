import { CommonModule } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-result',
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule, RouterOutlet],
    templateUrl: './results.component.html',
    styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {
    ngOnInit(): void {
        console.log('Inside Rssult init...');
    }

}