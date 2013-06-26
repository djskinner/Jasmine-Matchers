  // Numbers
  // ---------------------------------------------------------------------------

  /**
   * Assert subject is not only calculable, but an actual Number
   * @return {Boolean}
   */
  matchers.toBeNumber = function() {
    return !isNaN(parseFloat(this.actual)) && !priv.is(this.actual, 'String');
  };

  /**
   * Assert subject is an even Number
   * @return {Boolean}
   */
  matchers.toBeEvenNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 === 0;
  };

  /**
   * Assert subject is an odd Number
   * @return {Boolean}
   */
  matchers.toBeOddNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 !== 0;
  };

  /**
   * Assert subject can be used in Mathemetic calculations, despite not being an actual Number.
   * @example "1" * "2" === 2 (pass)
   * @example "wut?" * "2" === NaN (fail)
   * @return {Boolean}
   */
  matchers.toBeCalculable = function() {
    return !isNaN(this.actual * 2);
  };
