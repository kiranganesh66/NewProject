let inputElement =document.getElementById("inputEle")
let orderListCont =document.getElementById("user")

let userInput = ""
let searchList = []


//function started for the main page 
function appendTheFinalResult(eachOne){

let {product_image,product_badge,product_title
,product_variants} = eachOne

let [v1,v2,v3 ] = product_variants


let list = document.createElement("li")
list.classList.add("name")
orderListCont.appendChild(list)


let divCreation = document.createElement("div")
divCreation.classList.add("subContPrd")
list.appendChild(divCreation)


let imgCont = document.createElement("div")
imgCont.classList.add("subContImg")
divCreation.appendChild(imgCont)


let newBox = document.createElement("button")
newBox.textContent=product_badge
newBox.classList.add("newBoxcss")
imgCont.appendChild(newBox)


let capImage = document.createElement("img")
capImage.src=product_image
capImage.alt="image"
capImage.classList.add("capImg")
imgCont.appendChild(capImage)



let namePrdouct = document.createElement("h1")
namePrdouct.textContent=product_title
namePrdouct.classList.add("prductNameSps")
divCreation.appendChild(namePrdouct)


let prdouctSp1 = document.createElement("h4")
prdouctSp1.textContent=v1.v1
prdouctSp1.classList.add("prductName")
namePrdouct.appendChild(prdouctSp1)

let prdouctSp2 = document.createElement("h4")
prdouctSp2.textContent=v2.v2
prdouctSp2.classList.add("prductName")
namePrdouct.appendChild(prdouctSp2)


let prdouctSp3 = document.createElement("h4")
prdouctSp3.textContent=v3.v3
prdouctSp3.classList.add("prductName")
namePrdouct.appendChild(prdouctSp3)
}


function getEachOneOut(data){
    for (let eachOne of data){
        appendTheFinalResult(eachOne)
        searchList.push(eachOne)
    }
}

function getSearchItems(userInput){
    orderListCont.textContent=""

    for(let getSearchItm of searchList){
 let brandName = getSearchItm.product_title
if (brandName.includes(userInput) ){
    appendTheFinalResult(getSearchItm)
}
 }  }



/// Start from here:--- API calling 

let url ="https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093"
let options={
method:"GET"
}

fetch(url,options)

.then( function(response) {
return response.json()
})

.then(function(jsonData){
let {data} = jsonData
getEachOneOut(data)
})
    
//End API .......

function getEachresult(event){
    userInput=event.target.value
    getSearchItems(userInput)
}

inputElement.addEventListener("keyup", getEachresult)