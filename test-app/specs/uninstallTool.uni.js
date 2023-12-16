const uninstallHomeScreen = require("../pageobjects/uninstallHomeScreen");

describe("Real app e2e", () => {
  it("It should open autolaunch", async () => {
    await uninstallHomeScreen.clickAutolaunchBtn();
    expect(await uninstallHomeScreen.statusBar).toBeDisplayed();
    expect(await uninstallHomeScreen.statusBar).toHaveText("1но");
    await uninstallHomeScreen.clickSettingsBtn();
    await uninstallHomeScreen.clickLanguageDropbox();
    expect(await uninstallHomeScreen.dutchLanguage).toBeDisplayed();
    expect(await uninstallHomeScreen.dutchLanguage).toHaveText(
      "Danish (Dansk)"
    );
  });
});
