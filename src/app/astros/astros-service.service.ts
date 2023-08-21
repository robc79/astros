import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AstrosData } from "./astros-data";

@Injectable({
    providedIn: "root"
})
export class AstronautService {
    private sourceUrl = 'http://api.open-notify.org/astros.json'

    constructor(private http: HttpClient) {}

    getAstrosData() : Observable<AstrosData> {
        return this.http.get<AstrosData>(this.sourceUrl);
    }
}