class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOfVamps = 0;
    let currentVamp = this;
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numOfVamps++;
    }
    return numOfVamps;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return vampire.numberOfVampiresFromOriginal > this.numberOfVampiresFromOriginal;
  }
  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }
    for (const vampire of this.offspring) {
      const vampWithName = vampire.vampireWithName(name);
      if (vampWithName) {
        return vampWithName;
      }
    }
    return null;
  }
  
  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalDescendents = 1; // account for this
    for (const vampire of this.offspring) {
      totalDescendents += vampire.totalDescendents;
    }
    return totalDescendents;
  }
  
  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millVampires = [];
    if (this.yearConverted > 1980) {
      //push name into millVampires array
      millVampires.push(this.name);
    }
    for (const vampire of this.offspring) {
      // depth first traversal, resursive case to search all nodes
      millVampires = millVampires.concat(vampire.allMillennialVampires);
    }
    return millVampires;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  // closestCommonAncestor(vampire) {
  // }
}

module.exports = Vampire;



