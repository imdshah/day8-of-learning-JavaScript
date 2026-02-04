// Example of Lexical Scoping in JavaScript:
function outerFunc(){
    const username = "Mohammed"    // Here username is defined in outerFunc scope, but is accessible in innerFunc due to lexical scoping.
    function innerFunc(){          // innerFunc is lexically scoped to outerFunc
        let surname = "Shah"       // Here surname is defined in innerFunc scope, so that we can try to access it in printFullName function.
        console.log(username);
        function printFullName(){  // printFullName is lexically scoped to innerFunc which is lexically scoped to outerFunc
                                     // So printFullName can access both username and surname variables due to lexical scoping.
            console.log(`Full name is ${username} ${surname}`);
        }
        printFullName();           // Calling printFullName inside innerFunc because printFullName is not accessible outside innerFunc due to lexical scoping.
    }
    function anoterInnerFunc(){    // anoterInnerFunc is also lexically scoped to outerFunc which can access username variable.
        const username = "Aftab"
        console.log(username);
    }
    innerFunc();                  // Calling innerFunc inside outerFunc because innerFunc is not accessible outside outerFunc due to lexical scoping.
    anoterInnerFunc();           // Same goes for anoterInnerFunc, it is called inside outerFunc.
}
outerFunc();                // And at last calling outerFunc in the global scope to start the chain of function calls.
// console.log(username);   // This will give error because username is not defined in global scope. It is defined in outerFunc scope.