import { UnderstandingDirectivesAngular4Page } from './app.po';

describe('understanding-directives-angular4 App', () => {
  let page: UnderstandingDirectivesAngular4Page;

  beforeEach(() => {
    page = new UnderstandingDirectivesAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
