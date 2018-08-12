module.exports = {
  /**
   * When editing your questions pay attention to your punctuation.
   * Make sure you use question marks.
   * Make sure the first answer is the correct one.
   * Set at least ANSWER_COUNT answers, any extras will be shuffled in.
   */
  //done till 320
  QUESTIONS_EN_GB: [ 
    {
      'Which of the following statements is true?': [
        'All of these.',
        'Python is a high level programming language.',
        'Python is an interpreted language.',
        'Python is an object-oriented language.',
      ],
    },
    {
      'What is used to define a block of code (body of loop, function etc.) in Python?': [
      'Indentation',
      'Curly braces',
      'Parenthesis',
      'Quotation',
      ],
    },
    {
      'Which of the following is correct?': [
        'All',
        'Comments are for programmers for better understanding of the program.',
        'Python Interpreter ignores comment.',
        'You can write multi-line comments in Python using triple quotes.',
      ],
    },
    {
      'Which of the following is correct?': [
        'Variable name can start with an underscore.',
        'Variable name can start with a digit.',
        'Keywords cannot be used as a variable name.',
        'Variable name can have symbols like: @, #, $ etc.',
      ],
    },
    {
      'What is used to take input from the user in Python?': [
        'input()',
        'scanf()',
        'cin',
        '<>',
      ],
    },
    {
      'The statement using and operator results true if ?': [
        'both operands are true',
        'both operands are false',
        'either of the operands is true',
        'first operand is true',
      ],
    },
    {
      'Is Python case sensitive when dealing with identifiers?': [
        'yes',
        'no',
        'machine dependent',
        'none of the mentioned',
      ],
    },
    {
      'What is the maximum possible length of an identifier?': [
        'none',
        '31 characters',
        '63 characters',
        '79 characters',
      ],
    },
    {
      'Which of the following is an invalid variable?': [
        '1st_string',
        'my_string_1',
        'foo',
        '_',
      ],
    },
    {
      'Why are local variable names beginning with an underscore discouraged?': [
        'they are used to indicate a private variables of a class',
        'they confuse the interpreter',
        'they are used to indicate global variables',
        'they slow down execution',
      ],
    },
    {
      'Which of the following is not a keyword?': [
        'eval',
        'assert',
        'nonlocal',
        'pass',
      ],
    },
    {
      'All keywords in Python are in': [
        'none',
        'lower case',
        'UPPER CASE',
        'Capitalized',
      ],
    },
    {
      'Which of the following is true for variable names in Python?': [
        'unlimited length',
        'all private members must have leading and trailing underscores',
        'underscore and ampersand are the only two special characters allowed',
        'none',
      ],
    },
    {
      'Which of the following is an invalid statement?': [
        'a b c = 1000 2000 3000',
        'abc = 1,000,000',
        'a,b,c = 1000, 2000, 3000',
        'a_b_c = 1,000,000',
      ],
    },
    {
      'Which of the following cannot be a variable?': [
        'in',
        '__init__',
        'it',
        'on',
      ],
    },
    {
      'Which is the correct operator for power(xy)?': [
        'X**y',
        'X^y',
        'X^^y',
        'none',
      ],
    },
    {
      'Which one of these is floor division?': [
        '//',
        '/',
        '%',
        'none',
      ],
    },
    {
      'What is answer of this expression, 22 % 3 is?': [
        '1',
        '7',
        '5',
        '0',
      ],
    },
    {
      'Mathematical operations can be performed on a string. State whether true or false.': [
        'False',
        'True',
      ],
    },
    {
      'Operators with the same precedence are evaluated in which manner?': [
        'Left to Right',
        'Right to Left',
        'Can’t say',
        'none',
      ],
    },
    {
      'What is the output of this expression, 3*1**3?': [
        '3',
        '1',
        '27',
        '9',
      ],
    },
    {
      'Which one of the following have the same precedence?': [
        'Addition and Subtraction',
        'Multiplication and Division',
        'Both Addition and Subtraction AND Multiplication and Division',
        'none',
      ],
    },
    {
      'The expression Int(x) implies that the variable x is converted to integer. State whether true or false.': [
        'True',
        'False',
      ],
    },
    {
      'Which one of the following have the highest precedence in the expression?': [
        'Parentheses',
        'Exponential',
        'Addition',
        'Multiplication',
      ],
    },
    {
      'Which of these in not a core data type?': [
        'Class',
        'Lists',
        'Dictionary',
        'Tuples',
      ],
    }, //done till this line
    {
      'Given a function that does not return any value, What value is thrown by default when executed in shell.': [
        'none',
        'int',
        'bool',
        'void',
      ],
    },
    {
      'Which of the following will run without errors ?': [
        'round(45.8)',
        'round(6352.898,2,5)',
        'round()',
        'round(7463.123,2,1)',
      ],
    },
    {
      'What is the return type of function id ?': [
        'int',
        'float',
        'bool',
        'dict',
      ],
    },
    {
      'What error occurs when you execute? apple = mango': [
        'NameError',
        'SyntaxError',
        'ValueError',
        'TypeError',
      ],
    },
    {
      'In order to store values in terms of key and value we use what core data type.': [
        'dictionary',
        'list',
        'tuple',
        'class',
      ],
    },
  ],
  QUESTIONS_EN_US: [
    {
      'What is the return value of trunc() ?': [
        'int',
        'bool',
        'float',
        'None',
      ],
    },
    {
      'What is the output of print 0.1 + 0.2 == 0.3?': [
        'False',
        'True',
        'Machine dependent',
        'Error',
      ],
    },
    {
      'Which of the following is not a complex number?': [
        'k = 2 + 3l',
        'k = complex(2, 3)',
        'k = 2 + 3j',
        'k = 2 + 3J',
      ],
    },
    {
      'What is the type of inf?': [
        'Float',
        'Boolean',
        'Integer',
        'Complex',
      ],
    },
    {
      'What does ~4 evaluate to?': [
        '-5',
        '-4',
        '-3',
        '+3',
      ],
    },
    {
      'Which of the following is incorrect?': [
        'x = 03964',
        'x = 0b101',
        'x = 0x4f5',
        'x = 19023',
      ],
    },
    {
      'What is the result of cmp(3, 1)?': [
        '1',
        '0',
        'True',
        'False',
      ],
    },
    {
      'What is the result of round(0.5) – round(-0.5)?': [
        '2.0',
        '1.0',
        '0.0',
        'None',
      ],
    },
    {
      'What does 3 ^ 4 evaluate to?': [
        '7',
        '81',
        '12',
        '0.75',
      ],
    },
    { //upto this line
      'Santa\'s reindeer named Donner was originally named what?': [
        'Dunder',
        'Donny',
        'Dweedle',
        'Dreamy',
      ],
    },
    {
      'Who invented the story of Rudolph?': [
        'Robert May',
        'Johnny Marks',
        'Santa',
        'J K  Rowling',
      ],
    },
    {
      'In what location will you not find reindeer?': [
        'North Pole',
        'Lapland',
        'Korvatunturi mountain',
        'Finland',
      ],
    },
    {
      'What Makes Santa\'s Reindeer Fly?': [
        'Magical Reindeer Dust',
        'Fusion',
        'Amanita muscaria',
        'Elves',
      ],
    },
    {
      'Including Rudolph, how many reindeer hooves are there?': [
        '36',
        '24',
        '16',
        '8',
      ],
    },
    {
      'Santa only has one female reindeer, Which one is it?': [
        'Vixen',
        'Clarice',
        'Cupid',
        'Cupid',
      ],
    },
    {
      'In the 1964 classic Rudolph The Red Nosed Reindeer, what was the snowman narrators name?': [
        'Sam',
        'Frosty',
        'Burl',
        'Snowy',
      ],
    },
    {
      'What was Rudolph\'s father\'s name?': [
        'Donner',
        'Dasher',
        'Blixen',
        'Comet',
      ],
    },
    {
      'In the 1964 movie, What was the name of the coach of the Reindeer Games?': [
        'Comet',
        'Blixen',
        'Donner',
        'Dasher',
      ],
    },
    {
      'In the 1964 movie, what is the name of the deer that Rudolph befriends at the reindeer games?': [
        'Fireball',
        'Clarice',
        'Jumper',
        'Vixen',
      ],
    },
    {
      'In the 1964 movie, How did Donner, Rudolph\'s father, try to hide Rudolph\'s nose?': [
        'Black mud',
        'Bag',
        'Pillow case',
        'Sock',
      ],
    },
    {
      'In the 1964 movie, what does the Misfit Elf want to be instead of a Santa Elf?': [
        'Dentist',
        'Reindeer',
        'Toy maker',
        'Candlestick maker',
      ],
    },
    {
      'In the 1964 movie,what was the Bumble\'s one weakness?': [
        'Could not swim',
        'Always hungry',
        'Candy canes',
        'Cross eyed',
      ],
    },
    {
      'In the 1964 movie, what is Yukon Cornelius really in search of?': [
        'Peppermint',
        'Gold',
        'India',
        'Polar Bears',
      ],
    },
    {
      'In the 1964 movie, why is the train on the Island of Misfit Toys?': [
        'Square wheels',
        'No Engine',
        'Paint does not match',
        'It does not toot',
      ],
    },
    {
      'In the 1964 movie, what is the name of the Jack in the Box?': [
        'Charlie',
        'Sam',
        'Billy',
        'Jack',
      ],
    },
    {
      'In the 1964 movie, why did Santa Claus almost cancel Christmas?': [
        'Storm',
        'No snow',
        'No toys',
        'The Reindeer were sick',
      ],
    },
    {
      'In the 1964 movie, what animal noise did the elf make to distract the Bumble?': [
        'Oink',
        'Growl',
        'Bark',
        'Meow',
      ],
    },
    {
      'In the 1964 movie, what is the name of the prospector?': [
        'Yukon Cornelius',
        'Slider Sam',
        'Bumble',
        'Jack',
      ],
    },
    {
      'How far do reindeer travel when they migrate?': [
        '3000 miles',
        '700 miles',
        '500 miles',
        '0 miles',
      ],
    },
    {
      'How fast can a reindeer run?': [
        '48 miles per hour',
        '17 miles per hour',
        '19 miles per hour',
        '14 miles per hour',
        '52 miles per hour',
        '41 miles per hour',
      ],
    },
  ],
  QUESTIONS_DE_DE: [
    {
      'Rentiere haben ein sehr dickes Fell, Wie viele Haare pro Quadratzentimeter haben sie?': [
        '13,000',
        '1,200',
        '5,000',
        '700',
        '1,000',
        '120,000',
      ],
    },
    {
      'Der Klassiker aus dem Jahr 1964, Rudolph mit der roten Nase, wurde gedreht in? ': [
        'Japan',
        'USA',
        'Finnland',
        'Deutschland',
        'Kanada',
        'Norwegen',
        'Frankreich',
      ],
    },
    {
      'Um die Rentiere des Weihnachtsmanns kümmert sich eine der Weihnachtselfen, Wie heißt sie?': [
        'Wunorse Openslae',
        'Alabaster Snowball',
        'Bushy Evergreen',
        'Pfeffer Minstix',
      ],
    },
    {
      'Wenn alle Rentiere des Weihnachtsmanns Geweihe hätten, während sie seinen Weihnachtsschlitten ziehen, wären sie alle ': [
        'Weiblich',
        'Männlich',
        'Weiblich und männlich',
        'Kann man nicht sagen',
      ],
    },
    {
      'Was essen Rentiere?': [
        'Flechten',
        'Gras',
        'Blätter',
        'Beeren',
      ],
    },
    {
      'Welche Aussage ist nicht richtig?': [
        'Karibus leben auf allen Kontinenten',
        'Karibus und Rentiere gehören derselben Gattung an ',
        'Karibus sind größer als Rentiere',
        'Rentiere leben in Skandinavien und Russland',
      ],
    },
    {
      'In welchem Jahr kam Rudolph ins Fernsehen?': [
        '1964',
        '1979',
        '2000',
        '1956',
      ],
    },
    {
      'Wer war der Sprecher für Rudolph im klassischen Film aus dem Jahr 1964?': [
        'Billie Mae Richards',
        'Burl Ives',
        'Paul Soles',
        'Lady Gaga',
      ],
    },
    {
      'Welche Handelskette verwendete 1939 die Geschichte von Rudolph mit der roten Nase?': [
        'Montgomery Ward',
        'Sears',
        'Macys',
        'Kmart',
      ],
    },
    {
      'Wie hieß das Rentier des Weihnachtsmanns namens Donner ursprünglich?': [
        'Dunder',
        'Donny',
        'Dweedle',
        'Dreamy',
      ],
    },
    {
      'Wer hat die Geschichte von Rudolph erfunden?': [
        'Robert May',
        'Johnny Marks',
        'Santa',
        'J K  Rowling',
      ],
    },
    {
      'Wo findest du keine Rentiere?': [
        'Nordpol',
        'Lappland',
        'Korvatunturi Berge',
        'Finnland',
      ],
    },
    {
      'Warum können die Rentiere des Weihnachtsmanns fliegen?': [
        'Magischer Staub der Rentiere',
        'Fusion',
        'Amanita muscaria',
        'Elfen',
      ],
    },
    {
      'Wieviele Rentierhufe gibt es hier einschließlich Rudolph?': [
        '36',
        '24',
        '16',
        '8',
      ],
    },
    {
      'Der Weihnachtsmann hat nur ein weibliches Rentier, Wie heißt es?': [
        'Blitzen',
        'Clarice',
        'Cupid',
        'Cupid',
      ],
    },
    {
      'Wie war der Name des erzählenden Schneemanns im klassischen Film Rudolph mit der roten Nase aus dem Jahr 1964?': [
        'Sam',
        'Frosty',
        'Burl',
        'Snowy',
      ],
    },
    {
      'Wie hieß der Vater von Rudolph?': [
        'Donner',
        'Dasher',
        'Blixen',
        'Comet',
      ],
    },
    {
      'Wie war der Name des Trainers der Rentierspiele im klassischen Film aus dem Jahr 1964?': [
        'Comet',
        'Blixen',
        'Donner',
        'Dasher',
      ],
    },
    {
      'Wie war im klassichen Film aus 1964 der Name des Hirsches, mit dem sich Rudolph befreundete?': [
        'Fireball',
        'Clarice',
        'Jumper',
        'Vixen',
      ],
    },
    {
      'Wie hat der Vater von Rudolph, Donner, im Film aus dem Jahr 1964 versucht, die Nase von Rudolph zu verbergen?': [
        'Schwarzer Schlamm',
        'Sack',
        'Kissenbezug',
        'Socke',
      ],
    },
    {
      'Was möchte die Misfit Elfe im Film aus dem Jahr 1964 werden anstatt eine Elfe für den Weihnachtsmann?': [
        'Zahnarzt',
        'Rentier',
        'Spielzeugmacher',
        'Kerzenmacher',
      ],
    },
    {
      'Was war die einzige Schwäche von Bumble im Film aus dem Jahr 1964?': [
        'Konnte nicht schwimmen',
        'War immer hungrig',
        'Zuckerstangen',
        'Schielte',
      ],
    },
    {
      'Was sucht Yukon Cornelius in Wirklichkeit im Film aus dem Jahr 1964?': [
        'Pfefferminz',
        'Gold',
        'Indien',
        'Polarbären',
      ],
    },
    {
      'Warum befindet sich der Zug im Film aus dem Jahr 1964 auf der Insel des fehlerhaften Spielzeugs?': [
        'Viereckige Räder',
        'Keine Dampfmaschine',
        'Farbe stimmt nicht',
        'Pfeift nicht',
      ],
    },
    {
      'Wie lautet der Name des Schachtelmännchens im Film aus dem Jahr 1964?': [
        'Charlie',
        'Sam',
        'Billy',
        'Jack',
      ],
    },
    {
      'Warum hat der Weihnachtsmann im Film aus dem Jahr 1964 Weihnachten beinahe abgesagt?': [
        'Sturm',
        'Kein Schnee',
        'Kein Spielzeug',
        'Die Rentiere waren krank',
      ],
    },
    {
      'Welches tierische Geräusch machte die Elfe im Film aus dem Jahr 1964, um den Bumble abzulenken?': [
        'Oink',
        'Knurr',
        'Wauwau',
        'Miau',
      ],
    },
    {
      'Wie lautet der Name des Goldsuchers im Film aus dem Jahr 1964?': [
        'Yukon Cornelius',
        'Slider Sam',
        'Bumble',
        'Jack',
      ],
    },
    {
      'Wie weit ziehen Rentiere auf ihren Wanderungen?': [
        '4800 km',
        '1100 km',
        '800 km',
        '0 km',
      ],
    },
    {
      'Wie schnell läuft ein Rentier?': [
        '77 km pro Stunde',
        '27 km pro Stunde',
        '30 km pro Stunde',
        '22 km pro Stunde',
        '83 km pro Stunde',
        '65 km pro Stunde',
      ],
    },
  ],
};
