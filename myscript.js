$(document).ready(function(){

    //Crear mensaje
    $(".casilla").on ("submit", function(e){
        var text = $(".casilla__escribe-tu-tweet").val();
        event.preventDefault();
        $(".entradas").append(
            "<div class='entrada'>"
            + "<img class='entrada__imagen' src='' alt='aquí va una foto'>"
            + text
            + "<div class='entrada__borrar'>"
            + "</div>"
            + "<a class='entrada__like'>"
            + "<i class='fas fa-heart'>"
            + "<span class='entrada__count'> 0 </span>"
            + "</i>"
            + "</a>"
            + "</div>");
    
    //reset form
		$(this).find('.casilla__escribe-tu-tweet').val('');
    });

    //Borrar entrada
    $(".entradas").on ("click", ".entrada__borrar", function (){
        $(this).parent().fadeOut(900);
    });

    //Dar like y cambiar color
    $(".entradas").on ('click', '.entrada__like',function(){
        $(this).addClass("entrada__like--red");
        return false;   
    });

    //Sumar likes
    $(".entradas").on ('click', '.entrada__like',function(e){
        counter = $(this).find(".entrada__count").text();
        counter = parseInt(counter);
        $(this).find(".entrada__count").text(counter + 1);
        return false;
    });

    


});

