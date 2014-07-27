/*

Given a particular number say 637-8687 (NERVOUS) would be the word.
So for the older keypad’s seen on telephone’s I would have to create Mnemonics.

So for doing this, the first part being list out all the Permutations possible for a particular number series.

Ex: listMnemonics(“723″) would result in
PAD PBD PCD QAD QBD QCD RAD RBD RCD SAD SBD SCD
PAE PBE PCE QAE QBE QCE RAE RBE RCE SAE SBE SCE
PAF PBF PCF QAF QBF QCF RAF RBF RCF SAF SBF SCF

*/

var digitToAlpha = [
    /* 0 */ "",
    /* 1 */ "",
    /* 2 */ "ABC",
    /* 3 */ "DEF",
    /* 4 */ "GHI",
    /* 5 */ "JKL",
    /* 6 */ "MNO",
    /* 7 */ "PQRS",
    /* 8 */ "TUV",
    /* 9 */ "WXYZ"
]

function listMnemonics(number) {
    var numberStr = number.toString(),
        currentMnemonics = [],
        nextMnemonics = [],
        mnemonics = [];

    if (numberStr.length === 0) {
        return [""];
    }

    currentMnemonics = digitToAlpha[numberStr[0]].split("");
    nextMnemonics = listMnemonics(numberStr.slice(1));

    for (var i = 0, currentLen = currentMnemonics.length; i < currentLen; i++) {
        for (var j = 0, nextLen = nextMnemonics.length; j < nextLen; j++) {
            mnemonics.push(currentMnemonics[i] + nextMnemonics[j]);
        }
    }

    return mnemonics;
}

console.log(listMnemonics(723));
