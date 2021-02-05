import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// https://raw.githubusercontent.com/hapifhir/playground-basic-test-app/master/src/assets/questionnaire.json
// https://github.com/hapifhir/playground-basic-test-app/blob/master/src/assets/questionnaire.json
const mockurl =
  "https://raw.githubusercontent.com/hapifhir/playground-basic-test-app/master/src/assets/questionnaire.json";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(mockurl);
  }
}
