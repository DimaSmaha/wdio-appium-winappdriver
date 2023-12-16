const engineerCalculator = require("../pageobjects/calculatorEngineer");
const standartCalculator = require("../pageobjects/calculatorStandart.page");

describe("Calculator e2e", () => {
  it("It should clear", async () => {
    await standartCalculator.clickNumberBtn(7);
    await standartCalculator.clickClearBtn();
    expect(await standartCalculator.resultValue).toHaveText("Дисплей: 0");
  });

  it("It should add 2 numbers", async () => {
    await standartCalculator.clickNumberBtn(7);
    await standartCalculator.clickPlusBtn();
    await standartCalculator.clickNumberBtn(4);
    await standartCalculator.clickEqualBtn();
    expect(await standartCalculator.resultValue).toHaveText("Дисплей: 11");
    expect(await standartCalculator.resultValue).toBeDisplayed();
  });

  it("It should divide 2 numbers", async () => {
    await standartCalculator.clickNumberBtn(5);
    await standartCalculator.clickDivideBtn();
    await standartCalculator.clickNumberBtn(2);
    await standartCalculator.clickEqualBtn();
    expect(await standartCalculator.resultValue).toHaveText("Дисплей: 2,5");
    expect(await standartCalculator.resultValue).toBeDisplayed();
  });

  it("It should change the calculator mode", async () => {
    await standartCalculator.clickMenuBtn();
    await standartCalculator.clickEngineerMode();
    expect(await standartCalculator.modeTitle).toHaveText("Інженерний");
    expect(await standartCalculator.modeTitle).toBeDisplayed();
    expect(await engineerCalculator.logBtn).toHaveText("log");
    expect(await engineerCalculator.logBtn).toBeDisplayed();
  });
});
