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
    { path: '/home/products', label: 'inventario' },
    { path: '/home/product', label: 'unitario' },
    { path: '/home/productnew', label: 'crearproducto' },
    { path: '/home/productupdate', label: 'actualizar' }
  ];

constructor() { }

}
