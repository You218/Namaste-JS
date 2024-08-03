function a(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}

const z = a();
console.log(z);
z();

// a function together with its lexical enviornment bundled together forms a closure
// used in currying, module design items