// function greet(){
        //     console.log('goodmorning!');
        // }
        // greet();

        
        // Arrow Function: 
        let greet = () =>{
            console.log('goodmorning!');
        }
        greet();

        // examples

        setTimeout(()=>{
        console.log("We are inside set-timeout");
        }, 3000);

        // let sum = (a, b) => {
        //     return a+b;
        // }

        let sum = (a, b) => a+b;
        let half = a => a/2;

        let obj = {
            greeting: "Good Morning",
            names: ["Diwas", "Dipika", "Nikita"],
            speak(){
                this.names.forEach((students)=>{
                    console.log( this.greeting + " brave "+ students);
                });
            }
        }
        obj.speak();
