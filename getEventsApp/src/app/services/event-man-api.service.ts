import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventManAPIService {
  url = 'http://127.0.0.1:5000/';

  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }

   /**
    * Get data from the flask API 
    * map the result to return only the list of events that we need
    * 
    * @returns Observable with the event list
    */
  getAllEvents(): Observable<any> {
    //`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`
    return this.http.get(`${this.url}/api/events/getAllEvents`).pipe( map(results => results['events']) );
  }

  /**
    * Get the full information for an event with ID using the "id" parameter
    * 
    * @param {string} event_publicId event public ID to retrieve information
    * @returns Observable with full event information
    */
  getFullInfo(event_publicId) {
    return this.http.get(`${this.url}/api/events/${event_publicId}/viewEventInfo`);
  }
}
