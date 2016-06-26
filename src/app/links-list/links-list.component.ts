import { Component, Input } from '@angular/core';
import { Link } from '../store/';

@Component({
  moduleId: module.id,
  selector: 'lsq-links-list',
  templateUrl: 'links-list.component.html',
  styleUrls: ['links-list.component.css']
})
export class LinksListComponent  {

  @Input() links: Link[];
}
