 var string1 = "This is a string";
      console.log(string1);

      // 1. don't use var, use let

      let a = 69;
      {
        // here {} is block you can declare 'a' whis is already been declared and print a without replacing previous value.

        let a = 96;
        console.log(a);
      }
      console.log(a);

      // 2. constant

      const c = "This cannot change because const is used.";
      console.log(c);

      // if-else

      let age = 20;
      if (age < 19) {
        console.log("You are a teen-age.");
      } else {
        console.log("You are not at teen-age.");
      }

      // else if

      let YourAge = 19;
      if (YourAge > 19) {
        console.log("Your age is greater than 19.");
      } else if (YourAge == 19) {
        console.log("Your age is 19.");
      } else {
        console.log("Your age is less than 19.");
      }

      // Switch case

      let diwasAge = 19;
      switch (diwasAge) {
        case 1:
          consple.log("The age of Diwas is 4");
          break;
        case 2:
          consple.log("The age of Diwas is 8");
          break;
        case 3:
          consple.log("The age of Diwas is 12");
          break;
        case 4:
          consple.log("The age of Diwas is 16");
          break;
        default:
          console.log("The age of Diwas is not 4, 8, 12, 16");
          break;
      }
