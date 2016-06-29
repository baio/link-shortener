import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lsq-add-new-link',
  templateUrl: 'add-new-link.component.html',
  styleUrls: ['add-new-link.component.css']
})
export class AddNewLinkComponent {

  @Input() url: string;
  @Input() error: string;
  @Output() addLink = new EventEmitter<string>();

  onClicked(val : string, input: HTMLInputElement) {
    input.value = null;
    this.addLink.emit(val);
  }

}
