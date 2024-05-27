function answer(url,callback){
    fetch(url)
.then(raw=>raw.json())
.then((res)=>callback(res))
}

answer(`https://api.coindesk.com/v1/bpi/currentprice.json`,function(res){
    console.log(res.time.updated+"\n Name: "+res.chartName+"\n Rate: "+res.bpi.USD.rate_float)
})