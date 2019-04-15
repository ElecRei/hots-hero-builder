// Scaling equation: BaseValue * (Math.pow((1 + 0.04), CurrentLevel))

function percentFormula(iVal, iPct){

    let outputVal = iVal * iPct;

    outputVal = iVal + outputVal;

    let roundVal = Math.ceil(outputVal);

    console.log("Including Percent:  " + outputVal + " Rounded: " + roundVal);

    $(".output-console").prepend(
        "Including Percent:  " + outputVal + " Rounded: " + roundVal + "<br>"
    );

}

function scalingFormula(iVal, iMod, iLvl, iName){

    if(iName == "Mana") {
        let outputVal = iVal + (10 * iLvl);

        console.log("Mana Equation - " + outputVal);

        $(".output-console").prepend(
            iName + ": " + outputVal + "<br>"
        );
    }

    else if(iName == "Mana Regen") {
        //outputVal = iVal + (.0975 * iLvl);

        let outputVal = 2.90 + (parseFloat(0.0975)*iLvl);

        console.log(outputVal);

        outputVal = outputVal.toFixed(2);

        console.log("Equation - " + outputVal);

        $(".output-console").prepend(
            iName + ": " + outputVal + "<br>"
        );
    }

    else {
        let outputVal = iVal * (Math.pow((1 + iMod), iLvl));

        console.log("Equation - " + outputVal);

        outputVal = Math.round(outputVal);

        $(".output-console").prepend(
            iName + ": " + outputVal + "<br>"
        );
    }

}

function funcInit(clickBtn) {

    console.log("pre button click");

    if(clickBtn === 'scalingForm') {

        let scaleVal;
        if($('#scaleName').val() == "Mana Regen"){
            scaleVal  = parseFloat($('#scaleVal').val());
        }
        else {
            scaleVal  = parseInt($('#scaleVal').val(),10);
            console.log("Check " + scaleVal);
        }
        let scaleMod  = parseFloat($('#scaleMod').val()) / 100;
        let scaleLvl  = parseInt($('#scaleLvl').val(),10);
        let scaleName = $('#scaleName').val();

        console.log("scaleName = " + scaleName);

        scalingFormula(scaleVal,scaleMod,scaleLvl,scaleName);
    }

    if(clickBtn === 'percentForm') {
        let pctVal  = parseInt($('#pctVal').val(),10);
        let pctMod  = parseFloat($('#pctMod').val()) / 100;

        percentFormula(pctVal, pctMod);
    }

}