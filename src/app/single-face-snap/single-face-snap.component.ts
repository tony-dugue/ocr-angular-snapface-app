import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { UpperCasePipe, NgClass, NgStyle, DatePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  onSnap(): void {
    this.userHasSnapped ? this.removeSnap() : this.addSnap();
  }

  addSnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Retirer un snap';
    this.userHasSnapped = true;
  }

  removeSnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Ajoute un snap';
    this.userHasSnapped = false;
  }

  private prepareInterface() {
    this.snapButtonText = 'Ajouter un snap';
    this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id']
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId)
  }
}
