import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { of, from, map, tap, take, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  getItems(): Observable<MonitorPoint[]> {
    const allMonitorPoints = new Observable<MonitorPoint[]>((observer) => {
      observer.next([new MonitorPoint('mp1', 1)]);
      observer.next([new MonitorPoint('mp2', 2)]);
      observer.next([new MonitorPoint('mp3', 3)]);
    });

    return allMonitorPoints;
  }

  ngOnInit() {
    this.getItems().pipe(tap((monitorpoints) => console.log(monitorpoints)));
  }
}

bootstrapApplication(App);
