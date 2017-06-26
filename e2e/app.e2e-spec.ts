import { NaijadevsPage } from './app.po';

describe('naijadevs App', () => {
  let page: NaijadevsPage;

  beforeEach(() => {
    page = new NaijadevsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
