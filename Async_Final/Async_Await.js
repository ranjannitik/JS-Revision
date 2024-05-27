//suppose
// const a=function nitik(){
//     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
// .then(raw=>raw.json())
// .then(read=>console.log(read.time.updated+"\n Name: "+read.chartName+"\n Rate: "+read.bpi.USD.rate_float))
// }
// console.log(a)

//data not coming   console.log(a) in main stack and waiting for result fetch in Async Queue


async function nitik(){
let a = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
a= await a.json();

console.log(a)
}
nitik();

