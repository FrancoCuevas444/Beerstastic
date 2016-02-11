var pageFunctionality = {
//@TODO Helloo
	dotAvailable: true,

	dotPressing: function(dot){
		if(!(dot.hasClass('pressed'))){
			$(".pressed").removeClass('pressed');
			dot.addClass('pressed');
		}
	},

	fading: function(cl, id){
		if(!($(cl).hasClass('visible'))){
			pageFunctionality.dotAvailable = false;
			$(".visible").fadeOut('slow', function(){
				$(".card").attr("id", id);
				$(cl).fadeIn('slow', function(){
					$(".visible").removeClass('visible');
					$(cl).addClass('visible');
					pageFunctionality.dotAvailable = true;
				});
			});
		}
	},

	changeCard: function(dot, cardClass, cardID){
		if(pageFunctionality.dotAvailable){
			pageFunctionality.dotPressing($(dot));
			pageFunctionality.fading(cardClass, cardID);
		}
	},

	index: 0,

	updateCard: function(){
		switch(pageFunctionality.index){
			case 0:
				pageFunctionality.changeCard("#first", ".firstCard", "welcome");
				break;	
			case 1:
				pageFunctionality.changeCard("#second", ".secondCard", "offer");
				break;
			case 2:
				pageFunctionality.changeCard("#third", ".thirdCard", "visit");
				break;
			default:
				console.log("Invalid index");
				break;
		}
	}
};

$(document).ready(function() {
	$(".secondCard").hide();
	$(".thirdCard").hide();

	$("#first").click(function(){
		if(pageFunctionality.dotAvailable){
			pageFunctionality.index = 0;
			pageFunctionality.updateCard();
		}		
	});
	$("#second").click(function(){
		if(pageFunctionality.dotAvailable){
			pageFunctionality.index = 1;
			pageFunctionality.updateCard();
		}
	});
	$("#third").click(function(){
		if(pageFunctionality.dotAvailable){
			pageFunctionality.index = 2;
			pageFunctionality.updateCard();
		}
	});


	window.setInterval(function(){
		if(pageFunctionality.dotAvailable){
			if(pageFunctionality.index <2) pageFunctionality.index++;
			else pageFunctionality.index = 0;

			pageFunctionality.updateCard();
		}
	}, 7000);


	$("#next").click(function(){
		if(pageFunctionality.dotAvailable){
			if(pageFunctionality.index <2) pageFunctionality.index++;
			else pageFunctionality.index = 0;

			pageFunctionality.updateCard();
		}
	});

	$("#back").click(function(){
		if(pageFunctionality.dotAvailable){
			if(pageFunctionality.index >0) pageFunctionality.index--;
			else pageFunctionality.index = 2;

			pageFunctionality.updateCard();
		}
	});
		
});
	
