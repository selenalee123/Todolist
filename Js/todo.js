$("ul").on("click","li",function(){
$(this).toggleClass("Completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();     
    });
    event.stopPropagation;
});

//Where it says: $("input[type='text'").keypress(function(event){ 
//it should actually be: $("input[type='text']").keypress(function(event){ 


$("input[type='text']").keypress(function(event){
    if(event.which ===13){
        //grabbing new to do list from input
       var todoText = $(this).val();
       $(this).val("");
       // creat a new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span>" +todoText + "</li>")
    }
    
});

$("#toggle-form").click(function(){
    $("input[type='text']").fadeToggle()
});