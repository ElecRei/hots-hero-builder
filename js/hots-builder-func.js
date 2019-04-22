
$('input').on("focusout", function(){

    if($(this).hasClass('hbFlt')){

        if($(this).val() === null || $(this).val().match(/^ *$/) !== null){
            $(this).val(''); 
        }

        else if($(this).hasClass('d100s')){

            let hbValChk = parseFloat($(this).val()).toFixed(2);

            $(this).val(hbValChk);

        }

        else if($(this).hasClass('d10s')){
            
            let hbValChk = parseFloat($(this).val()).toFixed(1);

            $(this).val(hbValChk);

        }

    }

    else if(($(this).hasClass('hbInt'))){

        $(this).val();

    }

});


function funcHB() {

    let hbHealth = {hbName: 'hbHealth', hbVal: parseInt($('#hbHealth').val())}
    let hbHgen   = {hbName: 'hbHgen', hbVal: parseFloat($('#hbHgen').val()).toFixed(2)}
    let hbMana   = {hbName: 'hbMana', hbVal: parseInt($('#hbMana').val())}
    let hbMgen   = {hbName: 'hbMgen', hbVal: parseFloat($('#hbMgen').val()).toFixed(2)}
    let hbAtkDmg = {hbName: 'hbAtkDmg', hbVal: parseFloat($('#hbAtkDmg').val()).toFixed(1)}
    let hbAtkSpd = {hbName: 'hbAtkSpd', hbVal: parseFloat($('#hbAtkSpd').val()).toFixed(2)}
    let hbAtkRng = {hbName: 'hbAtkRng', hbVal: parseFloat($('#hbAtkRng').val()).toFixed(1)}
    let hbMove   = {hbName: 'hbMove', hbVal: parseFloat($('#hbMove').val()).toFixed(2)}

    let hbVals = [hbHealth, hbHgen, hbMana, hbMgen, hbAtkDmg, hbAtkSpd, hbAtkRng, hbMove];

    console.log(JSON.stringify(hbVals));

    for(let i=0; i <= 7; i++) {

        $(".output-console").append(
            hbVals[i].hbName + " : " + hbVals[i].hbVal + "<br>"
        );

    }

    $(".output-table-body").append(
        `<tr>` +
        `<td> ${ hbVals[0].hbVal } </td>` +
        `<td> ${ hbVals[1].hbVal } </td>` +
        `<td> ${ hbVals[2].hbVal } </td>` +
        `<td> ${ hbVals[3].hbVal } </td>` +
        `<td> ${ hbVals[4].hbVal } </td>` +
        `<td> ${ hbVals[5].hbVal } </td>` +
        `<td> ${ hbVals[6].hbVal } </td>` +
        `<td> ${ hbVals[7].hbVal } </td>` +
        `</tr>`
    );

}