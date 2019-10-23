import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreedataComponent } from './treedata/treedata.component';


const routes: Routes = [
  /* {path : '', redirectTo : '/treegrid', pathMatch:'full'},
  {path : 'treegrid', component : TreedataComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents =[TreedataComponent];