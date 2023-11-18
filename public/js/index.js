const tbtn = $('#togglebtn')
const nav =document.querySelector('header')
const control = document.querySelectorAll('.d-box')
const activeLinks = document.querySelectorAll('.links')
tbtn.on('click',()=>{
    nav.classList.toggle('active')
})
control.forEach((e)=>{
    e.addEventListener('click',(el)=>{
        el.classList.toggle('active-cont')
    })
})
activeLinks.forEach((e)=>{
    e.addEventListener('click',function(el){
       
    })
})

// animations
const elements = document.querySelectorAll('.data')
elements.forEach((e)=>e.classList.add('animate'))



// display elements
const display = document.querySelector('.wrapper')

const analytics = document.querySelector('.analytics').innerHTML
const employees = document.querySelector('.employees')
const purchases = document.querySelector('.payments').innerHTML
const profiles = document.querySelector('.profiles')
const help = document.querySelector('.help')
const expiry = document.querySelector('.expiry')
const container = document.querySelector('.container')

const customers = document.querySelector('.customers')
const inbox = document.querySelector('.inbox')

// display buttons
const analyticsBtn = document.querySelector('#analytics')
const employeesBtn = document.querySelector('#employees')
const purchasesBtn = document.querySelector('#purchases')
const profilesBtn = document.querySelector('#profiles')
const helpBtn = document.querySelector('#help')
const expiryBtn = document.querySelector('#expiry')
const customersBtn = document.querySelector('#customers')
const inboxBtn = document.querySelector('#inbox')

// display function 
const displayToDOM = function(el){
    display.innerHTML=el


}
analyticsBtn.addEventListener('click',()=>displayToDOM(analytics))
employeesBtn.addEventListener('click',()=>displayToDOM(employees))
purchasesBtn.addEventListener('click',()=>displayToDOM(purchases))
profilesBtn.addEventListener('click',()=>displayToDOM(analytics))
customersBtn.addEventListener('click',()=>displayToDOM(analytics))
helpBtn.addEventListener('click',()=>displayToDOM(analytics))
inboxBtn.addEventListener('click',()=>displayToDOM(analytics))



// ?chart

const dailybtn = document.querySelector('#daily')
const monthlybtn = document.querySelector('#monthly')
const weeklybtn = document.querySelector('#weekly')

const ctx = document.getElementById('myChart').getContext('2d');
let gradient =ctx.createLinearGradient(0,0,0,400)
gradient.addColorStop(0,'rgba(0,88,255,1)')
gradient.addColorStop(0,'rgba(0,88,255,0.3)')
let delayed;
let Display =false

dailybtn.addEventListener('click',()=>{
    
})
const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
const data = {
    labels,
    datasets:[{
        data:[212,326,165,345,763,567,123,985,235,356,933,344],
        label: "Monthly Sales",
        fill:true,
        backgroundColor:gradient,
        pointBackgroundColor:'#fff',
        tension:0.3
        // borderColor:'#555',


    }]

}
const config = {
    type:'line',
    data:data,
    options:{
        responsive:true,
        grid:{
            display:Display

        },
        animation: {
            onComplete: ()=>{
                delayed = true
            },
            delay: (context)=>{
                let delay = 0;
                if(context.type ==="data" && context.mode == "default" && !delayed){
                    delay = context.dataIndex*300 + context.datasetIndex * 100;
                }
                return delay
            }
        },
        scales:{
            y:{
                ticks:{
                    callback:function(value){
                        return '$' + value + "m"
                    }
                }
            }
        }
    }
}
const myChart = new Chart(ctx,config)



