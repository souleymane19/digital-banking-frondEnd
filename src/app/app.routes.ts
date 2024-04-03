import { Routes } from '@angular/router';
import {AdminDashboardComponent} from "./pages/admin-dashboard/admin-dashboard.component";

export const routes: Routes = [
  {
    path:"admin",
    loadChildren:()=>import("./pages/admin-dashboard/Admin-dashboard.routes")
      .then((m)=>m.AdminDashboardRoutes)
  },
  {
    path:"",
    loadComponent:()=>import("./pages/admin-dashboard/admin-dashboard.component")
      .then((m)=>AdminDashboardComponent)
  }
];
