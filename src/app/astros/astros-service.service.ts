import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AstrosData } from "./astros-data";

@Injectable({
    providedIn: "root"
})
export class AstronautService {
    private sourceUrl = '../../assets/astros.json'
    constructor(private http: HttpClient) {}

    getAstrosData() : Observable<AstrosData> {
        return this.http.get<AstrosData>(this.sourceUrl);
    }
}