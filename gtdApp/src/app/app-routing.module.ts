import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'eingang',
    loadChildren: () => import('./eingang/eingang.module').then( m => m.EingangPageModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then( m => m.TodoPageModule)
  },
  {
    path: 'delegieren',
    loadChildren: () => import('./delegieren/delegieren.module').then( m => m.DelegierenPageModule)
  },
  {
    path: 'einstellungen',
    loadChildren: () => import('./einstellungen/einstellungen.module').then( m => m.EinstellungenPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
