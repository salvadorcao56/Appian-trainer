import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // ← Esto debería funcionar ahora

bootstrapApplication(App).catch(err => console.error(err));
