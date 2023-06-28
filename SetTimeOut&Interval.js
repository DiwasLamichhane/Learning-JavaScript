 //setTimeout

        // setTimeout(function, millisecond, parameter1, parameter2, ...........)
        setTimeout(()=>{
            console.log("Hello");
        },3000); //returns after 3seconds: Hello.


        // clearTimeout

        const timeout = setTimeout(greeting, 3000, "Hi");
        if (true){
            clearTimeout(timeout);
        }
        // will not run
        function greeting(x){
            console.log(x);
        }



        // setInterval

        // setInterval(function, milliseconds, parameter1, parameter2, ........)
        // let counter = 0;
        // setInterval(count, 1000);
        // function count(){
        //     console.log(counter++);
        // } // returns counter every second: 0, 1, 2, 3, 4, .......

        // clearInterval

        let counter = 0;
        constInterval = setInterval(count, 1000);
        function count(){
            console.log(counter++);
            if( counter>5){
                clearInterval(constInterval);
            }
        } // returns counter every second: 0,1,2,3,4,5
