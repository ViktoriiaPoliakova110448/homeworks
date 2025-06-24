var items = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];
var reg = /\b[^aA]{6,}\b/;
var result = [];

for (var i = 0; i < items.length; i++) {
    if (reg.test(items[i])) {
        result.push(items[i]);
    }
}

console.log(result); 