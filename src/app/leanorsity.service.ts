import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class LeanorsityService {

  constructor(private http: HttpClient) { }

  fetchAssessment(id: string) {
    const sessionId= uuidv4();
    const userId = uuidv4();
    return this.http.get(`http://localhost:5000?assessmentId=${id}&sessionId=${sessionId}&userId=${userId}`);
  }

}
