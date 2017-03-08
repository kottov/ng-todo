import { browser, element, by } from 'protractor';

export class TodoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('td-app-root h1')).getText();
  }
}