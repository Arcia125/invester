import { TestBed, async, inject } from '@angular/core/testing';

import { AdvisorGuard } from './advisor.guard';

describe('AdvisorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvisorGuard]
    });
  });

  it('should ...', inject([AdvisorGuard], (guard: AdvisorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
