import {Routes} from "@angular/router";

export const AdminDashboardRoutes:Routes=[
  {
    path:"dashboard",loadComponent:()=>import("./admin-dashboard.component")
      .then((m)=>m.AdminDashboardComponent)
  },
  {
    path:"",
    loadComponent:()=>import("./admin-dashboard.component")
      .then((m)=>m.AdminDashboardComponent)
  },
  {
    path:"**",
    loadComponent:()=>import("./admin-dashboard.component")
      .then((m)=>m.AdminDashboardComponent)
  }
]
