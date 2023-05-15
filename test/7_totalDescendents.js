const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("totalDescendents", () => {

    let offspring1, offspring2, offspring3, offspring4;
    beforeEach(() => {
      offspring1 = new Vampire();
      offspring2 = new Vampire();
      offspring3 = new Vampire();
      offspring4 = new Vampire();

      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
    });

    it("should return 5 when called on any vampire", () => {
      expect(rootVampire.totalDescendents).to.equal(5);
      // expect(offspring1.totalDescendents).to.equal(5);
      // expect(offspring2.totalDescendents).to.equal(5);
      // expect(offspring3.totalDescendents).to.equal(5);
      // expect(offspring4.totalDescendents).to.equal(5);
    });
  });
});