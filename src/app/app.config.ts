// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser'; // Remove or comment out this import
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideClientHydration(withEventReplay()), // <-- REMOVE OR COMMENT OUT THIS LINE
    provideHttpClient(withFetch())
  ]
};