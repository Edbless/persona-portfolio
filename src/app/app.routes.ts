import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';


export const routes: Routes = [
  { path: '', component: Home }, // Default route
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'contact', component: Contact }
];
