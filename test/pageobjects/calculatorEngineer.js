class EngineerCalculator {
  get modeTitle() {
    return $('//*[@AutomationId="Header"]');
  }

  get logBtn() {
    return $('//*[@AutomationId="logBase10Button"]');
  }
}

module.exports = new EngineerCalculator();
