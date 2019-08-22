import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  clientForm: FormGroup;

  success = false;
  submitted = false;



  constructor(private formBuilder: FormBuilder) {
    this.clientForm = this.formBuilder.group({
      clientName: ['', Validators.required],
      clientEmail: ['', Validators.required]

    })

  }
  onSubmit() {
    this.submitted = true;
    if (this.clientForm.invalid) {
      return;
    } else {
      console.log("Good job!")
      this.success = true;
    }
    console.log(this.clientForm.value)
  }

  ngOnInit() {
  }

}
