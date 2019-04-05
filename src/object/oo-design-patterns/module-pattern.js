/**
 * **Privacy with Underscores?**
 * You may have seen object properties and method names prefixed with an underscore (_), especially in library code. While an underscore is added by the code's author to distinguish privacy, it is privacy by convention only. JavaScript does not give special functionality or meaning to properties prefixed with an underscore!
 */
let sodiumChloride = (function(){
    let chemicalFormula = 'NaCl';
    let molarMass = 58.44;
  
    return {
      getProperties: function(){
        console.log(`Formula: ${chemicalFormula}`);
        console.log(`Molar Mass: ${molarMass} g/mol`);
      }
    };
  })();
  sodiumChloride.getProperties();