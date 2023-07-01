//This is HTML:
    <div class="container">
        Current Time Is: <span id="time"></span>
    </div>
 
//JavaScript Starts Here:
    <script>

        // let date = new Date("2024-06-29");
        // console.log(date);
        
        let date = new Date();
        console.log(date);

        // let date = new Date(year, month, date, hrs, min, sec, millisec);
        
        let year = date.getFullYear(); // prints year
        console.log(year);
        
        let datee = date.getDate(); //prints date
        console.log(datee);
        
        let month = date.getMonth(); //prints month
        console.log(month);

        let hours = date.getHours(); // prints hours
        console.log(hours);

        let min = date.getMinutes(); //prints minutes
        console.log(min);
        
        let sec = date.getSeconds(); // prints seconds
        console.log(sec);
        
        let milsec = date.getMilliseconds(); // prints milisecond
        console.log(milsec);
        

        date.setDate(5); //sets a new date 
        console.log(date);

        date.setTime(4); //sets a new time
        console.log(date);
        setInterval (updateTime, 1000);

        function updateTime(){
            time.innerHTML = new Date();
        }

        
        </script>
