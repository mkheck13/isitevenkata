// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// I had done a odd or even project before so I just reused the code from that
function testEven(n){
    if(n % 2 !=0){
        return false
    }else{
        return true
    }
}