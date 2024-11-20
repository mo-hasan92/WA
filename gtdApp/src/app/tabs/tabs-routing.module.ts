import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'eingang',
        loadChildren: () => import('../eingang/eingang.module').then(m => m.EingangPageModule)
      },
      {
        path: 'todo',
        loadChildren: () => import('../todo/todo.module').then(m => m.TodoPageModule)
      },
      {
        path: 'delegieren',
        loadChildren: () => import('../delegieren/delegieren.module').then(m => m.DelegierenPageModule)
      },
      {
        path: 'einstellungen',
        loadChildren: () => import('../einstellungen/einstellungen.module').then(m => m.EinstellungenPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/eingang',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/eingang',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
