import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  counter :Observable<number>=of(0);
  constructor(private CounterService : CounterService) { }

  ngOnInit(): void {
   this.counter= this.CounterService.getCounterValue();
  }

}
