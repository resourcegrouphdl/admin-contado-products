import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


interface MenuItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, RouterOutlet ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


  open = false;

 public menus: MenuItem[] = [
    { path: '/home/products', label: 'INVENTARIO' },
    { path: '/home/product', label: 'UNITARIO' },
    { path: '/home/productnew', label: 'CREAR PRODUCTO' },
    { path: '/home/productupdate', label: 'ACTUALIZAR' }
  ];

constructor() { }

}
