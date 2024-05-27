fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
.then(raw=>raw.json())
.then(read=>console.log(read.time.updated+"\n Name: "+read.chartName+"\n Rate: "+read.bpi.USD.rate_float))