const start = ()=>{

    const placeData = (data) =>{
        let html = data.results.map(d=>(`<li><div id='userId${d.id}>${d.first_name} ${d.last_name}</div></li>`)).join("");
        document.getElementById("main").innerHTML = html; 
    }

    fetch("http://localhost:5544/api")
    .then(resp=>resp.json())
    .then(data=>placeData(data))
};

start();