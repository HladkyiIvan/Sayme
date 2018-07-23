import { AuthorisationModule } from './authorisation.module';

describe('AuthorisationModule', () => {
  let authorisationModule: AuthorisationModule;

  beforeEach(() => {
    authorisationModule = new AuthorisationModule();
  });

  it('should create an instance', () => {
    expect(authorisationModule).toBeTruthy();
  });
});
