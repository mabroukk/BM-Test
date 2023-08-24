import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component'; // Import your FooterComponent

const routes: Routes = [
  { path: '**', component: FooterComponent }, // Use FooterComponent as the main content for all routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
