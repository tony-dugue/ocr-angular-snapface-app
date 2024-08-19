import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({ providedIn: 'root' })
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
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
    ).withLocation('à la montagne'),
    new FaceSnap(
      'Un bon repas',
      "Mmmh que c'est bon!",
      new Date(),
      156,
      'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg'
    )
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps]
  }
}

