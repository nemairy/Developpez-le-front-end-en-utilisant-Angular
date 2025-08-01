import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    
     
  ],
})
  .catch((err) => console.error(err));
