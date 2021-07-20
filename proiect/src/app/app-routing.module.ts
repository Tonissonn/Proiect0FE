import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddComponent} from "./add/add.component";
import {OverviewComponent} from "./overview/overview.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
