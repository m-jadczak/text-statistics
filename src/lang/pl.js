const translation = {
  locale: "pl",
  LangSwitch:{
    "CHANGE_LANG":"Zmień język na angielski"
  },
  Home:{
    "HEADER":"Trafne Statystyki Tekstu",
    "CONTENT_1":"Witaj na stronie aplikacji",
    "CONTENT_1E":"",
    "CONTENT_2":"Jest to narzędzie, pozwalające na szczegółową analizę tekstu online. Oprócz popularnych statystyk, takich jak: liczba znaków, czy liczba słów w tekście, TST oblicza wiele innych np. liczbę znaków interpunkcyjnych.",
    "CONTENT_3":"Poza korzystaniem z menu, po aplikacji możesz nawigować za pomocą klawiatury (strzałki ↑/↓).",
    "CONTENT_4":"Masz uwagi? Napisz na",
    "CONTENT_5":"lub kliknij w stopce moją wizytówkę.",
    "WRITE_TO":"Napisz do autora"
  },
  Navigation:{
    "HOME_LABEL":"Strona główna",
    "DATA_LABEL":"Wprowadź dane",
    "RESULTS_LABEL":"Pokaż wyniki",
    "FOOTER_LABEL":"Otwórz stronę autora"
  },
  LoadingInputData:{
    "TYPE_OR_PASTE":"Wpisz lub wklej tekst",
    "LOAD_DATA":"Wczytaj dane",
  },
  LoadingFiles:{
    "HEADER":"Załaduj z pliku tekstowego",
    "LOAD_FROM_FILE":"Załaduj z pliku",
    "*":"Edytory tekstu często po zapisaniu dokumentu dodają na jego końcu znak końca linii.",
    "TO_BIG":"Plik, który wybrałeś jest za duży. Maksymalny rozmiar pliku to 300 MB."
  },
  DisplayResults:{
    "HEADER_ERROR":"Ups... Coś poszło nie tak",
    "DESC_ERROR":"Spróbuj ponownie wczytać dane. Jeżeli problem będzie się powtarzał - napisz do mnie. Adres znajduje się w stopce. Kliknij na moje imię i nazwisko."
  },
  DataNotFound:{
    "HEADER":"Nie wprowadzono żadnych danych.",
    "ADD_DATA":"Dodaj dane do statystki w sekcji",
    "ADD_DATA_1":"",
    "DATA_LABEL":"Wprowadź dane",
  },
  StatsDisplayer:{
    "LOAD_OTHER":"Załaduj inne dane"
  },
  GeneralStats:{
    "PAR_TEMPLATE_1":"Słowem jest ciąg złożony wyłącznie z liter. Każdy znak niebędący literą traktowany jest jako separator pomiędzy słowami.",
    "PAR_TEMPLATE_2":"Systemy operacyjne używają różnych znaków końca linii np. System Windows używa w tym celu dwóch znaków (CR + LF). Aplikacja dla przejrzystości traktuje tę kombinację jako jeden znak końca linii.",
    "HEADER":"Statystyki ogólne",
    "WORDS_COUNT":"Liczba wszystkich słów",
    "CHARS_COUNT":"Liczba wszystkich znaków",
    "LETTERS_COUNT":"Liczba liter",
    "POLISH_COUNT":"Liczba polskich znaków",
    "DIGITS_COUNT":"Liczba cyfr",
    "WHITE_COUNT":"Liczba białych znaków (spacja, tabulator, znak końca linii itp.)",
  },
  Frequency:{
    "HEADER_CHARS":"Najczęściej występujące znaki",
    "HEADER_WORDS":"Najczęściej występujące słowa",
    "TH":" miejsce",
    "OCCUR":"Liczba wystąpień",
    "%":"Procentowy udział"
  },
  Punctuation:{
    "HEADER":"Interpunkcja",
    "PAR_TEMPLATE_1":"Znak wielokropka liczony jest tylko wtedy gdy w tekście występuje znak wielokropka będący osobnym znakiem (wyglądający tak …). Jeżeli w tekście występują 3 kropki (czyli ...), liczone są wówczas osobno.",
    "PAR_TEMPLATE_2":"Separator dziesiętny w liczbach (np. 0.2 albo 12,21) oraz minus przed liczbą ( np. -121) nie są znakami interpunkcyjnymi.",
    "PAR_TEMPLATE_3":"Poza dwukropkiem, interpunkcyjny znak wyodrębniający tworzy PARA znaków: znak otwierający oraz znak zamykający. Pojedyncze nawiasy, cudzysłowy, itp. nie są zliczane.",
    "PUNCTUATION_COUNT":"Liczba znaków interpunkcyjnych",
    "DIVIDERS_COUNT":"Liczba znaków oddzielających",
    "PROSODIC_COUNT":"Liczba znaków prozodycznych, emocji oraz opuszczenia",
    "EXTRACTION_COUNT":"Liczba znaków wyodrębniających"
  },
  Sentences:{
    "PAR_TEMPLATE":"Aplikacja liczy wypowiedzenia zakończone jednym ze znaków: kropką (.), wykrzyknikiem (!), znakiem zapytania (?).",
    "HEADER":"Wypowiedzenia (zdania, równoważniki zdań, wykrzyknienia i zawiadomienia)",
    "SENTENCES_COUNT":"Liczba wypowiedzeń",
    "AVERAGE":"Średnia liczba słów w wypowiedzeniu",
    "MAX":"Liczba słów w najdłuższym wypowiedzeniu",
    "MIN":"Liczba słów w najkrótszym wypowiedzeniu"
  },
  Numbers:{
    "HEADER":"Liczby w tekście",
    "NUMBERS_COUNT":"Liczb ogółem",
    "NO_NUMBERS":"Brak liczb w tekście",
    "MAX":"Największa liczba",
    "MIN":"Najmniejsza liczba",
  },
  StatsGenerator:{
    "BUTTON":"Wygeneruj statystyki",
    "SPACE":"SPACJA",
    "TAB":"TABULATOR",
    "EOL":"KONIEC LINII",
    "FORM_FEED":"PODZIAŁ STRONY",
    "WHITE":"BIAŁY ZNAK"
  }
};

export default translation;
