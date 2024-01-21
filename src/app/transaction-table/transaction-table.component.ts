import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transactionslist } from '../transactionslist';

@Component({
  selector: 'app-transaction-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './transaction-table.component.html',
  styleUrl: './transaction-table.component.css'
})
export class TransactionTableComponent {
  @Input() transactions!: Transactionslist;
}
