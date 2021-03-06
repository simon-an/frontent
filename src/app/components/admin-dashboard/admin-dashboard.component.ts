import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SelectivePreloadingStrategy } from '../../services/selective-preloading-strategy-.service';

import 'rxjs/add/operator/map';

@Component({
  // selector: 'app-admin-dashboard',
  // templateUrl: './admin-dashboard.component.html',
  // styleUrls: ['./admin-dashboard.component.css'],
  template: `
    <p>Dashboard</p>

    <p>Session ID: {{ sessionId | async }}</p>
    <a id="anchor"></a>
    <p>Token: {{ token | async }}</p>

    Preloaded Modules
    <ul>
      <li *ngFor="let module of modules">{{ module }}</li>
    </ul>
  `,
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: Array<string>;

  constructor(
    // private route: ActivatedRoute,
    private preloadStrategy: SelectivePreloadingStrategy
  ) {
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit(): void {
    // Capture the session ID if available
    // this.sessionId = this.route
    //   .queryParams
    //   .map((params) => params['session_id'] || 'None');

    // Capture the fragment if available
    // this.token = this.route
    //   .fragment
    //   .map((fragment) => fragment || 'None');
  }
}
