import { Injectable } from '@angular/core';
import { Transactionslist } from './transactionslist';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  url = 'http://localhost:3000/transactions';

  async getAllTransactions(): Promise<Transactionslist[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  submitTransaction(date: string, description: string, category: string, amount: string) {
    console.log('Submitted transaction:', date, description, category, amount);
  }
}
