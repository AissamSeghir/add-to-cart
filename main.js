const plus = document.querySelectorAll('.plus')
const moins = document.querySelectorAll('.moins')
const valuepr = document.querySelectorAll('.valuepr')
const cpadd = document.getElementById('vcar')
const infoAdd = document.querySelector('table')
const iconshop = document.querySelector('#adcard')
const result = document.getElementById('result')
const dell = document.getElementsByClassName('dell')
const btnBack = document.getElementById('back')
let addCr = document.querySelectorAll('.btn')
let itmes = []
let prixCh
let qch
var valitm 
// loop for Element in html
for (let i = 0; i < plus.length; i++) {
    
    const firstpx = +valuepr[i].textContent
    // function click plus
    plus[i].addEventListener('click',()=>{
        qch = plus[i].parentElement.children[1]
        prixCh = valuepr[i]
        qch.innerHTML = `${+qch.textContent+1}`
        prixCh.innerHTML = `${firstpx*(+qch.textContent)}`
    })
    // function click moins
    moins[i].addEventListener('click',()=>{
        qch = plus[i].parentElement.children[1]
        prixCh = valuepr[i]
        if (+qch.textContent>1) {
            qch.innerHTML = `${+qch.textContent-1}`
            prixCh.innerHTML = `${+prixCh.textContent-firstpx}`
        }else{
            qch.innerHTML = `${1}`
            prixCh.innerHTML = `${firstpx}`
        }
        console.log(prixCh.textContent);
    })
    //event click to add cart
    addCr[i].addEventListener('click',()=>{
        let info = {
            name:addCr[i].parentElement.children[1].textContent,
            Capacity : addCr[i].parentElement.children[2].children[1].textContent,
            prix : valuepr[i].textContent
        }
        if (!('list' in localStorage)) {
            itmes.push(info)
            localStorage.list=JSON.stringify(itmes)
        }else{
            
            itmes= JSON.parse(localStorage.list)
            itmes.push(info)
            localStorage.list=JSON.stringify(itmes)
        }
        if (itmes.length>0) {
            infoAdd.innerHTML=`<tr><th>name</th><th>Capacity</th><th>prix</th><th>dellet</th></tr>`
            addtable()
        }
        for (let m = 0; m < dell.length; m++) {
            dell[m].addEventListener('click',()=>{
                let b =dell[m].parentElement.parentElement
                let getlocal = JSON.parse(localStorage.list)
                getlocal.splice(m,1)
                localStorage.list=JSON.stringify(getlocal)
                b.innerHTML=''
                console.log(m);
            })
        }
    })
}


  setInterval(() => {
    valitm = JSON.parse(localStorage.list).length
    if (valitm>0) {
        cpadd.innerHTML=valitm
    }else{cpadd.innerHTML=0;}
  }, 1);

iconshop.addEventListener('click',()=>{
    result.classList.remove('hide')
})
btnBack.addEventListener('click',()=>{
    result.classList.add('hide')
})

//add info addcard in table

function addtable() {
    let getlocal = JSON.parse(localStorage.list)
        for (let k = 0; k < getlocal.length; k++) {
            infoAdd.innerHTML+=`
                <tr>
                    <td>${getlocal[k].name}</td>
                    <td>${getlocal[k].Capacity}</td>
                    <td>${getlocal[k].prix}€</td>
                    <td><button class="dell" >Delet</button></td>
                </tr>
            `
            console.log(getlocal[k].name);
        }
}
addtable()


for (let m = 0; m < dell.length; m++) {
    dell[m].addEventListener('click',()=>{
        let b =dell[m].parentElement.parentElement
        let getlocal = JSON.parse(localStorage.list)
        getlocal.splice(m,1)
        localStorage.list=JSON.stringify(getlocal)
        b.innerHTML=''
        console.log(m);
    })
}
