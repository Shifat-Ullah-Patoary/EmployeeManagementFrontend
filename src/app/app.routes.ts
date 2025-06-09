import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'; // Import the new component

export const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' }, // Set default to employee list
  { path: 'add-employee', component: EmployeeFormComponent },
  { path: 'employees', component: EmployeeListComponent }, // Route for the employee list
  // Add a wildcard route for 404 (optional)
  // { path: '**', redirectTo: '/employees' }
];
