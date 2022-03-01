import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction Service/transaction.service';

@Component({
  selector: 'app-user-transaction-list',
  templateUrl: './user-transaction-list.component.html',
  styleUrls: ['./user-transaction-list.component.css']
})
export class UserTransactionListComponent implements OnInit {

  constructor(private transActionServie: TransactionService) { }
  p: any
  data: any
  ngOnInit(): void {
    this.transactionList()
  }


  transactionList() {
    this.transActionServie.transactionList().subscribe((res: any) => {
      this.data = res.data
      console.log(this.data);
    }, (err: any) => {
      console.log(err);
    })
  };


  onClick(event: any) {
    if (event.target.value === "") {
      // console.log(event.target.value,"none")+"sdjbjabsd";
    } else {
      if (event.target.value == 'All') {
        this.transactionList()
        // console.log(event.target.value, "acdkjnf")
      } else {
        this.transActionServie.filterTransAction(event.target.value).subscribe((res: any) => {
          this.data = res.data
        })
      }
    }

  }
}
