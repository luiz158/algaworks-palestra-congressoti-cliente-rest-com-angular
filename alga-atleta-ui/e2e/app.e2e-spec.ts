import { AlgaAtletaUiPage } from './app.po';

describe('alga-atleta-ui App', () => {
  let page: AlgaAtletaUiPage;

  beforeEach(() => {
    page = new AlgaAtletaUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
