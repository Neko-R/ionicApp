import { Component, OnInit } from '@angular/core';
import { EventManAPIService} from './../../services/event-man-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  events: Observable<any>;
  event_publicId: string = '';

  /**
   * Constructor of our first page
   * @param eventManService The movie Service to get data
   */
  constructor(private eventManService: EventManAPIService) {
    this.events = this.eventManService.getAllEvents();
   }

  ngOnInit() {
  }

  getAllTheEvents() {
    // Call our service function which returns an Observable
    this.events = this.eventManService.getAllEvents();
  }
}
