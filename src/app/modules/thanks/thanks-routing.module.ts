import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThanksComponent} from "./pages/thanks/thanks.component";

const routes: Routes = [
  {path:'thanks', component: ThanksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThanksRoutingModule { }
