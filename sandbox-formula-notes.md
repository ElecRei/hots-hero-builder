## Scaling Formula Notes

### Input Values

The values the user can calculate scaling for:

| Stat            | Description                                                                         |
|:--------------- |:----------------------------------------------------------------------------------- |
| Health          |  *The Hero's total health*                                                          |
| Health Regen    |  *The amount of health a hero recovers per second*                                  |
| Mana            |  *The Hero's total mana*                                                            |
| Mana Regen      |  *The amount of mana a hero recovers per second*                                    |
| Attack Damage   |  *The damage a hero deal with their basic attack, rounds up to nearest whole number*|
| Ability Damage  |  *The amount of damage an ability deals*                                            |
| Ability Healing |  *The amount of healing an ability heals*                                           |
| Ability Shields |  *The amount of shields an ability provides*                                        |

These can be sorted into two groups; Hero Stats and Ability Stats:

| Hero Stats                                                                                            |
|:----------------------------------------------------------------------------------------------------- |
| Health                                                                                                |
| Health Regen                                                                                          |
| Mana                                                                                                  |
| Mana Regen                                                                                            |
| Attack Damage                                                                                         |

| Ability Stats                                                                                         |
|:----------------------------------------------------------------------------------------------------- |
| Ability Damage                                                                                        |
| Ability Healing                                                                                       |
| Ability Shields                                                                                       |


Certain stats output to specific decimals, usually to the tenths or hundreths past the decimal (.0 or .00):

| Whole Numbers                                                                                         |
|:----------------------------------------------------------------------------------------------------- |
| Health <sup>*Hero Stats*</sup>                                                                        |
| Mana <sup>*Hero Stats*</sup>                                                                          |
| Ability Damage <sup>*Ability Stats*</sup>                                                             |
| Ability Healing <sup>*Ability Stats*</sup>                                                            |
| Ability Shields <sup>*Ability Stats*</sup>                                                            |

| One Decimal Place                                                                                     |
|:----------------------------------------------------------------------------------------------------- |
| Attack Damage <sup>*Hero Stats*</sup>                                                                 |

| Two Decimal Places                                                                                    |
|:----------------------------------------------------------------------------------------------------- |
| Health Regen <sup>*Hero Stats*</sup>                                                                  |
| Mana Regen <sup>*Hero Stats*</sup>                                                                    |

With stats that output to decimals there will need to be specific branches/checks in the function to account for them and their unique values. For example for the Regen stats we'll need to make sure the result outputed is to two decimal places (but not rounded, so 2.98 not 3.00). 

Also Mana and Mana Regen in particular scale linearly so the function will have to check if those values are being passed to alter the formula.

### Formulas

There's likely some formulas I'm missing or applications of them I'm overlooking but so far here are the ones in use:

#### Scaling

##### Exponential

```javascript

//BaseValue × (1 + ScalingPercent/100)^Level

let scaleOutput = scaleVal * (Math.pow((1 + scaleModifier), scaleLevel));

```

##### Linear (Mana & Mana Regen)

```javascript

//BaseValue × (10 x level)

let outputVal = iVal + (10 * iLvl); // Mana

//BaseValue × (0.0975 x level)

let outputVal = 2.90 + (parseFloat(0.0975)*iLvl); // Mana Regen

```

#### Percentage

##### Adding percent to value

```javascript

//OutputValue = BaseValue x PercentValue
//OutputValue = BaseValue + OutputValue
//OutputValue = OutputValue

let outputVal = iVal * iPct;

outputVal = iVal + outputVal;

outputVal = Math.ceil(outputVal);

```

##### Subtracting percent from value

```javascript

//OutputValue = BaseValue x PercentValue
//OutputValue = BaseValue - OutputValue
//OutputValue = OutputValue

let outputVal = iVal * iPct;

outputVal = iVal - outputVal;

outputVal = Math.ceil(outputVal);

```

