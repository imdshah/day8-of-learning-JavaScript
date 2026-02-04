// Closure example:
function outerFunction() {
    let count = 0;  // Declared a variable count in the outerFunction scope, this is not global scope, it is local to outerFunction.   
    function counter(num) {
        for (let i = 0; i < num; i++) {
        console.log(count +=1);
        }
        return count;
    }
    return counter;   // returning the inner function counter, so the inner function scope is preserved even after the outerFunction has finished executing.
}
const myCounter = outerFunction();  // Here the outerFunction is called and the scope of the outerFunction in the execution context ends but the inner function counter is returned and assigned to myCounter variable, so the scope of the inner function counter is preserved and can be accessed through myCounter variable.
                                    // This is the power of closure, it allows the inner function to access the variables of the outer function even after the outer function has finished executing.
console.log("The last value of counter is :", myCounter(10));