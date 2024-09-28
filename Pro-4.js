var string="My name is Mohana Priya";
var reverseallstrings=reverseword(string,"");
console.log(reverseallstrings);
var output=reverseword(reverseallstrings,"");
console.log(output);
function reverseword(string,separator)
{
    return string.split(separator).reverse().join(separator);
}