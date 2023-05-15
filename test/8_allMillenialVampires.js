const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root", 1880);
  });

  describe("allMillenialVampires", () => {

    let offspring1, offspring2, offspring3, offspring4;
    beforeEach(() => {
      offspring1 = new Vampire('off1', 1910);
      offspring2 = new Vampire('off2', 1981);
      offspring3 = new Vampire('off3', 1989);
      offspring4 = new Vampire('off4', 2002);

      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);

    });

    it("should return any array of all vampires converted after 1980 when called on any vampire", () => {
      expect(rootVampire.allMillennialVampires).to.deep.include('off3');
      expect(rootVampire.allMillennialVampires.length).to.equal(3);
      expect(offspring2.allMillennialVampires).to.deep.include('off2', 'off3', 'off4');
      expect(offspring3.allMillennialVampires).to.deep.include('off3', 'off4');
      expect(offspring4.allMillennialVampires).to.deep.include('off4');
    });
  });
});
