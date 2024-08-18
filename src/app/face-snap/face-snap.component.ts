import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snapButtonText = 'Ajouter un snap';
    this.userHasSnapped = false;
  }

  onSnap(): void {
    this.userHasSnapped ? this.removeSnap() : this.addSnap();
  }

  addSnap(): void {
    this.snaps++;
    this.snapButtonText = 'Retirer un snap';
    this.userHasSnapped = true;
  }

  removeSnap(): void {
    this.snaps--;
    this.snapButtonText = 'Ajoute un snap';
    this.userHasSnapped = false;
  }
}
