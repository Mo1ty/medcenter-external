import { Component, Input, OnInit } from '@angular/core';
import { Visit } from '../shared/model/visit.model';
import { VisitService } from './visit.service';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: []
})
export class CreateVisitComponent implements OnInit {

  constructor(private visitService: VisitService) { }

  visitView: Visit;

  ngOnInit(): void {
    this.visitService.visitChanged.subscribe(
      (visit: Visit) => this.visitView = visit
    );
    this.visitView = this.visitService.getVisitData();
  }

}
