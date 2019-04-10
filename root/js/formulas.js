
/*
    
    List of Stat values:
    
    Health
    Health Regen
    
    Mana           
    Mana Regen     
    
    Attack Damage
    *Attack Speed
    
    *Armor
    *Range
    
    * - Does not scale outside talent changes

*/

// Scaling equation: BaseValue * (Math.pow((1 + 0.04), CurrentLevel))

var outputVal;

console.log("Current: " + outputVal);

function talentPercentFormula(iVal, iPct){

    outputVal = iVal * (iPct / 100);

    outputVal = iVal + outputVal;

    console.log("New: " + outputVal);

}

function levelUpFormula(iVal, iMod, iLvl){

    outputVal = iVal * (Math.pow((1 + iMod), iLvl));

    outputVal = Math.round(outputVal);

    console.log("New: " + outputVal);

}

function levelUpTable(){
    
    var rowCounter = 0;
    
    for(var i = 0; i <= 30; i++) {
        
        /*
        var getVal = $("#outputVal").text();
        
            getVal = parseInt(getVal);
        */
        
        /*
        var totalHealthVal = 1800 * (Math.pow((1 + 0.04), rowCounter));
    
            totalHealthVal = Math.round(totalHealthVal);
        */
        
        var totalHealthVal = 1850 * (Math.pow((1 + 0.04), rowCounter));
    
            totalHealthVal = Math.round(totalHealthVal);
        
        var healthRegenVal = 2 * (Math.pow((1 + 0.04), rowCounter));
    
            healthRegenVal = Math.round(healthRegenVal);
        
        var attackDamageVal = 5 * (Math.pow((1 + 0.04), rowCounter));
    
            attackDamageVal = Math.round(attackDamageVal);
        
        var attackSpeed = "<td class='speed_0' rowspan='30'>20</td>";
    
        if(rowCounter > 0) {
                
            "<td class='speed_0' rowspan='30'>20</td>";
            
        }
        
        $("#outputTable").append(
            "<tr>" +
            "<td class='lv_" + rowCounter + "'>" +
            "Level " + 
            rowCounter +
            "</td>" +
            "<td class='hp_" + rowCounter + "'>" +
            totalHealthVal +
            "</td>" +
            "<td class='regen_" + rowCounter + "'>" +
            healthRegenVal +
            "</td>" +
            "<td class='damage_" + rowCounter + "'>" +
            attackDamageVal +
            "</td>" +
            (rowCounter > 0 ? "" : "<td class='speed_0' rowspan='31'>20</td>") +
            "</tr>"
        );
        
        rowCounter++;
        
    }
    
}

levelUpTable();

curLevel = 0;

function levelUp(){
    
    curLevel += 1;
    
    var getVal = $("#outputVal").text();
    
    getVal = parseInt(getVal);
    
    //BaseValue × (1 + ScalingPercent/100)^Level
    
    var newVal = 1800 * (Math.pow((1 + 0.04), curLevel));
    
    newVal = Math.round(newVal);
    
    console.log(newVal);
    
    //console.log("Static: " + mathVal);
    
    $("#outputVal").html(newVal);
    $("#outputLvl").html(curLevel);
    
    
    
}