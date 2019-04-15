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

    var outputVal;

    if(iName == "Mana") {
        outputVal = iVal + (10 * iLvl);

        console.log("Mana Equation - " + outputVal);

        $(".output-console").prepend(
            iName + ": " + outputVal + "<br>"
        );
    }

    else if(iName == "Mana Regen") {
        outputVal = iVal + (.0975 * iLvl);

        outputVal = outputVal.toFixed(2);

        console.log("Equation - " + outputVal);

        $(".output-console").prepend(
            iName + ": " + outputVal + "<br>"
        );
    }

    else {
        outputVal = iVal * (Math.pow((1 + iMod), iLvl));

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
        let scaleVal  = parseInt($('#scaleVal').val(),10);
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