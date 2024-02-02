jQuery(function ($){
	$('.filter-button').each(function(i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		});
	});
	
    function sortbytype(current){
        var type = current.attr('data-type');
		var groupedData = {};
		if (type == 'subject'){
			$(".targetpoint").each(function () {
				var sub = $(this).data("subject");
    		    if (groupedData[sub]) {
    				groupedData[sub].append(this);
    			} else {
    				groupedData[sub] = $("<div class='groupContainer list card'><h3 class='heading'>"+sub+"</h3></div>");
    				groupedData[sub].append(this);
    			}
			});
			$("#sortlist").empty();
			for (var key in groupedData) {
				$("#sortlist").append(groupedData[key]);
			}
		}else{
			$(".targetpoint").each(function () {
				var sub = $(this).data("teacher");
				if (groupedData[sub]) {
    				groupedData[sub].append(this);
    			} else {
    				groupedData[sub] = $("<div class='groupContainer list card'><h3 class='heading'>"+sub+"</h3></div>");
    				groupedData[sub].append(this);
    			}
			});
			$("#sortlist").empty();
			for (var key in groupedData) {
				$("#sortlist").append(groupedData[key]);
			}
		}
    }
	$(".sortingclick").each(function() {
    	if($(this).hasClass('is-checked')){
    	    sortbytype($(this));
    	}
	});
	
	$('.sortingclick').click(function(){
		sortbytype($(this));
	});  
});