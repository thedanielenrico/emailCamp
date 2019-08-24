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
  selected = 0;


  constructor(private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      emailBody: ['', Validators.required],

    })
    
  }

  onSubmit() {
    this.submitted = true;
    if (this.emailForm.invalid && this.selected === 0) {
      return;
    } else {
      console.log("Good job!")
      this.success = true;
    }
  }
  clientList = [
    {
      name: 'ashley',
      selected: false,
    },
    {
      name: 'jake',
      selected: false,
    },
    {
      name: 'steven',
      selected: false,

    },
    {
      name: 'alex',
      selected: false,
    },
    {
      name: 'daniel',
      selected: false,
    },
  ]

  
  onSelect(name) {
    this.clientList.filter(person => person.name == name ? person.selected = true : person )
    this.selected += 1;
    console.log(this.selected)
  }


  onRemove(name){
    this.clientList.filter(person => person.name == name ? person.selected = false : person )
    this.selected -= 1;
    console.log(this.selected)

  }

  ngOnInit() {
  }

}
