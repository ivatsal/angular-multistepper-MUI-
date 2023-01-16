import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-multi-forms',
  templateUrl: './multi-forms.component.html',
  styleUrls: ['./multi-forms.component.scss']
})
export class MultiFormsComponent implements OnInit {

  constructor(private builder: FormBuilder) { }
  isLinear = true;
  ngOnInit(): void {
  }

  Vsregister = this.builder.group({
    basic: this.builder.group({
      fName: this.builder.control('', [Validators.required, Validators.minLength(4)]),
      lName: this.builder.control('', [Validators.required, Validators.minLength(4)]),
    }),
    contact: this.builder.group({
      userName: this.builder.control('', [Validators.required, Validators.minLength(4)]),
      Email: this.builder.control('', Validators.required),
      PhnNumber: this.builder.control('', Validators.required),
    }),
    address: this.builder.group({
      add1: this.builder.control('', Validators.required),
      city: this.builder.control('', [Validators.required, Validators.minLength(4)]),
      state: this.builder.control('', Validators.required),
      zip: this.builder.control('', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
    }),
  });

  get basicinfoform() {
    return this.Vsregister.get("basic") as FormGroup;
  }

  get contactinfoform() {
    return this.Vsregister.get("contact") as FormGroup;
  }

  get addressinfoform() {
    return this.Vsregister.get("address") as FormGroup;
  }

}
