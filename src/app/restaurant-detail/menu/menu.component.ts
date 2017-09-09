import { MenuItem } from './../menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItems: Observable<MenuItem[]>
  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menuItems = this.restaurantsService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}
