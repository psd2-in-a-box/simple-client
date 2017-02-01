import { FofPage } from './app.po';

describe('fof App', function() {
  let page: FofPage;

  beforeEach(() => {
    page = new FofPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
