
import {Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProducListComponent } from './pages/produc-list/produc-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductNewComponent } from './pages/product-new/product-new.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';


export const PRODUCT_ROUTES: Routes = [
 {
    path: '',
    component: HomeComponent, // Este es el componente con el menú y <router-outlet>
    children: [
      {
        path: 'products',
        component: ProducListComponent,
      },
      {
        path: 'product',
        component: ProductDetailComponent,
      },
      {
        path: 'productnew',
        component: ProductNewComponent,
      },
      {
        path: 'productupdate',
        component: ProductUpdateComponent,
      },

      { path: '', redirectTo: 'products', pathMatch: 'full' },
    ],
  }
];
