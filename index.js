var baseUrl= "https://api.coinranking.com/v2/coins";
var proxyUrl="https://cors-anywhere.herokuapp.com/";
var apikey="coinrankinga3734b1eb2d7900a180100ddfbdeed57f14a1116a66b39f3";


fetch(`${proxyUrl}${baseUrl}`,{

    method:"Get",
    headers:{
        'Content-Type': 'application/json',
        'x-access-token':`${apikey}`,
        'Access-control-Allow-Origin':'*'
    }
}).then((response)=>{
   if(response.ok){
       response.json().then((json)=>{
            console.log(json.data.coins);

            let coinsData = json.data.coins;
            if(coinsData.length > 0){
                var cryptocoins ="";
            }
            coinsData.forEach((coins)=>{
                cryptocoins+= "<tr>";
                cryptocoins+=`<td>${coins.uuid}</td>`;
                cryptocoins+=`<td>${coins.btcPrice}</td>`;
                cryptocoins+=`<td>${coins.rank}</td>`;
                cryptocoins+=`<td>${coins.tier}</td>`;
                cryptocoins+=`<td>${coins.name}</td>`;
                cryptocoins+=`<td>${coins.price}</td>`;
                cryptocoins+=`<td>${coins.symbol}</td>`;
                cryptocoins+="</tr>"
            })
            document.getElementById("data").innerHTML= cryptocoins;
       })
   }
}).catch((error) =>{
   console.log(error);
})