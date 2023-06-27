
        var str = 'This is a string';
        console.log(str);        
        
        // First occurance of a substring
        var position = str.indexOf('a');
        console.log(position);
        
        // Last occurance of a substring
        position = str.lastIndexOf('is');
        console.log(position);
        
        // substring from a string
        var subst = str.slice(1,8); // "slice" can take negative values 1dekhi 7 samma
        console.log(subst);

        subst = str.substring(1,8); // "substring" can't take negative values 1dekhi 7 samma
        console.log(subst);

        subst = str.substr(1,8); //  "substr" Kaha bata chalu garne ani kati character tyo naya string ma store garne ho 1dekhi 8 samma
        console.log(subst);

        var replaced = str.replace('string', 'sentence'); // Variable str ma lekheko This is a 'string' ko 'string' lai sentence le replace gardinxa.

        console.log(str);
        console.log(replaced);

        console.log(str.toUpperCase()); // sabai capital letters ma print hunxa
        console.log(str.toLowerCase()); // sabai small letter ma print hunxa

        var newString = str.concat(' New String'); // yesle str ma vako content ma New String add gardinxa
        console.log(newString);

        var strwithWhitespaces = "     this contains        whitespaces    ";
        console.log(strwithWhitespaces);
        console.log(strwithWhitespaces.trim()); // .trim() removes the white spaces from first and last but not inside.

        var char2 = str.charAt(2); // charAt(2) le chai 2 ma k xa tyo print garxa jastai this ma, i=2 ma xa so 2 print garxa.
        console.log(char2);

        var char2 = str.charCodeAt(2); // yesle chai 2 ma vako i ko character code dinxa (UTF-8)
        
        
        
        console.log(char2);

        console.log(str[3]);
