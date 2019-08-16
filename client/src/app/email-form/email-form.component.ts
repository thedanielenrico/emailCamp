import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";



@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup;

  success = false;
  submitted = false;

  // clients = ['ashley', 'jake', 'steven', 'alex', 'daniel'];

  constructor(private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      emailBody: ['', Validators.required],
    })
    
  }

  onSubmit() {
    this.submitted = true;
    if (this.emailForm.invalid) {
      return;
    } else {
      console.log("Good job!")
      this.success = true;
    }
  }

  ngOnInit() {
  }

}
