/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { EventDebounceDirective } from './event-debounce.directive';

describe('EventDebounce Directive', () => {
  it('should create an instance', () => {
    let directive = new EventDebounceDirective(null);
    expect(directive).toBeTruthy();
  });
});
