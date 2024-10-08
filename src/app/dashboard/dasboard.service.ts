import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environment/environment";

@Injectable({
    providedIn:'root'
})
export class DashboardService {
    apiUrl = `${environment.contextPath}/dashboard`;

    constructor(private http: HttpClient) {}
    
    getData(): Observable<any> {
        return this.http.get(this.apiUrl + '/getData/'+ 2)
    }

    postData(reqParam: any): Observable<any> {
        return this.http.post(this.apiUrl + "/postData", reqParam);
    }

    updateData(requestParam: any): Observable<any> {
        return this.http.put(this.apiUrl + '/update', requestParam);
    }

    removeData(id: number) : Observable<any> {
        return this.http.delete(this.apiUrl + '/delete'+ id);
    } 
}