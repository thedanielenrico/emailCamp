import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  emailTemplate: FormGroup;

  success = false;
  submitted = false;



  constructor(private formBuilder: FormBuilder) {
    this.emailTemplate = this.formBuilder.group({
      emailTemplateBody: ['', Validators.required],
      emailSubject: ['', Validators.required]

    })

  }

  templates = [
    {
      body: "test123",
      subject: "Number One"
    },
    {
      body: "test123",
      subject: "Number Two"
    },
    {
      body: "test123",
      subject: "Number Three"
    },

  ]

  onSubmit() {
    this.submitted = true;
    if (this.emailTemplate.invalid) {
      return;
    } else {
      console.log("Good job!")
      this.success = true;
    }
  }

  ngOnInit() {
  }

}
