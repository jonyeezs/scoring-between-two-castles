import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'castle', loadChildren: './castle/castle.module#CastleModule' },
  { path: '', redirectTo: '/castle/default', pathMatch: 'full' },
  {
    path: 'support',
    loadChildren: './help-support/help-support.module#HelpSupportPageModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
