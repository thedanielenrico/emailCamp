import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

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

  constructor() { }

  
  onSelect(name) {
    this.clientList.filter(person => person.name == name ? person.selected = true : person )
  }


  onRemove(name){
    this.clientList.filter(person => person.name == name ? person.selected = false : person )
  }

  ngOnInit() {
  }

}
