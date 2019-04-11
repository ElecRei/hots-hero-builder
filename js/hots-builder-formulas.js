// Scaling equation: BaseValue * (Math.pow((1 + 0.04), CurrentLevel))

function percentFormula(iVal, iPct){

    let outputVal = iVal * (iPct / 100);

    outputVal = iVal + outputVal;

    let roundVal = Math.ceil(outputVal);

    console.log("Including Percent:  " + outputVal + " Rounded: " + roundVal);

    $(".output-console").prepend(
        "Including Percent:  " + outputVal + " Rounded: " + roundVal + "<br>"
    );

}

function scalingFormula(iVal, iMod, iLvl, iName){

    let outputVal = iVal * (Math.pow((1 + iMod), iLvl));

    console.log("Equation - " + outputVal);

    outputVal = Math.round(outputVal);

    console.log(iName + ": " + outputVal);

    $(".output-console").prepend(
        iName + ": " + outputVal + "<br>"
    );

}

function funcInit(clickBtn) {

    if(clickBtn === 'scalingForm') {
        let scaleVal  = parseInt($('#scaleVal').val(),10);
        let scaleMod  = parseFloat($('#scaleMod').val()) / 100;
        let scaleLvl  = parseInt($('#scaleLvl').val(),10);
        let scaleName = $('#scaleName').val();

        scalingFormula(scaleVal,scaleMod,scaleLvl,scaleName);
    }

    if(clickBtn === 'percentForm') {

    }

}