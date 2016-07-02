import { Directive, Input, ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

export interface EventDebounce {
  event : EventEmitter<any>;
  handler : ($event: any) => void;
  dueTime: number;
}

@Directive({
  selector: '[eventDebounce]'
})
export class EventDebounceDirective implements OnInit, OnDestroy {

  private subs: any[];
  @Input() eventDebounce: EventDebounce[];

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.subs = this.eventDebounce.map(m =>
      m.event.debounceTime(m.dueTime)
      .distinctUntilChanged().subscribe($event => m.handler($event))
    );
  }

  ngOnDestroy() {
    this.subs.forEach(p => p.unsubscribe());
  }

}
