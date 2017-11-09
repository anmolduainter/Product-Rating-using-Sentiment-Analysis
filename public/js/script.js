
let button;

$(function(){

    button=$('.butt');


    button.click(function(){

        let parent=$(this).parent().attr('id');
        console.log(parent);

    })

});