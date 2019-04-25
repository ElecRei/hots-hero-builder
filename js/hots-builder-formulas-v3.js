
$('select#scaleStat').on("click", function(){

    if($(this).val() === "Health Regen" || 
       $(this).val() === "Mana Regen" ||
       $(this).val() === "Attack Range"){

        $(this).attr('class', 'd100s');
    }

    if($(this).val() === "Attack Damage") {
        $(this).attr('class', 'd10s');
    }

});


function scalingFormula() {

    let scaleStat = $('#scaleStat').val();

    let scaleVal = $('#scaleVal').val();

    let scaleModifier = parseFloat($('#scaleMod').val()) / 100;

    let scaleLevel = $('#scaleLvl').val();

    if($('select#scaleStat').hasClass('d100s')) {

        scaleVal = parseFloat(scaleVal).toFixed(2);

    }

    if($('select#scaleStat').hasClass('d10s')) {

        scaleVal = parseFloat(scaleVal).toFixed(1);

    }

    else {

        scaleVal = parseInt(scaleVal);

    }

    let scaleOutput = Math.round(scaleVal * (Math.pow((1 + scaleModifier), scaleLevel)));

    console.log(scaleOutput);

}
