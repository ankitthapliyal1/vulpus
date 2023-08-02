import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GamesComponent } from './pages/games/games.component';
import { CommunityComponent } from './pages/community/community.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'games', component:GamesComponent},
  {path:'community', component:CommunityComponent},
  // {path:'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
