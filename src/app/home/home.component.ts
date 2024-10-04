import { CommonModule } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-home',
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule, RouterOutlet],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {
        console.log('Loading Home Component..');
    }

}