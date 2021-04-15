import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstTabComponent } from "./first-tab/first-tab.component";
import { SecondTabComponent } from "./second-tab/second-tab.component";

const routes: Routes = [
  { path: "", redirectTo: "/first-tab", pathMatch: "full" },
  { path: "first-tab", component: FirstTabComponent },
  { path: "second-tab", component: SecondTabComponent },
  { path: "**", redirectTo: "/first-tab" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
