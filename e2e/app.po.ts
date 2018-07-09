import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPanelText() {
    return element(by.css('app-root span.panel-title')).getText();
  }
}
