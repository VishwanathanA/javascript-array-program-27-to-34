// 1.Convert array into object
var arr=['a','b','c','d','e','f'];
var obj={}
for(var i=0;i<arr.length;i++){
    obj[arr[i]]=arr[i];
}
console.log("Convert array into object : ",obj);

// 2.removing array item by index
var arr1=['a','b','c','d','e','f'];
arr1.splice(3,1);
console.log("Removing array item by index : ",arr1);

// 3.Insert item at specific position
const arr2=['a','b','c','d','e','f'];
arr2.splice(4, 0, "g");
console.log("Insert item at specific position : ",arr2.join());

//4.Sorting array with complex object
const arr3 = [
    { name: 'sam', age: 25 },
    { name: 'ajay', age: 30 },
    { name: 'bala', age: 20 },
    { name: 'Chan', age: 35 }
];
arr3.sort((a, b) => a.age - b.age);
console.log("Sorting array with complex object : ", arr3);

//.5 Longest string in an array
const arr4=["ajjay","chandru","mithun","tharan","subish","vishwa","ajju"]
let maxel=arr4[0].length;
for(var j=0;j<arr4.length;j++)
{
if(arr4[j].length>maxel)
    {
    maxel=arr4[j].length;
    var idx=j;
    }
}
console.log("Longest string in an array : ",arr4[idx]);

// 6.Rotate array
const arr5 = ["ajjay", "chandru", "mithun", "tharan", "subish", "vishwa", "ajju"];
const arr6 = [...arr5].reverse();
console.log("Rotate array : ", arr6);

//7.Generate an array of a range
function generateRange(start, end) {
    const range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}
const range = generateRange(1, 10);
console.log("Generate an array of a range : ",range);