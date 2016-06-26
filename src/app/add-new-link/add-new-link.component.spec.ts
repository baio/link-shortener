/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AddNewLinkComponent } from './add-new-link.component';

describe('Component: AddNewLink', () => {
  it('should create an instance', () => {
    let component = new AddNewLinkComponent();
    expect(component).toBeTruthy();
  });
});
