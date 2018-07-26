$(document).ready(function(){

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
            + "</i>"
            + "</a>"
            + "</div>")

    //reset form
		$(this).find('.casilla__escribe-tu-tweet').val('');
    });

    $(".entradas").on ("click", ".entrada__borrar", function (){
        $(this).parent().fadeOut(900);
    });

    $(".entradas").on ('click', '.entrada__like',function(){
        $(this).addClass("entrada__like--red");
        return false;
        
    });
});

