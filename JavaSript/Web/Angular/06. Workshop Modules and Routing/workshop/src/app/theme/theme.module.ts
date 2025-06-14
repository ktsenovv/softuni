import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    MainComponent,
    AddThemeComponent,
    CurrentThemeComponent,
    ThemesListComponent,
    PostsListComponent,
  ],
  imports: [CommonModule, ThemeRoutingModule, SharedModule],
})
export class ThemeModule {}
