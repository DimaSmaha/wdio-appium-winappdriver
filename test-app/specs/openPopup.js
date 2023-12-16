const homeScreen = require("../pageobjects/homeScreen");

describe("Real app e2e", () => {
  it("It should open info popup", async () => {
    await homeScreen.typeSearchInput("ssssss");
    await homeScreen.clickAboutBtn();
    expect(await homeScreen.popupText).toHaveText("SoftPerfect File Recovery");
    expect(await homeScreen.popupText).toBeDisplayed();
  });
});
