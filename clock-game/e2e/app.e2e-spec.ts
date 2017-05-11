import { ClockGamePage } from './app.po';

describe('clock-game App', function() {
  let page: ClockGamePage;

  beforeEach(() => {
    page = new ClockGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
