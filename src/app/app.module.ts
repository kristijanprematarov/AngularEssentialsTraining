import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { CategoryListPipe } from './pipes/category-list.pipe';
import { FavoriteDirective } from './directives/favorite.directive';
import { lookupListToken, lookupLists } from './providers/providers';
import { MockXHRBackend } from './backend/mock-xhr-backend';
import { routing } from './app.routing';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
