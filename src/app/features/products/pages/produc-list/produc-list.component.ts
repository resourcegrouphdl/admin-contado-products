import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-produc-list',
  standalone: true,
  imports: [MatCardModule,
    MatButtonModule],
  templateUrl: './produc-list.component.html',
  styleUrl: './produc-list.component.css'
})
export class ProducListComponent {

}
