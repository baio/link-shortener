/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FetchService } from './fetch.service';

describe('Fetch Service', () => {
  beforeEachProviders(() => [FetchService]);

  it('should ...',
      inject([FetchService], (service: FetchService) => {
    expect(service).toBeTruthy();
  }));
});
