import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth',
      },
      {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
      },{
        path: 'home',
        loadChildren: () => import('./features/products/products.routes').then(m => m.PRODUCT_ROUTES),
      }

    ]
  },


  {
    path: "**" ,
    redirectTo: 'auth'
  }


];
