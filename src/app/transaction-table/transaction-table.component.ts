import { Component, Input, NgIterable, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transactionslist } from '../transactionslist';
import { TransactionsService } from '../transactions.service';
import { HomeComponent } from '../home/home.component';

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
  @Input() transactions!: NgIterable<Transactionslist>;
  transactionsService: TransactionsService = inject(TransactionsService);


  deleteTransaction(id: number) {
    this.transactionsService.deleteTransaction(id);
    window.location.reload();
  }
}
