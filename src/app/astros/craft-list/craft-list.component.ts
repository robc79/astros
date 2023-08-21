import { Component, OnDestroy, OnInit } from '@angular/core';
import { AstronautService } from '../astros-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-craft-list',
  templateUrl: './craft-list.component.html',
  styleUrls: ['./craft-list.component.css']
})
export class CraftListComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  crafts: string[] = [];

  constructor(private astrosService: AstronautService) {}
  
  ngOnInit(): void {
    this.sub = this.astrosService.getAstrosData().subscribe({
      next: data => {
          this.crafts = [...new Set(data.people.map(p => p.craft))]
      }
  });
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
