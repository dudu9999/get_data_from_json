
var Show = () => {
    let pageURL = 'http://localhost:3004/jsonData.json';
    fetch(pageURL)
    .then(resp=> resp.json())
    .then(resp=>{
        resp.forEach(user => {
            let data="";
            let i;
            for(i=0; i< resp.length; i++){
                data += resp[i].id + " " + resp[i].name + " " + resp[i].lastName + "<br />";
                let div = document.getElementById("getJSON");
                div.innerHTML = data;
            }
        });
    })
}