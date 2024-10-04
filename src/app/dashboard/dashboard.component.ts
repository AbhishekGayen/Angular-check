import { CommonModule } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: 'dash-board',
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule, RouterOutlet, RouterModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    @Input() message :string = '';
    @Output() passDataFromChild = new EventEmitter<string>();
    txtmsg:string='Sending Back to Parent!!';
    constructor(private route: ActivatedRoute) {
        console.log('Dashboard Compoent Constructor Invoked!!');
    }

    ngOnInit(): void {
        console.log('Inside Dashboard component On Init Method');
        console.log(this.route.snapshot.paramMap.get('id'));
        console.log(this.route.snapshot.queryParamMap.get('rest'));
        this.passDataFromChild.emit(this.txtmsg);
    }

    submit() {
        console.log('Button Clicked!! : ');
        this.passDataFromChild.emit(this.txtmsg);
    }
}