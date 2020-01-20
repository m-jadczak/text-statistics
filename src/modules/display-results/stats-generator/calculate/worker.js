
export default () => {
let calculate;
const REGEX = {
        polish: /[ĄĆĘŁŃÓŚŹŻąćęłńóśźż]/,
        letters : /[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]/,
        digits: /\d/,
        white: /\s/,
        dividers : /[.;,]/,
        prosodic : /[!\-–?—…]/,
    };

  const extractionSingels = ["\"","'","`"];
  const extractionOpeners = ["„","‘","(","{","<","[","«","»"];
  const extractionClosers = ["”","’",")","}",">","]","»","«"];

  let matcher = {
    chars:{},
    words:{},
    prev:null};

    self.addEventListener("message", calculate = e => {// eslint-disable-line no-restricted-globals
      if (!e) return;
      let text, t,
          charsFrequency=[{"char":"",count:"0"}],
          wordsFrequency=[{"word":"",count:"0"}],
          sentences={count:0,max:null,min:null,current:0,totalWords:0},
          words={current:"",count:null},
          numbers={count:0,current:"",max:null,min:null},
          stats, currentOpen=[], extractionCount=0, allCharsCount=0, mathChars={separators:0,minus:0};

      text = e.data[0];
      t = e.data[1];
      stats = {};

        for (let i = 0; i < text.length; i++) {
            if(text[i]==="\n" && matcher.prev==="\r") continue;
            calcWordsAndSentences(i===text.length-1,text[i],matcher.prev,words,sentences);
            calcNumbers(text[i],matcher.prev,numbers,i===text.length-1,mathChars);
            setMatcher(matcher.chars,text[i]);
            calculateRegexStats(stats,REGEX,text[i]);
            extractionCount += calculateExtraction(stats,text[i],currentOpen);
            allCharsCount+=1;
            matcher.prev = text[i];
        }
        charsFrequency = countFrequency(matcher.chars,"char",t);
        wordsFrequency = countFrequency(matcher.words,"word",t);

        stats.allCharsCount = allCharsCount;
        stats.charsFrequency = charsFrequency;
        stats.wordsFrequency = wordsFrequency;
        stats.wordsCount = words.count;
        stats.extractionCount = extractionCount;
        stats.sentences = sentences;
        stats.numbers = numbers;
        // console.log(stats.dividersCount-mathChars.separators);
        // console.log(stats.prosodic-mathChars.minus);
        stats.dividersCount -= mathChars.separators;
        stats.prosodicCount -= mathChars.minus;

        postMessage(stats);
    });

    const setMatcher = (matcherSubset,cur) =>{
        let current = cur.toLowerCase();
        matcherSubset[current] = matcherSubset[current] ? matcherSubset[current]+1 : 1;
    };

    const calculateRegexStats = (statObject, regexObject, currChar) => {
      let fullName;
      for (let regexName in regexObject) {
        fullName=regexName+"Count";
        if(regexObject[regexName].test(currChar)){
          statObject[fullName] = statObject[fullName] ? statObject[fullName]+1 : 1;
        }

      }
    };

    const calcWordsAndSentences=(isLast,currChar,prevChar,words,sentences) =>{
      const closeWord = () =>{
        if(isLast && REGEX.letters.test(currChar)) words.current += currChar;
        setMatcher(matcher.words,words.current);
        words.count++;
        words.current="";
      };
      const closeSentance = () =>{
        sentences.count++;
        sentences.totalWords+=sentences.current;
        if(!sentences.max || sentences.current>sentences.max) sentences.max=sentences.current;
        if(!sentences.min || sentences.current<sentences.min) sentences.min=sentences.current;
        sentences.current=0;
      };

      if(REGEX.letters.test(currChar) && (!isLast)) {
        words.current += currChar;
      } else if(words.current){
        sentences.current++;
        closeWord();
      }
      if(sentences.current && ((/[!?]/.test(currChar) || (currChar==="." && isLast) || (prevChar==="." && !REGEX.digits.test(currChar))))) {
        closeSentance();
      }
    };

    const calcNumbers = (currentChar,prevChar,numbers,isLast,mathChars)=>{
      const removeUnneceserySeparators = (char) => {
        if(/[.,]/.test(char)) {
          numbers.current = numbers.current.slice(0,-1);
          mathChars.separators--;
        }
      };
      const closeNumber = ()=> {
        numbers.count++;
        if(!numbers.max || parseFloat(numbers.current)>parseFloat(numbers.max)) numbers.max=numbers.current;
        if(!numbers.min || parseFloat(numbers.current)<parseFloat(numbers.min)) numbers.min=numbers.current;
        numbers.current="";
      };

      if(REGEX.digits.test(currentChar)){
        if(prevChar==="-") {
          numbers.current+=prevChar;
          mathChars.minus++;
        }
        numbers.current+=currentChar;
      }
      else if(/[.,]/.test(currentChar) && numbers.current!=="") {
        numbers.current+=currentChar;
        mathChars.separators++;
      }
      else if(numbers.current!==""){
        removeUnneceserySeparators(prevChar);
        closeNumber();
      }
      if(isLast && numbers.current!=="") {
        removeUnneceserySeparators(currentChar);
        closeNumber();
      }
    };

    const calculateExtraction = (stats,currentChar,currentOpen) => {
      let index;

      if(currentChar===":") {return 1;}
      else if(extractionSingels.includes(currentChar)){
        index = currentOpen.indexOf(currentChar);
        if(index!==-1) {
          currentOpen.splice(index,1);
          return 1;
        } else {
          currentOpen.push(currentChar);
          return 0;
        }
      } else if(extractionOpeners.indexOf(currentChar)!==-1){
        currentOpen.push(currentChar);

        return 0;
      } else if(extractionClosers.indexOf(currentChar)!==-1){
        index = currentOpen.indexOf(extractionOpeners[extractionClosers.indexOf(currentChar)]);

        if(index!==-1) {
          currentOpen.splice(index,1);
          return 1;
        } else return 0;
      } else return 0;
    };

    const convertWhites= (char,t) => {
      let hex;
      if(/\s/.test(char))
        {switch (char) {
          case "\u0020":
            return t["SPACE"]+" (U+0020)";
          case "\u0009":
            return t["TAB"]+" (U+0009)";
          case "\u000D":
            return t["EOL"]+" (U+000D)";
          case "\u000A":
            return t["EOL"]+" (U+000A)";
          case "\u000C":
            return t["FORM_FEED"]+" (U+000C)";
          default:
            hex = char.codePointAt(0).toString(16);
            return t["WHITE"]+" (U+" + "0000".substring(0, 4 - hex.length) + hex +")";
          }}
        else return char;
    };

    const countFrequency = (object,propName,t) => {
      return (Object.keys(object)
          .sort((a,b)=>object[a] - object[b]))
          .map((key)=>{
           let pair = {count:object[key]};
           pair[propName]= key.length===1 ? convertWhites(key,t) : key;
           return pair;
         })
          .slice(-3);
    };

    return ()=>self.removeEventListener("message",calculate);// eslint-disable-line no-restricted-globals
};
