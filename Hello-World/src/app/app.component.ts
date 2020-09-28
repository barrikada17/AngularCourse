import { Component } from '@angular/core';
import { FavoriteChangedEventArgs, FavoriteComponent } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  post = {
    title: 'Angular App',
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Favourite Change: ", eventArgs);
  }
}
