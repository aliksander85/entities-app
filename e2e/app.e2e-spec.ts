import { AppPage } from './app.po';

describe('entities-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display text "Connect Entity"', () => {
    page.navigateTo();
    expect(page.getPanelText()).toEqual('Connect Entity');
  });
});
