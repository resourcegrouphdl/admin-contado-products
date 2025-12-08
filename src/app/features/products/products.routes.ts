
import {Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProducListComponent } from './pages/produc-list/produc-list.component';



export const PRODUCT_ROUTES: Routes = [
 {
    path:'',
    component: HomeComponent
  },

  {
    path:'products',
    component: ProducListComponent
  }

]
