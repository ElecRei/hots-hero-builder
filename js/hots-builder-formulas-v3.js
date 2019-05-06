
$('select#scaleStat').on("click", function(){

    if($(this).val() === "Health Regen" || 
       $(this).val() === "Mana Regen" ||
       $(this).val() === "Attack Range"){

        $(this).attr('class', 'd100s');
    }

    else if($(this).val() === "Attack Damage") {
        $(this).attr('class', 'd10s');
    }

    else {
        $(this).attr('class', '');
    }

});

function cooldownFormula() {


    // The inital cooldown value
    let cdVal;

    // The cooldown modifier
    let cdMod;

    // The operator, increasing or decreasing cooldown
    let cdOp;


}


function scalingFormula() {

    let scaleStat = $('#scaleStat').val();

    let scaleVal = $('#scaleVal').val();

    let scaleModifier = parseFloat($('#scaleMod').val()) / 100;

    let scaleLevel = $('#scaleLvl').val();

    let scaleOutput;

    if($('select#scaleStat').hasClass('d100s')) {

        scaleVal = parseFloat(scaleVal).toFixed(2);

        //let scaleOutput = Math.round(scaleVal * (Math.pow((1 + scaleModifier), scaleLevel)).toFixed(2));

        if(scaleStat == 'Mana Regen') {
            scaleOutput = (2.90 + (parseFloat(0.0975)*scaleLevel)).toFixed(2);
        }
        else {
            scaleOutput = (scaleVal * (Math.pow((1 + scaleModifier), scaleLevel))).toFixed(2);
        }

        console.log(scaleOutput);

    }

    if($('select#scaleStat').hasClass('d10s')) {

        scaleVal = parseFloat(scaleVal).toFixed(1);

        scaleOutput = scaleVal * (Math.pow((1 + scaleModifier), scaleLevel));

        scaleOutput = Math.round(scaleOutput).toFixed(1);

        console.log(scaleOutput);

    }

    if(!$('select#scaleStat').hasClass('d10s') && !$('select#scaleStat').hasClass('d100s')) {

        scaleVal = parseInt(scaleVal);

        if(scaleStat == "Mana") {
            scaleOutput = scaleVal + (10 * scaleLevel);
        }

        else {
            scaleOutput = scaleVal * (Math.pow((1 + scaleModifier), scaleLevel));

            scaleOutput = Math.round(scaleOutput);
        }

        console.log(scaleOutput);

    }

    //let outputVal = iVal * (Math.pow((1 + iMod), iLvl));


}
