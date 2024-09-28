function fibonacci(n)
{
    let fibSequence=[0,1];
    while(fibSequence[fibSequence.length-1]<n)
    {
        fibSequence.push(fibSequence[fibSequence.length-1]+fibSequence[fibSequence.length-2]);
    }
    if(fibSequence[fibSequence.length-1]===n)
    {
        return fibSequence.length;
    }
    else
    {
        return-1;
    }
}
let n=13;
let position=fibonacci(n);
if(position!==-1)
{
    console.log('The position of ${n} in the fibonacci sequence is ${position}');
}
else
{
    console.log('${n} is not a fibonacci number');
}