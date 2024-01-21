import { Injectable } from '@angular/core';
import { Transactionslist } from './transactionslist';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  transactions: Transactionslist[] = [
    {
      id: 1,
      date: '2022-01-01',
      description: 'Transaction 1',
      category: 'Category 1',
      amount: 100
    },
    {
      id: 2,
      date: '2022-01-02',
      description: 'Transaction 2',
      category: 'Category 2',
      amount: 200
    },
    {
      id: 3,
      date: '2022-01-03',
      description: 'Transaction 3',
      category: 'Category 3',
      amount: 300
    },
    {
      id: 4,
      date: '2022-01-04',
      description: 'Transaction 4',
      category: 'Category 4',
      amount: 400
    }
  ]

  getAllTransactions(): Transactionslist[] {
    return this.transactions;
  }
}
