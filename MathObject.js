        //printing the math objects
        let m = Math;
        console.log(m);

        //printing the constants from math object 
        console.log("The value of Math.E is", Math.E);
        console.log("The value of Math.PI is", Math.PI);
        console.log("The value of Math.LN2 is", Math.LN2);
        console.log("The value of Math.SQRT1_2 is", Math.SQRT1_2);
        console.log("The value of Math.LOG2E is", Math.LOG2E);
        
        //printing the functions from math object
        let a = 69.696969;
        let b = 96;

        console.log("The values of a and b is ", a, b, "respectively.");
        console.log("The values of a and b rounded is ", Math.round(a), Math.round(b)); //round up

        console.log("5 raised to the power 3 is: ", Math.pow(5, 3)); // 5^3
        console.log("Square root of 36 is", Math.sqrt(36)); //Root Under 36 is 6

        console.log("5.8 round up to nearest integer is ", Math.ceil(5.8)); //round up to nearest integer
        console.log("5.8 round down to nearest integer is ", Math.floor(5.8)); //round down to nearest integer

        console.log("The absolute value of -5.56 is ", Math.abs(-5.56)); // -ve to +ve 

        console.log("The value of sin(PI) is ", Math.sin(Math.PI)); 

        console.log("Maximum number between 4, 5, 8, 1 is: ", Math.max(4, 5, 8, 1)); // Max no print garxa
        console.log("Minimum number between 4, 5, 8, 1 is: ", Math.min(4, 5, 8, 1)); // Min no print garxa

        // Generating a random number 

        let r = Math.random();
        console.log("The random number is ", r);
