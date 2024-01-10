let orderListCont =document.getElementById("user")

function appendTheFinalResult(eachOne){
console.log(eachOne)

let {product_image,product_badge,product_title
,product_variants} = eachOne

let [v1,v2,v3 ] = product_variants

 console.log(v1.v1)

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
    }

}



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
console.log(data)

getEachOneOut(data)


})