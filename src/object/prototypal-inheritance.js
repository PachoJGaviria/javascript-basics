/**
 * Finding Properties and Methods on the Prototype Chain
First, the JavaScript engine will look at the object's own properties. This means that any properties and methods defined directly in the object itself will take precedence over any properties and methods elsewhere if their names are the same (similar to variable shadowing in the scope chain).
If it doesn't find the property in question, it will then search the object's constructor's prototype for a match.
If the property doesn't exist in the prototype, the JavaScript engine will continue looking up the chain.
At the very end of the chain is the Object() object, or the top-level parent. If the property still cannot be found, the property is undefined.
 */