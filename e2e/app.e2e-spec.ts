import { Tim2Page } from './app.po';

describe('tim2 App', function() {
  let page: Tim2Page;

  beforeEach(() => {
    page = new Tim2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
