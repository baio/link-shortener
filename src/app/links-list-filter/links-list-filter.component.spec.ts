/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LinksListFilterComponent } from './links-list-filter.component';

describe('Component: LinksListFilter', () => {
  it('should create an instance', () => {
    let component = new LinksListFilterComponent();
    expect(component).toBeTruthy();
  });
});
