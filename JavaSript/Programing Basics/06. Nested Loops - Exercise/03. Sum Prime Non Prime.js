function sumPrimeNonPrime(input) {
    let sum1 = 0;
    let sum2 = 0;
    
    while(true)
    {
        let inputx = input.shift();
        
        if(inputx == "stop") break;
        
        let number = Number(inputx);
        let counter = 0;
        
        for(let i = 2; i <= number / 2; i++)
        {
            if(number % i == 0)
            {
                counter++; 
                break;
            }
        }
        
        if(number < 0) console.log('Number is negative.');
        else if(counter > 0 || number == 1) sum2 += number;
        else sum1 += number;
    }
    console.log(`Sum of all prime numbers is: ${sum1}`);
    console.log(`Sum of all non prime numbers is: ${sum2}`);
}