import { Ejemplo01Page } from './app.po';

describe('ejemplo01 App', function() {
  let page: Ejemplo01Page;

  beforeEach(() => {
    page = new Ejemplo01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
