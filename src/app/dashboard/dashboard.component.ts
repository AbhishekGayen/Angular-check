import { CommonModule } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'dash-board',
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule, RouterOutlet],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    @Input() message :string = '';
    constructor() {
        console.log('Dashboard Compoent Constructor Invoked!!');
    }

    ngOnInit(): void {
        console.log('Inside On Init Method');
    }
    
}