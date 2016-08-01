import { AltWebPage } from './app.po';

describe('alt-web App', function() {
  let page: AltWebPage;

  beforeEach(() => {
    page = new AltWebPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('alt-web works!');
  });
});
