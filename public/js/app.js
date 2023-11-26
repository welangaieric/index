$(function(){
    const getResource = (url,temp,dispaly)=>{
            $.ajax({
                type:'GET',
                url:url,
                success:function(){
                    dispaly.html(temp)
                },
                error:function(){
                    dispaly.html(`</p>No Records</p>`)
                }
            })
    }
    $('#search_emp').on('keyup',function(){
        let phone = $(this).val()
        getResource(`http://127.0.0.1:3000/api/employees/${phone}`,temp,$('#empCard'))
    })
})