// any type
let name1:any="john";
name1=10
name1=true
name1.map((x)=> console.log(x));
name1.forEach((x)=>console.log(x));


//unknown type


//let name2:unknown="john"
//name2=10
//name2=true
//name2.map((x)=>console.log(x))
//name2.forEach((x)=>console.log(x))



//never type//kabhi bhi return nhi hoga


function greeting():never
{
    throw new Error("this is a error");
    

}

