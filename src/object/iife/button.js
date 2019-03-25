/**
 * What is important to note is that the returned function closes over the count variable. 
 * That is, because a function maintains a reference to its parent's scope, 
 * count is available for the returned function to use! 
 * As a result, we immediately invoke a function that returns that function. 
 * And since the returned function has access to the internal variable, count, 
 * a **private scope is created** -- effectively protecting the data!
 */

const button = document.getElementById("button");
button.addEventListener('click',
  (function countClicks() {
    let count = 0;

    return function() {
      count++;
      console.log(`A click event! Count: ${count}`);
      if (count === 5) {
        alert("This alert appears in the fifth click!");
        count = 0;
        console.log('The count was reset');
      }
    };
  })()
);
