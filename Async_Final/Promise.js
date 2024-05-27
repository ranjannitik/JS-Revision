const phone=new Promise((res,rej)=>{
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
.then(raw=>raw.json())
.then((result)=>{
    if(result.chartName==="Bitcoin")res();
    else rej();
})

})

// console.log(phone);

phone
.then(()=>console.log("Issue Correct"))
.catch(()=> console.log("Not resolved") )