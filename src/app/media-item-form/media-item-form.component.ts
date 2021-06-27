import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
FormGroup

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator)
    });
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;//field is valid
    }

    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2500;

    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        year: {
          min: minYear,
          max: maxYear
        }
      };//available on the errors property of the form field
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}