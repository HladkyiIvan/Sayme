import { AnyProfileModule } from './any-profile.module';

describe('AnyProfileModule', () => {
  let anyProfileModule: AnyProfileModule;

  beforeEach(() => {
    anyProfileModule = new AnyProfileModule();
  });

  it('should create an instance', () => {
    expect(anyProfileModule).toBeTruthy();
  });
});
