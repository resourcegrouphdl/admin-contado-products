import { Routes } from '@angular/router';


export enum FEATURE_PAGES {
  PRODUCTS = 'home',
  AUTH = 'auth',
}

export const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: FEATURE_PAGES.AUTH,
      },
      {
        path: FEATURE_PAGES.AUTH,
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
      },{
        path: FEATURE_PAGES.PRODUCTS,
        loadChildren: () => import('./features/products/products.routes').then(m => m.PRODUCT_ROUTES),
      }

    ]
  },


  {
    path: "**" ,
    redirectTo: FEATURE_PAGES.AUTH
  }


];
