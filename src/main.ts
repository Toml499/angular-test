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

  allMonitorPoints: MonitorPoint[] = [
    { name: 'mp1', id: 1 },
    { name: 'mp2', id: 2 },
    { name: 'mp3', id: 3 },
  ];

  selectedMonitorPoints: MonitorPoint[] = [
    { name: 'mp1', id: 1 },
    { name: 'mp2', id: 2 },
    { name: 'mp3', id: 3 },
    { name: 'mp4', id: 4 },
  ];

  getItems(): Observable<MonitorPoint[]> {
    const allMonitorPoints = new Observable<MonitorPoint[]>((observer) => {
      observer.next(this.selectedMonitorPoints);
    });

    return allMonitorPoints;
  }

  ngOnInit() {
    this.getItems().pipe(tap((monitorpoints) => console.log(monitorpoints)));
  }
}

bootstrapApplication(App);
