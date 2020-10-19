//MODULES
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


//COMPONENTS
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";

const routes: Routes = [
  { path: "", component: UserListComponent },
  { path: ":id", component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
