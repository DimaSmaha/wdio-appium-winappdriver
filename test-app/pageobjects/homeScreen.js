class HomeScreen {
  async nativeAccessibilityId(testId) {
    return $("~" + testId);
  }

  async nativeName(elementName) {
    return $("[name='" + elementName + "']");
  }

  get aboutBtn() {
    // return $(`//Button[@Name="Про"]`);
    return $(`//*[@Name="About"]`);
  }

  async clickAboutBtn() {
    await this.aboutBtn.click();
  }

  get popupText() {
    return $('//*[@AutomationId="1508700"]');
  }

  get chooseDiskBtn() {
    return $('//*[@AutomationId="329256"]');
  }

  async clickChooseDisk() {
    await this.chooseDiskBtn.click();
  }

  // get languageBtn() {
  //   return $("//*[@RuntimeId='[2A.D0680.4.80000001.D0680.FFFFFFFC.5]']");
  // }

  get languageBtn() {
    return $("id=[2A.D0680.4.80000001.D0680.FFFFFFFC.5]");
  }

  async clickLanguageBtn() {
    await this.languageBtn.click();
  }

  get searchInput() {
    return $(`//*[@ClassName="TLabeledEdit"]`);
  }

  async typeSearchInput(input) {
    await this.searchInput.type(input);
  }
}

module.exports = new HomeScreen();
