describe('Arrays', function() {

  describe('toBeArray', function() {
    describe('when invoked', function() {
      describe('when subject is a true Array', function() {
        it('should confirm', function() {
          expect([]).toBeArray();
          expect(new Array()).toBeArray();
        });
      });
      describeWhenNotArray('toBeArray');
    });
  });

  describe('toBeArrayOfSize', function() {
    describe('when invoked', function() {
      describe('when subject is a true Array', function() {
        describe('when subject has the expected number of members', function() {
          it('should confirm', function() {
            expect([]).toBeArrayOfSize(0);
            expect([null]).toBeArrayOfSize(1);
            expect([false, false]).toBeArrayOfSize(2);
            expect([void(0), void(0)]).toBeArrayOfSize(2);
          });
        });
        describe('when subject has an unexpected number of members', function() {
          it('should deny', function() {
            expect([]).not.toBeArrayOfSize(1);
            expect([null]).not.toBeArrayOfSize(0);
            expect([true, true]).not.toBeArrayOfSize(1);
          });
        });
      });
      describeWhenNotArray('toBeArrayOfSize');
    });
  });

  describe('toBeEmptyArray', function() {
    describe('when invoked', function() {
      describe('when subject is a true Array', function() {
        describe('when subject has members', function() {
          it('should confirm', function() {
            expect([]).toBeEmptyArray();
          });
        });
        describe('when subject has no members', function() {
          it('should deny', function() {
            expect([null]).not.toBeEmptyArray();
            expect(['']).not.toBeEmptyArray();
            expect([1]).not.toBeEmptyArray();
            expect([true]).not.toBeEmptyArray();
            expect([false]).not.toBeEmptyArray();
          });
        });
      });
      describeWhenNotArray('toBeEmptyArray');
    });
  });

  describe('toBeNonEmptyArray', function() {
    describe('when invoked', function() {
      describe('when subject is a true Array', function() {
        describe('when subject has members', function() {
          it('should confirm', function() {
            expect([null]).toBeNonEmptyArray();
            expect([void(0)]).toBeNonEmptyArray();
            expect(['']).toBeNonEmptyArray();
          });
        });
        describe('when subject has no members', function() {
          it('should deny', function() {
            expect([]).not.toBeNonEmptyArray();
          });
        });
      });
      describeWhenNotArray('toBeNonEmptyArray');
    });
  });

  describeToBeArrayOfX({
    name: 'toBeArrayOfObjects',
    type: 'Object',
    whenValid: function() {
      expect([{}, {}]).toBeArrayOfObjects();
    },
    whenInvalid: function() {
      expect([null]).not.toBeArrayOfObjects();
      expect(['Object']).not.toBeArrayOfObjects();
      expect(['[object Object]']).not.toBeArrayOfObjects();
    },
    whenMixed: function() {
      expect([null, {}]).not.toBeArrayOfObjects();
    }
  });

  describeToBeArrayOfX({
    name: 'toBeArrayOfStrings',
    type: 'String',
    whenValid: function() {
      expect(['truthy']).toBeArrayOfStrings();
      expect([new String('truthy')]).toBeArrayOfStrings();
      expect([new String('')]).toBeArrayOfStrings();
      expect(['', 'truthy']).toBeArrayOfStrings();
    },
    whenInvalid: function() {
      expect([null]).not.toBeArrayOfStrings();
    },
    whenMixed: function() {
      expect([null, '']).not.toBeArrayOfStrings();
    }
  });

  describeToBeArrayOfX({
    name: 'toBeArrayOfNumbers',
    type: 'Number',
    whenValid: function() {
      expect([1]).toBeArrayOfNumbers();
      expect([new Number(1)]).toBeArrayOfNumbers();
      expect([new Number(0)]).toBeArrayOfNumbers();
      expect([0, 1]).toBeArrayOfNumbers();
    },
    whenInvalid: function() {
      expect([null]).not.toBeArrayOfNumbers();
    },
    whenMixed: function() {
      expect([null, 0]).not.toBeArrayOfNumbers();
    }
  });

  describeToBeArrayOfX({
    name: 'toBeArrayOfBooleans',
    type: 'Boolean',
    whenValid: function() {
      expect([true]).toBeArrayOfBooleans();
      expect([new Boolean(true)]).toBeArrayOfBooleans();
      expect([new Boolean(false)]).toBeArrayOfBooleans();
      expect([false, true]).toBeArrayOfBooleans();
    },
    whenInvalid: function() {
      expect([null]).not.toBeArrayOfBooleans();
    },
    whenMixed: function() {
      expect([null, false]).not.toBeArrayOfBooleans();
      expect([null, true]).not.toBeArrayOfBooleans();
    }
  });

});
