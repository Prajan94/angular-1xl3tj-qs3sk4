import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CdkStepper } from "@angular/cdk/stepper";

@Component({
  selector: 'app-post-trip',
  templateUrl: './post-trip.component.html',
  styleUrls: ['./post-trip.component.css'],
  providers: [{ provide: CdkStepper}]
})

export class PostTripComponent implements OnInit {
  public stepOneForm: FormGroup;
  public stepTwoForm: FormGroup;
  previewDeatils: any;
  confirmationStep: any;
  previewDeatilsEnabled = false;
  confirmation = false;
  createNewTrip = false;
  mandErrMsg : string = "";
  mandErrFlag : boolean = false;
  firstStep : boolean = true;
  secondStep : boolean = false;
  thirdStep : boolean = false;
  fourthStep : boolean = false;

  constructor(private fb: FormBuilder,
    private cdkStepper: CdkStepper) {
    this.stepOneForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      age: this.fb.control('', Validators.required),
      gender: this.fb.control('', Validators.required),
      phoneNumber: this.fb.control('', Validators.required),
      companyName: this.fb.control('', Validators.required),
    });
    this.stepTwoForm = this.fb.group({
      place: this.fb.control('', Validators.required),
      vehicle: this.fb.control('', Validators.required),
      seats: this.fb.control('', Validators.required),
      dateOfTrip: this.fb.control('', Validators.required),
      sharingPrice: this.fb.control('', Validators.required),
      instructions: this.fb.control('', Validators.required),
    });
  }

  ngOnInit() {
  }

  submitSteponeForm() {
  }

  submitFirstStep() {
    if (this.stepOneForm.invalid) {
      alert("Please enter all fields");
    } else {
      this.firstStep = false;
      this.secondStep= true;
    }
  }

  submitSecondStep() {
    if (this.stepTwoForm.invalid) {
      alert("Please enter all fields");
    } else {
      this.secondStep= false;
      this.thirdStep = true;
      this.previewDeatilsEnabled = true;
    }
  }

  submitTrip() {
    this.thirdStep= false;
    this.fourthStep = true;
    this.confirmation = true;
  }

  enableFirstStep() {
    this.secondStep = false;
    this.firstStep = true;
  }

  enableSecondStep() {
    this.thirdStep = false;
    this.secondStep = true;
  }

  postNewTrip() {
    this.stepOneForm.reset();
    this.stepTwoForm.reset();
    this.fourthStep = false;
    this.firstStep = true;
  }
  
}