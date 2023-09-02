
function PrimeNumberGenerator (n) {
    for (let i = 2; i < n; i++) {
        let m = n % i;
        if (m === 0){
            return false
        }
    }
    return true
}

const a1=[25,77,79,19,22]

const a2 = a1.map(PrimeNumberGenerator)




// const x = (a, b) => {
//     a();
//     console.log(b)
// }
//
//
//
//
//
// x(()=>{console.log("hi")},"I am b")