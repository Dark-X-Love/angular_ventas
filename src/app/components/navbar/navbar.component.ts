import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  goHome($event: Event): void {
    $event.preventDefault();
    this.route.navigate(['register-products']);
  }
  goRegister($event: Event): void {
    $event.preventDefault();
    this.route.navigate(['register']);
  }
}
