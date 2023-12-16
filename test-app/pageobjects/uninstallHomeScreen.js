class HomeScreen {
  nativeAccessibilityId(testId) {
    return $("~" + testId);
  }

  nativeName(elementName) {
    return $('//*[@Name="' + elementName + '"]');
  }

  get autolaunchBtn() {
    // return $(`//Button[@Name="Автозапуск"]`);
    // return $(`//*[@Name="Автозапуск"]`);
    return this.nativeName("Автозапуск");
  }

  async clickAutolaunchBtn() {
    await this.autolaunchBtn.click();
  }

  get statusBar() {
    return $(`//*[@ClassName="XTPStatusBar"]`);
  }

  get settingsBtn() {
    return $(`//*[@Name="Налаштування"]`);
  }

  async clickSettingsBtn() {
    await this.settingsBtn.click();
  }

  get languageDropbox() {
    return $(`//*[@ClassName="ComboBox"]`);
  }

  async clickLanguageDropbox() {
    await this.languageDropbox.click();
  }

  get dutchLanguage() {
    return $(`//*[@Name="Danish (Dansk)"]`);
  }
}

module.exports = new HomeScreen();
