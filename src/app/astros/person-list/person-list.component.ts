import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AstronautService } from '../astros-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  people: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private astrosService: AstronautService) {}
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  ngOnInit(): void {
    this.sub = this.astrosService.getAstrosData().subscribe({
      next: data => {
        let craft = this.route.snapshot.params['craft'];
        this.people = data.people.filter(p => p.craft === craft).map(p => p.name);
      }
    })
  }
}
