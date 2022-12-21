import { Component, OnInit } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
	imports: [NgbRatingModule,ReactiveFormsModule, NgIf],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  ctrl = new FormControl<number | null>(null, Validators.required);


  constructor() { }

  toggle() {
		if (this.ctrl.disabled) {
			this.ctrl.enable();
		} else {
			this.ctrl.disable();
		}
	}

  ngOnInit() {
    console.log(this.ctrl);
    
  }

}
