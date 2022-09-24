function converttsv(){
	var file = document.getElementById('inputfile').files[0]
	var fr = new FileReader();
	fr.onload=function(){
		makeTSV(JSON.parse(fr.result))
	}
	fr.readAsText(file);
}

function makeTSV(Dict){
	var morphemeDict = []
	var wordDict = []
	var phraseDict = []
	Dict.morphDict.forEach((morph) =>{
		morphemeDict.push({
			morpheme_type: `{${morph.type}:${morph.msa}}`,
			morpheme_text: morph.txt,
			citation_form: morph.cf,
			morpheme_gloss: morph.gls,
		});
	});
	Dict.wordDict.forEach((word) =>{
		let theMorphemes = getIdContent(morphemeDict,word.morphemes);
		wordDict.push({
			word_text: getBase(word),
			word_gloss: word.gls,
			part_of_speech: `{${word.pos}}`,
			morpheme_type: theMorphemes.joinByContent("morpheme_type","-"),
			morpheme_text: theMorphemes.joinByContent("morpheme_text",""),
			citation_form: theMorphemes.joinByContent("citation_form",""),
			morpheme_gloss: theMorphemes.joinByContent("morpheme_gloss","")
		});
	});
	Dict.corpus.forEach((phrase) => {
		let theWords = getIdContent(wordDict,phrase.words);
		phraseDict.push({
			text_title: phrase.title,
			line_number: phrase.segnum,
			translation: phrase.gls,
			word_text: theWords.joinByContent("word_text"," "),
			word_gloss: theWords.joinByContent("word_gloss"," "),
			part_of_speech: theWords.joinByContent("part_of_speech"," "),
			morpheme_type: theWords.joinByContent("morpheme_type"," "),
			morpheme_text: theWords.joinByContent("morpheme_text"," "),
			citation_form: theWords.joinByContent("citation_form"," "),
			morpheme_gloss: theWords.joinByContent("morpheme_gloss"," ")
		});
	});
	download("morpheme_dictionary.tsv",toTSV(morphemeDict))
	download("word_dictionary.tsv",toTSV(wordDict))
	download("corpus.tsv",toTSV(phraseDict))
}


function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
  
	element.style.display = 'none';
	document.body.appendChild(element);
  
	element.click();
  
	document.body.removeChild(element);
  }

function toTSV(dict){
	let keys = Object.keys(dict[0]);
	let lines = [];
	lines.push(keys.join(`	`));
	dict.forEach(entry => {
		let thisline = []
		keys.forEach(key => {
			thisline.push(entry[key])
		});
		lines.push(thisline.join(`	`));
	});
	return lines.join(`
`);
}

function getBase(Word){
	if (Word.txt === ""){
		return Word.punct
	} else {
		return Word.txt
	}
}
function getIdContent(dict,ids){
	if (ids.length === 0){return [];}
	res = [];
	ids.forEach(id => {
		res.push(dict[Number(id)]);
	});
	return res;
}
Array.prototype.applyEach = function(func){
	var res = [];
	this.forEach(element => {
		res.push(func(element))
	});
	return res;
}
Array.prototype.joinByContent = function(key,joint){
	return this.applyEach((x)=>{return x[key]}).join(joint);
}
