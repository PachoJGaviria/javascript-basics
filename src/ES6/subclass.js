/**
 * old way
 */
function Tree(size, leaves) {
    this.size = (typeof size === "undefined")? 10 : size;
    const defaultLeaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null};
    this.leaves = (typeof leaves === "undefined")?  defaultLeaves : leaves;
    this.leafColor;
  }
  
  Tree.prototype.changeSeason = function(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
  
  function Maple (syrupQty, size, leaves) {
    Tree.call(this, size, leaves);
    this.syrupQty = (typeof syrupQty === "undefined")? 15 : syrupQty;
  }
  
  Maple.prototype = Object.create(Tree.prototype);
  Maple.prototype.constructor = Maple;
  
  Maple.prototype.changeSeason = function(season) {
    Tree.prototype.changeSeason.call(this, season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }
  
  Maple.prototype.gatherSyrup = function() {
    this.syrupQty -= 3;
  }
  
  const myMaple = new Maple(15, 5);
  myMaple.changeSeason('fall');
  myMaple.gatherSyrup();
  myMaple.changeSeason('spring');
  /**
   * New way
   */

class TreeNewWay {
    constructor(size = '10', leaves = { spring: 'green', summer: 'green', fall: 'orange', winter: null }) {
        this.size = size;
        this.leaves = leaves;
        this.leafColor = null;
    }

    changeSeason(season) {
        this.leafColor = this.leaves[season];
        if (season === 'spring') {
            this.size += 1;
        }
    }
}

class MapleNewWay extends TreeNewWay {
    constructor(syrupQty = 15, size, leaves) {
        super(size, leaves);
        this.syrupQty = syrupQty;
    }

    changeSeason(season) {
        super.changeSeason(season);
        if (season === 'spring') {
            this.syrupQty += 1;
        }
    }

    gatherSyrup() {
        this.syrupQty -= 3;
    }
}

const myMaple2 = new MapleNewWay(15, 5);
myMaple2.changeSeason('fall');
myMaple2.gatherSyrup();
myMaple2.changeSeason('spring');

console.log(myMaple2 instanceof TreeNewWay);
console.log(myMaple2 instanceof MapleNewWay);
console.log(myMaple2 instanceof Tree);
console.log(myMaple2 instanceof Map);
console.log(myMaple2 instanceof Object);