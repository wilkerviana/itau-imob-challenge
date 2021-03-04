import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(`./home/home.module`).then((module) => module.HomeModule),
  },
  {
    path: 'imoveis/:id',
    loadChildren: () =>
      import(`./details/details.module`).then((module) => module.DetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
