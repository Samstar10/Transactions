import { Component, inject } from '@angular/core';
import { TransactionTableComponent } from '../transaction-table/transaction-table.component';
import { CommonModule } from '@angular/common';
import { Transactionslist } from '../transactionslist';
import { TransactionsService } from '../transactions.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TransactionTableComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  filteredTransactions: Transactionslist[] = [];
  transactions: Transactionslist[] = [];
  transactionsService: TransactionsService = inject(TransactionsService);

  constructor() {
    this.transactionsService.getAllTransactions().then(
      (transactions: Transactionslist[]) => {
        this.transactions = transactions;
        this.filteredTransactions = transactions;
      }
    )
  }

  filterTransactions(filterValue: string) {
    if (!filterValue){
      this.filteredTransactions = this.transactions;
    }else{
      this.filteredTransactions = this.transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(filterValue.toLowerCase())
      });
    }
  }

}
