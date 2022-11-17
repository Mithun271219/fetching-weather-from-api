let main =document.createElement('main')

let res=fetch('https://restcountries.com/v2/all').then(data=>{return data.json()})
.then((data1)=>{
    for (var i in data1){
        let cc=data1[i].name;
        let div=document.createElement('div')
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=31eaa08be873f89f89b6be82dd27c09f`)
        .then((dat2)=>{return dat2.json()})
        .then((data3)=>{
            let temp=data3.main.temp-273.1
            disp=`Country: ${cc} and the Temperature: ${temp.toFixed(3)} °C`
            div.innerHTML+=disp
            main.append(div)
        })
    }
})  

document.body.append(main)