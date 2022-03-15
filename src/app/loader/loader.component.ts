import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  // isLoad:Subject<boolean> = this.serviceLoader.isLoaded;
  constructor(private serviceLoader:LoaderService) { }
  isLoading: Subject<boolean> = this.serviceLoader.isLoading;
  ngOnInit(): void {
  }

}
