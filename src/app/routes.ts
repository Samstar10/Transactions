import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTransactionFormComponent } from './add-transaction-form/add-transaction-form.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'add-transaction',
        component: AddTransactionFormComponent
    }
];

export default routeConfig