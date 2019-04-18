
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