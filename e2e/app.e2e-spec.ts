import { LinkSquashAppPage } from './app.po';

describe('link-squash-app App', function() {
  let page: LinkSquashAppPage;

  beforeEach(() => {
    page = new LinkSquashAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('lsq works!');
  });
});
