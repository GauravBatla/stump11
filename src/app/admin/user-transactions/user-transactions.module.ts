import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTransactionsRoutingModule } from './user-transactions-routing.module';
import { UserTransactionListComponent } from './user-transaction-list/user-transaction-list.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    UserTransactionListComponent
  ],
  imports: [
    CommonModule,
    UserTransactionsRoutingModule,
    AngularMaterialModule,

  ]
})
export class UserTransactionsModule { }
