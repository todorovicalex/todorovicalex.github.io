//
// this is just a stub for a function you need to implement
//
function getStats(txt) {

    //NUMBER OF CHARACTERS
    let nChars = 0;

    for(char in txt){

        nChars += 1;

    }

    //NUMBER OF WORDS
    let nWords = 0;

    let text = txt;

    text = text.replace(/\W/g, " ");

    let words = text.split(" ");

    for(let i = 0; i < words.length; i++){

        if(words[i] === ""){

            words.splice(i, 1);

        }

    }

    //NUMBER OF LINES

    let nLines = 0;

    nLines = txt.split("\n").length;

    if(txt.length === 0){

        nLines = 0;

    }

    //NUMBER NON EMPTY LINES

    let lines = 0;
    let nNonEmptyLines = 0;

    lines = txt.split("\n");

    for(let i = 0; i < lines.length; i++){

        if(lines[i] != ("") && lines[i] != "\n" && lines[i] != " "){

            nNonEmptyLines += 1;

        }

    }

    //MAX LINE LENGTH

    let maxLineLength = 0;
    let temp = "";

    for(let i = 0; i < lines.length; i++){

        temp = lines[i];

        if(temp.length > maxLineLength){

            maxLineLength = temp.length;

        }

    }

    //AVERAGE WORD LENGTH
    
    let wordTotal = 0;
    let amount = 0;

    for(let i = 0; i < words.length; i++){

        if(words[i] != ""){

            amount +=1;

        }

    }

    for(let i = 0; i < words.length; i++){

        if(words[i] != ""){

            wordTotal += words[i].length;

        }
        

    }

    let averageWordLength = wordTotal/amount;

    nWords = amount;

    //PALINDROMES

    let palindromes = new Array();
    let isPalindrome = false;

    for(let i = 0; i < words.length; i++){

        let currentString = words[i];
        isPalindrome = false;

        if(currentString.length > 2){

            for(let j = 0; j < currentString.length/2; j++){

                if(currentString[j].toUpperCase() === currentString[currentString.length - 1 - j].toUpperCase()){
    
                    isPalindrome = true;
    
                }
                else{
    
                    isPalindrome = false;
                    break;
    
                }
    
            }
    
            if(isPalindrome === true){
    
                palindromes.push(currentString);
    
            }

        }

    }

    //LONGEST WORDS

    let counter = 0;
    
    if(words.length >= 10){

        counter = 10;

    }
    else{

        counter = words.length;

    }

    let longestWords = new Array();

    let allWords = new Array();

    allWords = words.slice(0);

    let longest = 0;

    let current = 0;

    let longestWord = "";

    let index = 0;

    let exists = false;

    while (counter != 0){

        for(let i = 0; i < allWords.length; i++){

            current = allWords[i].length;

                if(current > longest){

                    longest = current;
                    longestWord = allWords[i];

                    index = i;

                }

        }

        for(let i = 0; i < longestWords.length; i++){

            if(longestWords[i] === longestWord){

                exists = true;

            }

        }

        if(exists === false){

            longestWords.push(longestWord);

        }

        allWords[index] = "";

        for(let i = 0; i < allWords.length; i++){

            if(allWords[i] === ""){
    
                allWords.splice(i, 1);
    
            }
    
        }

        exists = false;
        index = 0;
        longestWord = "";
        current = 0;
        longest = 0;

        counter--;

    }

    //MOST FREQUENT WORDS

    let mostFrequentWords = new Array();

    let allTheWords = new Array();

    let clone = new Array();

    let indexArray = new Array();

    clone = words.slice(0);

    let currentStr = "";

    let resutlStr = "";

    let count = 0;

    let rememberIndex = 0;

    let counter2 = 10;

   

    for(let i = 0; i < clone.length; i++){

        currentStr = clone[i];

        for(let j = 0; j < clone.length; j++){

            if(currentStr === clone[j]){

                count++;

            }

        }

        indexArray.push(count);

        result = currentStr + "(" + count + ")";

        allTheWords.push(result);

        result = "";

        count = 0;

        for(let k = 0; k < clone.length; k++){

            if(currentStr === clone[k]){

                clone.splice(k, 1);

            }

        }



    }

    let iterations = 0;

    if(allTheWords.length >= 10){

        iterations = 10;

    }
    else{

        iterations = allTheWords.length;

    }

    let most = 0;
    let temp2 = 0;

    while(iterations > 0){

        for(let i = 0; i < indexArray.length; i++){

            temp2 = indexArray[i];
    
            if(temp2 > most){
    
                most = temp2;
                rememberIndex = i;
    
            }
    
        }

        mostFrequentWords.push(allTheWords[rememberIndex]);

        indexArray.splice(rememberIndex,1);

        iterations--;

        most = 0;
        temp2 = 0;

        for(let i = 0; i < allTheWords.length; i++){

            if(allTheWords[rememberIndex] === allTheWords[i]){

                allTheWords.splice(i, 1);

            }

        }

        rememberIndex = 0;


    }


    

    
        

    return {
        nChars,
        nWords,
        nLines,
        nNonEmptyLines,
        averageWordLength,
        maxLineLength,
        palindromes,
        longestWords,
        mostFrequentWords,
    };
}

