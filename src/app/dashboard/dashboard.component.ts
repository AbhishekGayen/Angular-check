import { CommonModule } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule, RouterOutlet } from "@angular/router";
import { DashboardService } from "./dasboard.service";
import { error } from "console";

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
    receivedData: any;
    empName: string = '';
    empLocation: string = '';
    managerId: number = 0;

    constructor(private route: ActivatedRoute, 
                private dashboardService: DashboardService) {
        console.log('Dashboard Compoent Constructor Invoked!!');
    }

    ngOnInit(): void {
        console.log('Inside Dashboard component On Init Method');
        console.log(this.route.snapshot.paramMap.get('id'));
        console.log(this.route.snapshot.queryParamMap.get('rest'));
        this.passDataFromChild.emit(this.txtmsg);

        //get the data from backend
        this.dashboardService.getData().subscribe((data) => {
            this.receivedData = data;
        });
    }

    submit() {
        console.log('Button Clicked!! : ');
        this.passDataFromChild.emit(this.txtmsg);
    }

    submitData() {
        const reqParam = {
            empName: this.empName,
            empLocation: this.empLocation,
            managerId: this.managerId
        };

        this.dashboardService.postData(reqParam).subscribe({
            next: (data) => {
                console.log(data);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {console.log('Process Completed...')}
        });
    }

    updateData() {
        const reqParam = {
            title: 'Data',
            requestId: 2,
            data: 'Please check once'
        };
        this.dashboardService.updateData(reqParam).subscribe({
            next: (data) => {
                console.log("Data Updated!!!");
            },error: (error) => {
                console.error(error);
            },
            complete: () => {console.log('Process Completed...')}
        }) ;
    }

    removeData() {
        const id = 5;
        this.dashboardService.removeData(id).subscribe({
            next: (data) => {
                console.log("Data Deleted!!!");
            },error: (error) => {
                console.error(error);
            },
            complete: () => {console.log('Process Completed...')}
        })
    }

}