// check off specific todos by clicking
$("ul").on("click", "li", function(){
	/*//if li is gray
	if ($(this).css("color") === "rgb(128, 128, 128)") {
		//turn it blck 
		$(this).css({
		color:"black",
		textDecoration:"none"
	});
	}
	else{
		//turn it gray
		$(this).css({
		color:"gray",
		textDecoration:"line-through"
	});
	}
	*/
	$(this).toggleClass("completed");
});


//Click on X to delete Todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Add new item to todo list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>")
	}	
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

