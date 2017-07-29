import { BipsNgPage } from './app.po';

describe('bips-ng App', () => {
  let page: BipsNgPage;

  beforeEach(() => {
    page = new BipsNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
