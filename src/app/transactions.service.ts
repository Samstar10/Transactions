import { Injectable } from '@angular/core';
import { Transactionslist } from './transactionslist';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  url = 'http://localhost:3000/transactions';


  async getAllTransactions(): Promise<Transactionslist[]> {
    const data = await fetch(this.url);
    const transactions: Transactionslist[] = await data.json();
    return transactions
  }

  submitTransaction(date: string, description: string, category: string, amount: string) {
    const transaction: Omit<Transactionslist, 'id'> = {
      date: date,
      description: description,
      category: category,
      amount: Number(amount)
    }
    this.url = 'http://localhost:3000/transactions';
    fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
  }

  deleteTransaction(id: number) {
    this.url = 'http://localhost:3000/transactions/' + id;
    fetch(this.url, {
      method: 'DELETE'
    })
      .then(() => {
        console.log('Transaction deleted')
      })
      .catch((error) => {
        console.error('Error deleting transaction:', error)
      })
  }
}
