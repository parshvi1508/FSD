const array=[
    {
        firstName:"ABC",
        lastname:"sharma",
        age:25,
        city:"New York",
    },
    {
        firstNmae:"ABC2",
        lastname:"sharma2",
        age:18,
        city:"gzb",
    },
    {
        firstNmae:"ABC3",
        lastname:"sharma3",
        age:10,
        city:"delhi",
    },
];
let elder=array.filter((item)=>{
    if(item.age>18)
        return true;
});
console.log("results",elder);