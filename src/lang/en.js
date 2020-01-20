const translation = {
  locale: "en",
  LangSwitch:{
    "CHANGE_LANG":"Change language to polish"
  },
  Home:{
    "HEADER":"Accurate Text Statistics",
    "CONTENT_1":"Welcome to the",
    "CONTENT_1E":" online app",
    "CONTENT_2":"It is a tool that allows detailed online text analysis. In addition to popular statistics such as the character count or the word count TST calculates many others, e.g. the punctuation character count.",
    "CONTENT_3":"You can use the menu or keyboard (arrows ↑/↓) to navigate the page.",
    "CONTENT_4":"If you have any comments or suggestions write to",
    "CONTENT_5":"or click my business card in the footer.",
    "WRITE_TO":"Contact author"
  },
  Navigation:{
    "HOME_LABEL":"Home",
    "DATA_LABEL":"Enter data",
    "RESULTS_LABEL":"Show results",
    "FOOTER_LABEL":"Visit my website"
  },
  LoadingInputData:{
    "TYPE_OR_PASTE":"Type or paste the text",
    "LOAD_DATA":"Load data",
  },
  LoadingFiles:{
    "HEADER":"Load data from a text file",
    "LOAD_FROM_FILE":"Select a file",
    "*":"Text editors often add a line break to the end of the document after saving.",
    "TO_BIG":"The file you selected is too large. The maximum file size is 300 MB."
  },
  DisplayResults:{
    "HEADER_ERROR":"Oops ... something went wrong",
    "DESC_ERROR":"Try loading the data again. If the problem persists - write to me. Click on my business card in the footer."
  },
  DataNotFound:{
    "HEADER":"No data entered.",
    "ADD_DATA":"Add data to the statistics in the",
    "ADD_DATA_1":" section",
    "DATA_LABEL":"Enter data",
  },
  StatsDisplayer:{
    "LOAD_OTHER":"Load other data"
  },
  GeneralStats:{
    "PAR_TEMPLATE_1":"The word is a string consisting only of letters. Each non-letter character is treated as a separator between words.",
    "PAR_TEMPLATE_2":"Operating systems use different end-of-line characters, eg Windows uses two characters (CR + LF) for this purpose. The application treats this combination as one end-of-line character for transparency.",
    "HEADER":"General statistics",
    "WORDS_COUNT":"Word count",
    "CHARS_COUNT":"Characters count",
    "LETTERS_COUNT":"Letter count",
    "POLISH_COUNT":"Polish letter count",
    "DIGITS_COUNT":"Digit count",
    "WHITE_COUNT":"Whitespace count (space, tab, eol etc.)"
  },
  Frequency:{
    "HEADER_CHARS":"The most common characters",
    "HEADER_WORDS":"The most common words",
    "TH":"th",
    "OCCUR":"Occurrence count",
    "%":"Percentage share"
  },
  Punctuation:{
    "HEADER":"Punctuation",
    "PAR_TEMPLATE_1":"The ellipsis character is counted only if the text contains an ellipsis character which is a separate character (looking like this ...). If there are 3 dots in the text (i.e. ...), they are counted separately.",
    "PAR_TEMPLATE_2":"The decimal separator in numbers (e.g. 0.2 or 12.21) and minus before the number (e.g. -121) are not punctuation marks.",
    "PAR_TEMPLATE_3":"In addition to the colon, the punctuation extraction character creates a PAIR of characters: the opening character and the closing character. Individual brackets, quotation marks, etc. are not counted.",
    "PUNCTUATION_COUNT":"Punctuation mark count",
    "DIVIDERS_COUNT":"Separator character count (period, semicolon, comma)",
    "PROSODIC_COUNT":"Prosodic, emotion and abandonment sign count (exclamation point, ellipses, dash, question mark)",
    "EXTRACTION_COUNT":"Extraction character count"
  },
  Sentences:{
    "PAR_TEMPLATE": "The application counts sentences ended with one of the characters: period (.), Exclamation mark (!), Question mark (?).",
    "HEADER": "Sentences",
    "SENTENCES_COUNT": "Sentence count",
    "AVERAGE": "Average words in a sentence",
    "MAX": "Word count in the longest sentence",
    "MIN": "Word count in the shortest sentence"
  },
  Numbers:{
    "HEADER": "Numbers in text",
    "NUMBERS_COUNT": "Total numbers",
    "NO_NUMBERS": "No numbers in the text",
    "MAX": "Largest number",
    "MIN": "Smallest number",
  },
  StatsGenerator:{
    "BUTTON":"Generate statistics",
    "SPACE":"SPACE",
    "TAB":"TAB",
    "EOL":"EOL",
    "FORM_FEED":"FORM FEED",
    "WHITE":"WHITESPACE"
  },
};

export default translation;
