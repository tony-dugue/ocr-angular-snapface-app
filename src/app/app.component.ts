import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      10,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    );
    this.myOtherSnap = new FaceSnap(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      new Date(),
      6,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1920px-Three_Rock_Mountain_Southern_Tor.jpg'
    );
    this.myLastSnap = new FaceSnap(
      'Un bon repas',
      "Mmmh que c'est bon!",
      new Date(),
      156,
      'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg'
    );
    
    this.myOtherSnap.setLocation('à la montagne');
  }
}
