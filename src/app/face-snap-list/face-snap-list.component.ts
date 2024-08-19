import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        new Date(),
        10,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      ),
      new FaceSnap(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées.',
        new Date(),
        6,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1920px-Three_Rock_Mountain_Southern_Tor.jpg'
      ),
      new FaceSnap(
        'Un bon repas',
        "Mmmh que c'est bon!",
        new Date(),
        156,
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg'
      )
    ];
    
    this.faceSnaps[1].setLocation('à la montagne');
  }
}
