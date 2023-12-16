const standartCalculator = require("../pageobjects/calculatorStandart.page");

describe("Add Numbers", () => {
  it("It should add 2 numbers", async () => {
    await standartCalculator.clickNumberBtn(7);
    await standartCalculator.clickPlusBtn();
    await standartCalculator.clickNumberBtn(4);
    await standartCalculator.clickEqualBtn();
    expect(await standartCalculator.resultValue).toHaveText("Дисплей: 11");
    expect(await standartCalculator.resultValue).toBeDisplayed();
  });
});
