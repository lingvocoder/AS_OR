import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GridListComponent} from "./components/grid-list/grid-list.component";
import {UserPageComponent} from "./components/user-page/user-page.component";

const routes: Routes = [
  {path: 'home-page', component: GridListComponent},
  {path: 'user-page', component: UserPageComponent},
  {path: 'user-page', component: UserPageComponent},
  {path: 'user-page', component: UserPageComponent},
  {path: 'user-page', component: UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
