/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient } from './http-client';

describe('HttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient]
    });
  });

  it('should ...', inject([HttpClient], (service: HttpClient) => {
    expect(service).toBeTruthy();
  }));
});
