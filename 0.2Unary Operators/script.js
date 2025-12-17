let a = 5;
let b = 2;

console.log("a:",a, "; & b:", b)
{
    let a = 5;
    let b = 2;
    a++;
    console.log("post increment", a)
}
// ----------------------

{
    let a = 5;
    let b = 2;
    a--;
    console.log("post decrement", a)
}
// ------------------

console.log("pre Unary Operators ==================")
{
    let a = 5;
    let b = 2;
    console.log("pehlay value chhange karunga  ++a =", ++a)
}
// =====================
{
    let a = 5;
    let b = 2;
    console.log("pehlay value chhange karunga  --a", --a)
}
// ======================
console.log("------------ yah per bad mai value change huta hy -----------------")
{
    let a = 5;
    let b = 2;
    console.log("bad mai value change   a++", a++)
    console.log("yah hogya value change ",a)
}
{
    let a = 5;
    let b = 2;
    console.log("ma bad mai value change karunga a--", a--)
    console.log("yah lo hpgya change value a--", a--)
}