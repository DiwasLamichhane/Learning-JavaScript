let jsonObj = {
            name: "Diwas",
            channel: "Xaina",
            friend: "Nikita",
            food: "Masu Lover"
        }
        console.log(jsonObj);

        let myJsonStr = JSON.stringify(jsonObj); // Prints object to string
        console.log(myJsonStr);

        myJsonStr = myJsonStr.replace('Masu Lover', 'MOMO Lover'); //Replace Masu Lover to MOMO lover
        console.log(myJsonStr);

        newJsonObj = JSON.parse(myJsonStr); //Prints string to Object
        console.log(newJsonObj);
