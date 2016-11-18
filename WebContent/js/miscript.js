/**
 * 
 */
$(document).ready(function() {

		$("#plantilla").hide();

$( "#accionar" ).on("click", function() {
	
	var cantidad = ($("[type=number]").val())
	
		
	
		$.getJSON( "https://randomuser.me/api/?results="+cantidad, function( json ) {
			var datos = json.results;
			
			$("#resultados > div").empty();

		
			$.each(datos, function(i, valor) {
	         
				
				var elem = $( "#plantilla" ).clone();
 
				var urlimagen = datos[i].picture.large;
				var nombrecompleto = (datos[i].name.first + ' ' + valor.name.last+ '' );
				var emailcompleto = (datos[i].email );
				var tlfcompleto = (datos[i].phone );				
				var genero = datos[i].gender;
		
				$(elem).prop('id','plantilla'+i+1);
				$(elem).find("img").attr("src",urlimagen);
				$(elem).find("#nombre").text(nombrecompleto.toUpperCase());  //toUpperCasse pone el nombre en mayuscula
				$(elem).find("#email").html(emailcompleto);
				$(elem).find("#tlf").html(tlfcompleto);
				
				$(elem).appendTo( "#resultados > div").show();
				$(elem).on("click" ,function() {
					$(this).css('font-weight', 'bold');
					
				})
			})
		})
		
	
	})
	
	
});

			






