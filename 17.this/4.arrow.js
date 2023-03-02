// Java Script Function is
// used function, constructor function(class)
// but, a prototype is created.
const dog = {
  name: 'Dog',
  play: function () {
    // 💩
    console.log('play!'); // play!
  },
};
dog.play();
const obj = new dog.play(); // 💩 play!
console.log(obj); // play {}

const cat = {
  name: 'cat',
  play() {
    // Object Method
    console.log('meow'); // TypeError: cat.play is not a constructor
    // Cannot be used as a constructor function.
  },
};
cat.play();
// const obj1 = new cat.play();

function sum(a, b) {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
}
sum(1, 2);

const add = (a, b) => {
  console.log(arguments);
  /*
  [Arguments] {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: '/Users/suhakim/studyingJavaScript/17.this',
      exports: {},
      filename: '/Users/suhakim/studyingJavaScript/17.this/4.arrow.js',
      loaded: false,
      children: [],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      '/Users/suhakim/studyingJavaScript/17.this/4.arrow.js': [Module]
    }
  },
  '2': Module {
    id: '.',
    path: '/Users/suhakim/studyingJavaScript/17.this',
    exports: {},
    filename: '/Users/suhakim/studyingJavaScript/17.this/4.arrow.js',
    loaded: false,
    children: [],
    paths: [
      '/Users/suhakim/studyingJavaScript/17.this/node_modules',
      '/Users/suhakim/studyingJavaScript/node_modules',
      '/Users/suhakim/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  '3': '/Users/suhakim/studyingJavaScript/17.this/4.arrow.js',
  '4': '/Users/suhakim/studyingJavaScript/17.this'
}
  */
};
add(1, 2);

const printArrow = () => {
  console.log(this); // {}
};
printArrow();
cat.printArrow = printArrow;
