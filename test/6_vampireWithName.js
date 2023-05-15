const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root", 1880);
  });

  describe("vampireWithName", () => {

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

    it("should return the vampire object if a vampire with the name exists", () => {
      expect(rootVampire.vampireWithName("root")).to.deep.equal(rootVampire);
      expect(rootVampire.vampireWithName("off1")).to.deep.equal(offspring1);
      expect(rootVampire.vampireWithName("off2").name).to.equal(offspring2.name);
    });
    it("should return null if a vampire with the name does not exist", () => {
      expect(rootVampire.vampireWithName("bob")).to.equal(null);
      expect(offspring3.vampireWithName("joe")).to.equal(null);
    });
  });
});