jQuery().ready(function() {
	
	jQuery('[data-toggle="tooltip"]').tooltip();
	
	if(jQuery("#food-menu").length){
		
		jQuery("#food-menu img").css("cursor", "pointer");
		jQuery("#food-menu").click(function(){
			jQuery('#exampleModal').modal('toggle');
			
		});		
	}
	

})