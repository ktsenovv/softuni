function greatestCommonDivisor(num1, num2) {
    let divisor = getDivisor(num1, num2);
    console.log(divisor);
 
    function getDivisor(a,b) {
        if (b > a) {
            let temp = a;
            a = b;
            b = temp;
        }
        
        while (true) {
            if (b == 0)
                return  a;
            
            a %= b;

            if (a == 0)
                return b;
            
            b %= a;
        }
    }
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);