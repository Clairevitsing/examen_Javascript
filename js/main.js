let zone1 = document.querySelector(".zone1");
let zone2 = document.querySelector(".zone2");
let zone1Nom = document.querySelector(".nom");
let zone1Cat = document.querySelector(".categorie");
let zone1Prix = document.querySelector(".prix");
let zoneInfos = document.querySelector(".infos"); 
let contenuInfos = document.querySelector(".contenuInfos"); 

let elements = [
    {image:"./img/animal1.jpg" , nom:"Paon" , categorie:"animaux" , prix:200},
    {image:"./img/animal2.jpg" , nom:"Loup" , categorie:"animaux" , prix:200},
    {image:"./img/animal3.jpg" , nom:"Renard" , categorie:"animaux" , prix:200},
    {image:"./img/animal4.jpg" , nom:"Rhinocéros" , categorie:"animaux" , prix:200},
    {image:"./img/paysage1.jpg" , nom:"Forêt" , categorie:"paysages" , prix:100},
    {image:"./img/paysage2.jpg" , nom:"Montagne" , categorie:"paysages" , prix:100},
    {image:"./img/paysage3.jpg" , nom:"Vallée" , categorie:"paysages" , prix:100},
    {image:"./img/paysage4.jpg" , nom:"Plage" , categorie:"paysages" , prix:100},
    {image:"./img/personne1.jpg" , nom:"Femme avec fleurs" , categorie:"personnes" , prix:300},
    {image:"./img/personne2.jpg" , nom:"Femme" , categorie:"personnes" , prix:300},
    {image:"./img/personne3.jpg" , nom:"Garçon" , categorie:"personnes" , prix:300},
    {image:"./img/personne4.jpg" , nom:"Couple" , categorie:"personnes" , prix:300},
]

function majGalerie(askedCat){
    let vignettes = document.querySelectorAll(".vignette");
    vignettes.forEach( (e) => {
        e.remove();
    })
    
    if (askedCat==""){          
        var elementsFiltres = elements;
        console.log("ok");
    }else{                      
        var elementsFiltres = elements.filter(
            (item) => {
                return item.categorie == askedCat;      
            }
            );
        }
  
        changeZone1(elementsFiltres[0]);
        
    elementsFiltres.forEach(
        (element,i) => {
            let addElement = document.createElement("figure");        
            let addImage = document.createElement("figcaption");    
            let addTitre = document.createElement("figcapture");  
            addImage.innerHTML = ` <img src="${element.image}"></img>`  
            addTitre.innerHTML = `<h3>${element.nom}</h3>`              
            addElement.className = "vignette";          
            addElement.id = `v${i}`;                   
            
           
            addElement.onmouseover = (e) => {     
                addElement.style.boxShadow = "0 0 15px rgba(128,0,128,0.7)";
                addElement.style.transform = "scale(1.08)";
            }
            addElement.onmouseout = (e) => {       
                addElement.style.boxShadow = "0 0 8px rgba(0,0,0,0.3)";
                addElement.style.transform = "scale(1)";
            }
            addElement.onclick = (e) => {changeZone1(element);};     
            
            addElement.appendChild(addImage);       
            addElement.appendChild(addTitre);      
            zone2.appendChild(addElement);     
        }
    )
}

function changeZone1(e){
    zone1.style.background = `url(${e.image}) center/cover no-repeat`;
    zone1Nom.innerHTML = `${e.nom}`;
    zone1Cat.innerHTML = `${e.categorie}`;
    zone1Prix.innerHTML = `${e.prix} €`;
    
zone1.onmouseover = resetInfos;  
zone1.onmouseout = putInfos; 
}

function resetInfos(){
    contenuInfos.style.display = "none";    
    zoneInfos.style.width = "auto";        
    zoneInfos.style.padding = "10px";      
    
    let addFleche = document.createElement("span"); 
    addFleche.style.fontSize = "8rem";
    addFleche.style.color = "white";
    addFleche.innerHTML = `&lt;`;
    addFleche.fontWeight = "bold";
    
    zoneInfos.appendChild(addFleche);
}
function putInfos(){
    let fleche = zoneInfos.querySelector("span");
    fleche.remove();        
    contenuInfos.style.display = "flex";   
    zoneInfos.style.width = "30%";         
    zoneInfos.style.padding = "50px";      
}

majGalerie("");

onload = () => { document.querySelector("#filtre").value = "" };