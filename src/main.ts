// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Ensure this import is correct
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) // <-- Use appConfig directly
  .catch((err) => console.error(err));