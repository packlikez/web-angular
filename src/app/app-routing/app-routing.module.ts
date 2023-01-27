import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "../feature/home/home.component";
import {FavoriteComponent} from "../feature/favorite/favorite.component";
import {SettingsComponent} from "../feature/settings/settings.component";
import {ComponentType} from "@angular/cdk/overlay"; // CLI imports router

const HOME: CustomRoute = {path: 'home', component: HomeComponent, label: 'Home', icon: 'home'}
const FAVORITE = {path: 'favorites', component: FavoriteComponent, label: 'Home', icon: 'favorite'}
const SETTINGS = {path: 'settings', component: SettingsComponent, label: 'Home', icon: 'settings'}

interface CustomRoute {
  path: string;
  component: ComponentType<any>;
  label: string;
  icon: string;

}

export const routes: CustomRoute[] = [HOME, FAVORITE, SETTINGS];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
