function f(n=99){
    if(n === 0)throw Error("ERROOOR")
    f(n-1)
    }
    f()