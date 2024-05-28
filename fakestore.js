let leftaside=document.getElementById('leftaside');
let rightaside=document.getElementById('rightaside');
let fetchdata=async function(){
    let res=await fetch('https://fakestoreapi.com/products');
    let data=await res.json();
    console.log(data);
    displaydata(data);
}
fetchdata()
let displaydata=function(fetcheddata){
    fetcheddata.forEach(element => {
        console.log(element);
        let subdiv=document.createElement('div');
        subdiv.setAttribute('class','subdiv');
        subdiv.innerHTML=`<img src=${element.image} alt=${element.title} height='100px' width='100px'>
        <h4>${element.title}</h4>
        <p>Price: ${element.price} &dollar;</p>`
        leftaside.appendChild(subdiv);
        subdiv.addEventListener('click',()=>{
            rightaside.innerHTML=`<article class="subarticle"><img src=${element.image} alt=${element.title} height='300px' width='250px'></article>
            <section class="subsection">
            <h2>${element.title}</h2>
            <p>${element.description}</p>
            <b>Price : ${element.price} &dollar;</b>
            <button>Add To Cart</button>
            </section>`
        }) 
        
    });
}