import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'custom-card',
  imports: [],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.css',
})
export class CustomCardComponent {
  @ViewChild('cardTag') cardRef!: ElementRef<HTMLDivElement>;

  card: Card = Card.multiFieldCard;

  isDragged: boolean = false;
  private startX: number = 0;
  private startY: number = 0;
  private offsetX: number = 100;
  private offsetY: number = 50;

  private removeMouseUp: () => void = () => {};
  private removeMouseMove: () => void = () => {};

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (!this.cardRef) return;

    this.renderer.setStyle(this.cardRef.nativeElement, 'transform', `translate(${this.offsetX}px, ${this.offsetY}px)`);
  }

  mousedown(event: MouseEvent) {
    this.isDragged = true;
    this.startX = event.clientX - this.offsetX;
    this.startY = event.clientY - this.offsetY;

    this.removeMouseMove = this.renderer.listen('document', 'mousemove', this.mousemove.bind(this));
    this.removeMouseUp = this.renderer.listen('document', 'mouseup', this.mouseup.bind(this));
  }

  mousemove(event: MouseEvent) {
    requestAnimationFrame(() => {
      console.log("Tracking mouse movement on " + event.target);

      if (!this.isDragged) return;

      this.offsetX = event.clientX - this.startX;
      this.offsetY = event.clientY - this.startY;

      this.renderer.setStyle(this.cardRef.nativeElement, 'transform', `translate(${this.offsetX}px, ${this.offsetY}px)`);
    });
  }

  mouseup() {
    this.isDragged = false;
    this.removeMouseMove();
    this.removeMouseUp();
  }
}
