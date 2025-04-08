import { Component, ElementRef, Renderer2, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'custom-card',
  imports: [],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.css',
})
export class CustomCardComponent {
  @Input() card!: Card;
  @Output() grabbed = new EventEmitter<void>();

  @ViewChild('cardTag') cardRef!: ElementRef<HTMLDivElement>;

  private isDragged: boolean = false;
  private startX: number = 0;
  private startY: number = 0;
  private offsetX: number = 0;
  private offsetY: number = 0;

  private removeMouseUp: () => void = () => {};
  private removeMouseMove: () => void = () => {};

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (!this.cardRef) return;

    // save initial position
    this.offsetX = this.card.pos.x;
    this.offsetY = this.card.pos.y;

    // set initial position
    this.renderer.setStyle(this.cardRef.nativeElement, 'transform', `translate(${this.offsetX}px, ${this.offsetY}px)`);
  }

  mousedown(event: MouseEvent) {
    // save grab start position
    this.isDragged = true;
    this.startX = event.clientX - this.offsetX;
    this.startY = event.clientY - this.offsetY;

    // listen to mouse events on the document html tag, this way on fast mouse movement the card won't lose mouse tracking
    this.removeMouseMove = this.renderer.listen('document', 'mousemove', this.mousemove.bind(this));
    this.removeMouseUp = this.renderer.listen('document', 'mouseup', this.mouseup.bind(this));

    // tell parent that the card was grabbed, needed to set the zIndex so it comes to the top
    this.grabbed.emit();

    // update zIndex on next frame
    requestAnimationFrame(() => {
      this.renderer.setStyle(this.cardRef.nativeElement, 'z-index', `${this.card.zIndex}`);
    });
  }

  mousemove(event: MouseEvent) {
    // run movement only on frames, reduces stuttering by throttling function update calls
    requestAnimationFrame(() => {
      if (!this.isDragged) return;

      this.offsetX = event.clientX - this.startX;
      this.offsetY = event.clientY - this.startY;

      // save position to card for persistence
      this.card.pos = {x: this.offsetX, y: this.offsetY};

      // set new position
      this.renderer.setStyle(this.cardRef.nativeElement, 'transform', `translate(${this.offsetX}px, ${this.offsetY}px)`);
    });
  }

  mouseup() {
    // disable dragging and un subscribe from the documents mouse events
    this.isDragged = false;
    this.removeMouseMove();
    this.removeMouseUp();
  }
}
