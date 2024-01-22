import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Transactionslist } from '../transactionslist';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-add-transaction-form',
  standalone: true,
  imports: [],
  templateUrl: './add-transaction-form.component.html',
  styleUrl: './add-transaction-form.component.css'
})
export class AddTransactionFormComponent {

}
