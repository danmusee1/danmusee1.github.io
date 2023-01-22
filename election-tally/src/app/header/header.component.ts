import { Component } from '@angular/core';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faHome=faHome
  faBars=faBars
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

}
