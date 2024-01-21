import { Component, inject } from '@angular/core';
import { TransactionTableComponent } from '../transaction-table/transaction-table.component';
import { CommonModule } from '@angular/common';
import { Transactionslist } from '../transactionslist';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TransactionTableComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  transactions: Transactionslist[] = [];
  housingService: TransactionsService = inject(TransactionsService);

  constructor() {
    this.transactions = this.housingService.getAllTransactions();
  }
}
