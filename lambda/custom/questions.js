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
    { 
      'The one’s complement of 110010101 is' : [
        '001101010',
        '110010101',
        '001101011',
        '110010100',
      ],
    },
    {
      'What is the type of each element in sys.argv?' : [
        'string',
        'set',
        'list',
        'tuple',
      ],
    },
    {
      'What is the length of sys.argv?' : [
        'number of arguments + 1',
        'number of arguments',
        'number of arguments – 1',
        'none',
      ],
    },
    {
      'How are keyword arguments specified in the function heading?' : [
        'two stars followed by a valid identifier',
        'one star followed by a valid identifier',
        'one underscore followed by a valid identifier',
        'two underscores followed by a valid identifier',
      ],
    },
    {
      'How many keyword arguments can be passed to a function in a single function call?' : [
        'zero or more',
        'zero',
        'one',
        'one or more',
      ],
    },
    {
      'Which of the following is the use of function in python?' : [
        'Functions are reusable pieces of programs',
        'Functions don’t provide better modularity for your application',
        'you can’t also create your own functions',
        'All of the mentioned',
      ],
    },
    {
      'Which keyword is use for function?' : [
        'def',
        'Fun',
        'Define',
        'Function',
      ],
    },
    {
      'Which of these about a set is not true?' : [
        'Immutable data type',
        'Mutable data type',
        'Allows duplicate values',
        'Data type with unordered values',
      ],
    },
    {
      'Which of the following functions is a built-in function in python?' :  [
        'print()',
        'seed()',
        'sqrt()',
        'factorial()',
      ],
    },
    {
      'Which is the most appropriate definition for recursion?' : [
        'A function execution instance that calls another execution instance of the same function',
        'A function that calls itself',
        'A class method that calls another class method',
        'An in-built method that is automatically called',
      ],
    },
    {
      'Only problems that are recursively defined can be solved using recursion. True or False?' : [
        'False',
        'True',
      ],
    },
    {
      'Which of these is false about recursion?' : [
        'Recursive functions run faster than non-recursive function',
        'Recursive function can be replaced by a non-recursive function',
        'Recursive functions usually take more memory space than non-recursive function',
        'Recursion makes programs easier to understand',
      ],
    },
    {
      'What is tail recursion?' : [
        'A function where the recursive call is the last thing executed by the function',
        'A recursive function that has two base cases',
        'A function where the recursive functions leads to an infinite loop',
        'A recursive function where the function doesn’t return anything and just prints the values',
      ],
    },
    {
      'Which of the following statements is false about recursion?' : [
        'Every recursive function must have a return value',
        'Every recursive function must have a base case',
        'Infinite recursion can occur if the base case isn’t properly mentioned',
        'A recursive function makes the code easier to understand',
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
      'What happens if the base condition isn’t defined in recursive programs?' : [
        'Program gets into an infinite loop',
        'Program runs once',
        'Program runs n number of times where n is the argument given to the function',
        'An exception is thrown',
      ],
    },
    {
      'Which of these is not true about recursion?' : [
        'Recursive calls take up less memory',
        'Making the code look clean',
        'A complex task can be broken into sub-problems',
        'Sequence generation is easier than a nested iteration',
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
      'Which of these is not true about recursion?' : [
        'Recursive functions are easy to debug',
        'The logic behind recursion may be hard to follow',
        'Recursive calls take up a lot of memory',
        'Programs using recursion take longer time than their non-recursive equivalent',
      ],
    },
    {
      'The function of re.match is' : [
        'Matches a pattern at the start of the string',
        'Error',
        'Matches a pattern anywhere in the string',
        'Matches a pattern at the end of the string',
      ],
    },
    {
      'Which of these definitions correctly describes a module?' : [
        'Design and implementation of specific functionality to be incorporated into a program',
        'Denoted by triple quotes for providing the specification of certain program elements',
        'Defines the specification of how it is to be used',
        'Any program that reuses code',
      ],
    },
  ],
};
