
$('input').on("focusout", function(){

    if($(this).hasClass('hbFlt')){

        if($(this).hasClass('d100s')){

            let hbValChk = (parseInt($(this).val())).toFixed(2);

            $(this).val(hbValChk);

        }

        if($(this).hasClass('d10s')){
            
            let hbValChk = (parseInt($(this).val())).toFixed(1);

            $(this).val(hbValChk);

        }

    }

    else if(($(this).hasClass('hbInt'))){

        $(this).val();

    }

});


function funcHB() {

    let hbHealth, hbHgen, hbMana, hbMgen, hbAtkDmg, hbAtkSpd, hbAtkRng, hbMove;

    let hbVals = [hbHealth, hbHgen, hbMana, hbMgen, hbAtkDmg, hbAtkSpd, hbAtkRng, hbMove];

    console.log(hbVals);

    for(let i=0; i <=7; i++) {

    }

    console.log(hbVals);

    for(let i=0; i <= 7; i++) {

        $(".output-console").prepend(
            hbVals[i] + "<br>"
        );

    }

}