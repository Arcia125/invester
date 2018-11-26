import { AdvisorModule } from './advisor.module';

describe('AdvisorModule', () => {
  let advisorModule: AdvisorModule;

  beforeEach(() => {
    advisorModule = new AdvisorModule();
  });

  it('should create an instance', () => {
    expect(advisorModule).toBeTruthy();
  });
});
