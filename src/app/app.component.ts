import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common'; // Ensure CommonModule is imported for standalone components if used in template. (already done but good to double check)


@Component({
  selector: 'app-root',
  standalone: true, // Assuming this is a standalone component
  imports: [RouterOutlet, CommonModule], // Ensure RouterOutlet and CommonModule are in imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeManagementSystem';

  // Inject the Router service
  constructor(private router: Router) {}

  /**
   * Navigates to the employee list programmatically.
   */
  goToEmployeeList(): void {
    console.log('Attempting programmatic navigation to /employees');
    this.router.navigate(['/employees']).then(success => {
      if (success) {
        console.log('Programmatic navigation successful!');
      } else {
        console.warn('Programmatic navigation failed (e.g., already on the page).');
      }
    }).catch(err => {
      console.error('Error during programmatic navigation:', err);
    });
  }

  /**
   * Navigates to the add employee form programmatically.
   */
  goToAddEmployee(): void {
    console.log('Attempting programmatic navigation to /add-employee');
    this.router.navigate(['/add-employee']).then(success => {
      if (success) {
        console.log('Programmatic navigation successful!');
      } else {
        console.warn('Programmatic navigation failed (e.g., already on the page).');
      }
    }).catch(err => {
      console.error('Error during programmatic navigation:', err);
    });
  }
}
