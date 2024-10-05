import { Component } from '@angular/core';
import { cart } from '../../data_type';
import { EventCartService } from '../event-cart.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  popularEvent:undefined | cart[];
  constructor(private eventcart:EventCartService){}
  ngOnInit(): void {
    this.eventcart.eventCart().subscribe((data)=>{
      console.warn(data);
      this.popularEvent=data;

    });

  
}
}

