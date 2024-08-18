import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.snapButtonText = 'Ajouter un snap';
    this.userHasSnapped = false;
  }

  onSnap(): void {
    this.userHasSnapped ? this.removeSnap() : this.addSnap();
  }

  addSnap(): void {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Retirer un snap';
    this.userHasSnapped = true;
  }

  removeSnap(): void {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Ajoute un snap';
    this.userHasSnapped = false;
  }
}
