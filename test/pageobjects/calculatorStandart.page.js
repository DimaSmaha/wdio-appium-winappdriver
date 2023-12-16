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
}

module.exports = new StandartCalculator();
