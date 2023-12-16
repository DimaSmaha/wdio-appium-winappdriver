class StandartCalculator {
  async getNumberBtn(number) {
    return $(`//*[@AutomationId="num${number}Button"]`);
  }

  async clickNumberBtn(number) {
    (await this.getNumberBtn(number)).click();
  }

  get plusBtn() {
    return $('//*[@AutomationId="plusButton"]');
  }

  async clickPlusBtn() {
    await this.plusBtn.click();
  }

  get equalBtn() {
    return $('//*[@AutomationId="equalButton"]');
  }

  async clickEqualBtn() {
    await this.equalBtn.click();
  }

  get resultValue() {
    return $('//*[@AutomationId="CalculatorResults"]');
  }

  get divideBtn() {
    return $('//*[@AutomationId="divideButton"]');
  }

  async clickDivideBtn() {
    await this.divideBtn.click();
  }

  get menuBtn() {
    return $('//*[@AutomationId="TogglePaneButton"]');
  }

  async clickMenuBtn() {
    await this.menuBtn.click();
  }

  get engineerModeBtn() {
    return $('//*[@AutomationId="Scientific"]');
  }

  async clickEngineerMode() {
    await this.engineerModeBtn.click();
  }

  get clearBtn() {
    // return $(`//Button[@Name="Очистити"]`);
    return $(`//*[@Name="Очистити"]`);
  }

  async clickClearBtn() {
    await this.clearBtn.click();
  }
}

module.exports = new StandartCalculator();
