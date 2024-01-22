import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Transactionslist } from '../transactionslist';
import { TransactionsService } from '../transactions.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-transaction-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-transaction-form.component.html',
  styleUrl: './add-transaction-form.component.css'
})
export class AddTransactionFormComponent {  

  transactionForm = new FormGroup({
    date: new FormControl(),
    description: new FormControl(''),
    category: new FormControl(''),
    amount: new FormControl()
  });

  transactionsService: TransactionsService = inject(TransactionsService);

  submitTransaction() {
    this.transactionsService.submitTransaction(
      this.transactionForm.value.date ?? '',
      this.transactionForm.value.description ?? '',
      this.transactionForm.value.category ?? '',
      this.transactionForm.value.amount ?? ''
    );

    this.transactionForm.reset();
  }
}
