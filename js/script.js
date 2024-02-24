const a = ["Manoj", 
"Sathish12", 
1234, 
true, 
null, 
undefined,
 { a: 10, b: 20, c: 40 }, 
 function () { console.log("Hello world!") },
  [1, 2, 3]
];

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6].b);
a[7]()
console.log(a[8][1]);

console.log("---------------------------------")

const b = {
    name: "Manoj",
    class: "react",
    age: 20,
    degree: true,
    major: null,
    result: undefined,
    obj: { a: 10, b: 20, c: 40 },
    fn: function () { console.log("Hello world!") },
    ar: [1, 2, 3]
}

console.log( b.name )
console.log( b.class )
console.log( b.age )
console.log(  b.degree )
console.log(  b.major )
console.log(  b.result )
console.log(  b.obj )
console.log(  b.obj.b )
b.fn()
console.log(  b.ar)
console.log(  b.ar[1])