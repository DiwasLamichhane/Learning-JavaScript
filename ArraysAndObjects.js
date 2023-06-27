   let myvar =69;
        let myvar2 = "String";
        let myvar3 = true;
        let myvar4 = null;
        let myvar5 = undefined;

        // OBJECTS

        let employee = {
            Name: "Diwas Lamichhane",
            Semester: 3,
            College: "Vedas College",
            Location: "Jawalakhel, Lalitpur",
        }
        console.log(employee);
        
        // ARRAYS

        // let Names = [ 1, 2, 5, "Diwas", undefined];
        let Names = new Array(1, 52, 5, "Diwas", undefined); // Same as above 
        Names = Names.sort();
        Names.push("This is added using push");
        console.log(Names);
