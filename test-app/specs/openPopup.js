const homeScreen = require("../pageobjects/homeScreen");

describe("Real app e2e", () => {
  it("It should open info popup", async () => {
    // await homeScreen.clickAboutBtn();
    // expect(await homeScreen.popupText).toHaveTextContaining(
    //   "SoftPerfect File Recovery"
    // );
    await homeScreen.typeSearchInput("sasa");
  });
});
