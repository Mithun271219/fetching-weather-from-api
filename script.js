//let cnumber=prompt('enter the country number')
let res=fetch('https://restcountries.com/v2/all').then(data=>{return data.json()})
.then((data1)=>{
    for (var i in data1){
        let cc=data1[i].name;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=ad5d0074b3b3b64e13c15d32311cf1da`)
        .then((dat2)=>{return dat2.json()})
        .then((data3)=>{
            console.log(`Country: ${cc} Temperature: ${data3.main.temp}`)
        })
    }
})  