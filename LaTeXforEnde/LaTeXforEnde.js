String.prototype.Phonemic = function (text){
    return this.
        replace(/tt/gi,"ʈ͡ʂ").
        replace(/dd/gi,"ɖ͡ʐ").
        replace(/ll/gi,"ɽ").
        replace(/ny/gi,"ɲ").
        replace(/ng/gi,"ŋ").
        replace(/ɨ/gi,"ɪ").
        replace(/(ä|ä)/gi,"ə").
        replace(/ao/gi,"aw").
        replace(/ae/gi,"aj").
        replace(/oe/gi,"oj").
        replace(/g/gi,"ɡ").
        toLowerCase().
        replace(/[\.,;:]/g,"")
};

String.prototype.Morphemic = function (choice){
    var theString = this;
    if (choice === 0){
        function MorphemicChoice (array){
            return `{\\${array[1]}}`
        }
    } else{
        function MorphemicChoice (array){
            return `<span class="glossabbr">${array[2]}</span>`
        }
    }
    var theRules = rulestextarea.value.split("\n").filter((line) => line.split(",").length > 1);
    for (let i = 0; i < theRules.length; i++){
        var regexInput = theRules[i].replace(/ /g,"").split(",");
        var theRegex = regexInput[0].replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")
        theRegex = "(?<![^-=\. ])" + theRegex + "(?![^-=\. ])"
        theRegex = new RegExp(theRegex, "g")
        var theReplacement = MorphemicChoice(regexInput)
        theString = theString.replace(theRegex,theReplacement)
    }
    return theString;
}

String.prototype.BracketDelimiter = function(){
    return this.split(/(?<!\{[^\}]*) (?![^\{]*\})/)
}

function makeJSON(ortholine, phonoline, glossline, transline){
    var orthlist = ortholine.BracketDelimiter();
    var phonolist = phonoline.BracketDelimiter();
    var glosslist = []
    glossline.BracketDelimiter().forEach(element => {
        glosslist.push(element.Morphemic(1))
    });
    if (orthlist.length != phonolist.length || glosslist.length != phonolist.length || orthlist.length != glosslist.length){
        debug.innerText = `Lines are not of equal length, there are ${orthlist.length} items in the orthographic line, ${phonolist.length} items in the phonological line, and ${glosslist.length} items in the gloss line.`
    }
    var words = []
    for (let i=0; i<orthlist.length; i++){
        words.push(
            {
                orthography : orthlist[i],
                phonology: phonolist[i],
                gloss : glosslist[i]
            }
        )
    }
    return {
        words : words,
        translation : transline
    }
}

function makeText(){
    var inputGloss = inputtextarea.value.split("\n")

    var orthoLine = inputGloss[0].replace(/[-=]/g,"")
    var phonoLine = inputGloss[0].Phonemic()
    var glossLine = inputGloss[1].Morphemic(0)
    var transLine = inputGloss[2]
    var citeLine = inputGloss[3]
    var locLine = inputGloss[4].replace(/[#_]/g,"\\$&")

    outputtextarea.value = `\\trigloss [ex,preamble={\\hfill\\parencite[${locLine}]{${citeLine}}}\\label{}]
    {${orthoLine}}
    {${phonoLine}}
    {${glossLine}}
    {${transLine}}`

    makeLeipzig()
    visualize(makeJSON(orthoLine, phonoLine, inputGloss[1], transLine))
}

function makeLeipzig(){
    var theRules = rulestextarea.value.split("\n").filter((line) => line.split(",").length === 4);
    var LeipzigArray = [];
    theRules.forEach(element => {
        elementlist = element.replace(/ *(?=,)/g,"").replace(/(?<=,) */g,"").split(",");
        LeipzigArray.push(`\\newleipzig{${elementlist[1]}}{${elementlist[2]}}{${elementlist[3]}}`)
    });
    leipzigoutputtextarea.value = LeipzigArray.join("\n")
}


function visualizeWord(word){
    return `
    <div class="word">
        <div class="textitem">
            ${word.orthography}
        </div>
        <div class="glossitem">
            ${word.phonology}
        </div>
        <div class="glossitem">
            ${word.gloss}
    </div>
    </div>
    `
}

function visualizePhrase(phrase){
        return `
        <div class="examplebox">
            <div class="glossline">
                ${phrase.words.map(visualizeWord).join("")}
            </div>
            <div class="transline">
                "${phrase.translation}"
            </div>
        </div>
        `
}

function visualize(inputjson){
    document.querySelector("#htmldisplay").innerHTML = visualizePhrase(inputjson)
};