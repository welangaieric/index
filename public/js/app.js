const dailybtn = document.querySelector('#daily')
const monthlybtn = document.querySelector('#monthly')
const weeklybtn = document.querySelector('#weekly')

    const ctx = document.getElementById('myChart').getContext('2d');
    let gradient =ctx.createLinearGradient(0,0,0,400)
    gradient.addColorStop(0,'rgba(0,88,255,1)')
    gradient.addColorStop(0,'rgba(0,88,255,0.3)')
    let delayed;
    let Display =false
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
    myChart.update()
    

// function draw(){


// }
// draw()
// const observer = new IntersectionObserver(callback)
// const target = document.querySelector('.analytics-chart')
// observer.observe(target)

// function callback(entries, observer){
//     draw()
// }