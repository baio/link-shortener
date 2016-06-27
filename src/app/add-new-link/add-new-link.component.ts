import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lsq-add-new-link',
  templateUrl: 'add-new-link.component.html',
  styleUrls: ['add-new-link.component.css']
})
export class AddNewLinkComponent {

  @Input() error: string;
  @Input() value: string;
  @Output() addLink = new EventEmitter<string>();

  onClicked(val : string) {
    this.addLink.emit(val);
  }

  ngChanges() {
    console.log("+++", this.value);
  }
}
