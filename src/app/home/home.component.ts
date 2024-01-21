import { Component } from '@angular/core';
import { TransactionTableComponent } from '../transaction-table/transaction-table.component';
import { CommonModule } from '@angular/common';
import { Transactionslist } from '../transactionslist';

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
  transactions: Transactionslist = {
    id: 1,
    date: '2022-01-01',
    description: 'Food',
    category: 'Food',
    amount: 300
  }
}
