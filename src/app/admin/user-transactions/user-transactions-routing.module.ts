import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTransactionListComponent } from './user-transaction-list/user-transaction-list.component';

const routes: Routes = [
  {
    path:"",
    component:UserTransactionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTransactionsRoutingModule { }
