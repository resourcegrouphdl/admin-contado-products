import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

 public menus: MenuItem[] = [
    { path: '/inicio', label: 'Inicio' },
    { path: '/motos', label: 'Motos' },
    { path: '/ventas', label: 'Ventas' },
    { path: '/clientes', label: 'Clientes' }
  ];

constructor() { }

}
