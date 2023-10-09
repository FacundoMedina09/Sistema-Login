import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
 
  constructor(private router: Router){}


  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}


