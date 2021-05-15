Question 5
Assume there is a object of this format 
var obj = {
 “id” : 4, “name” : “abc”,
 “id” : 10, “name” : “ab2”,
 “id” : 5, “name” : “abc3”,
 “id” : 6, “name” : “abc5”
}
It can be a dictionary or java object, as per your language of choice. But its key/value pair dictionary simply.

Write a code to sort the object by id 
I.e final output should have objected sort by id’s.


Solution:-

var obj = [
	{ "id": 4, "name": "abc"},
  {"id": 10,"name": "abc2"},
  {"id": 5,"name": "abc3"},
  {"id": 6,"name": "abc5"},
];

obj.sort(function(a, b) {
  return (a.id - b.id) || a.name.localcompare(b.name);
});

console.log(obj);
