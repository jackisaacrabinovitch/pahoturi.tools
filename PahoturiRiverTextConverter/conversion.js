const inputsystem = document.querySelector("#inputsystem");
const outputsystem = document.querySelector("#outputsystem");

String.prototype.EndeIn = function(){
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
		replace(/y/gi,"j").
		replace(/g/gi,"ɡ").
		toLowerCase()
};
String.prototype.TaemeIn = function(){
	return this.
	replace(/tt/gi,"ʈ͡ʂ").
	replace(/dd/gi,"ɖ͡ʐ").
	replace(/ny/gi,"ɲ").
	replace(/ng/gi,"ŋ").
	replace(/ly/gi,"ʎ").
	replace(/kw/gi,"k͡pʷ").
	replace(/gw/gi,"ɡ͡bʷ").
	replace(/(ä|ä)/gi,"æ").
	replace(/(é|é)/gi,"ə").
	replace(/y/gi,"j").
	replace(/g/gi,"ɡ").
	toLowerCase()
}
String.prototype.AgobEmIn = function(){
	return this.
		replace(/tt/gi,"ʈ͡ʂ").
		replace(/dd/gi,"ɖ͡ʐ").
		replace(/ll/gi,"ɽ").
		replace(/ny/gi,"ɲ").
		replace(/ng/gi,"ŋ").
		replace(/(ä|ä)/gi,"æ").
		replace(/(é|é)/gi,"ə").
		replace(/y/gi,"j").
		replace(/g/gi,"ɡ").
		toLowerCase()
};
String.prototype.IdiIn = function(){
	return this.
		replace(/th/gi,"ʈ͡ʂ").
		replace(/dh/gi,"ɖ͡ʐ").
		replace(/ny/gi,"ɲ").
		replace(/ng/gi,"ŋ").
		replace(/ly/gi,"ʎ").
		replace(/q/gi,"k͡pʷ").
		replace(/ḡ/gi,"ɡ͡bʷ").
		replace(/(é|é)/gi,"ɪ").
		replace(/(ä|ä)/gi,"æ").
		replace(/y/gi,"j").
		replace(/g/gi,"ɡ")
}
String.prototype.KawamIn = function(){
	return this.
		replace(/ch/gi,"ʃ").
		replace(/jh/gi,"ʒ").
		replace(/ny/gi,"ɲ").
		replace(/ng/gi,"ŋ").
		replace(/ɨ/gi,"ə").
		replace(/(ä|ä)/gi,"æ").
		replace(/y/gi,"j").
		replace(/g/gi,"ɡ")
}
String.prototype.EndeOut = function(){
	return this.
	replace(/ʈ͡ʂ|tʂ/gi,"tt").
	replace(/dʐ|ɖ͡ʐ/gi,"dd").
	replace(/k͡pʷ|kpʷ/gi,"-").
	replace(/ɡ͡bʷ|ɡbʷ/gi,"-").
	replace(/ɡ/gi,"g").
	replace(/ʃ/gi,"-").
	replace(/ʒ/gi,"-").
	replace(/ɲ/gi,"ny").
	replace(/ŋ/gi,"ng").
	replace(/j(?=[aeiouəɪ])/gi,"y").
	replace(/w(?![aeiouəɪ])/gi,"o").
	replace(/r|ɹ/gi,"r").
	replace(/ɽ/gi,"ll").
	replace(/ʎ/gi,"-").
	replace(/ɪ/gi,"ɨ").
	replace(/j/gi,"e").
	replace(/æ/gi,"-").
	replace(/ə/gi,"ä").
	replace(/ɐ|a/gi,"a")
}
String.prototype.TaemeOut = function(){
	return this.
	replace(/ʈ͡ʂ|tʂ/gi,"tt").
	replace(/dʐ|ɖ͡ʐ/gi,"dd").
	replace(/k͡pʷ|kpʷ/gi,"kw").
	replace(/ɡ͡bʷ|ɡbʷ/gi,"gw").
	replace(/ɡ/gi,"g").
	replace(/ʃ/gi,"-").
	replace(/ʒ/gi,"-").
	replace(/ɲ/gi,"ny").
	replace(/ŋ/gi,"ng").
	replace(/r|ɹ/gi,"r").
	replace(/ɽ/gi,"-").
	replace(/ʎ/gi,"ly").
	replace(/ɪ/gi,"-").
	replace(/j/gi,"y").
	replace(/æ/gi,"ä").
	replace(/ə/gi,"é").
	replace(/ɐ|a/gi,"a")
}
String.prototype.AgobEmOut = function(){
	return this.
	replace(/ʈ͡ʂ|tʂ/gi,"tt").
	replace(/dʐ|ɖ͡ʐ/gi,"dd").
	replace(/k͡pʷ|kpʷ/gi,"-").
	replace(/ɡ͡bʷ|ɡbʷ/gi,"-").
	replace(/ɡ/gi,"g").
	replace(/ʃ/gi,"-").
	replace(/ʒ/gi,"-").
	replace(/ɲ/gi,"ny").
	replace(/ŋ/gi,"ng").
	replace(/r|ɹ/gi,"r").
	replace(/ɽ/gi,"ll").
	replace(/ʎ/gi,"-").
	replace(/ɪ/gi,"-").
	replace(/j/gi,"y").
	replace(/æ/gi,"ä").
	replace(/ə/gi,"é").
	replace(/ɐ|a/gi,"a")
}
String.prototype.IdiOut = function(){
	return this.
	replace(/ʈ͡ʂ|tʂ/gi,"th").
	replace(/dʐ|ɖ͡ʐ/gi,"dh").
	replace(/k͡pʷ|kpʷ/gi,"q").
	replace(/ɡ͡bʷ|ɡbʷ/gi,"ḡ").
	replace(/ɡ/gi,"g").
	replace(/ʃ/gi,"-").
	replace(/ʒ/gi,"-").
	replace(/ɲ/gi,"ny").
	replace(/ŋ/gi,"ng").
	replace(/r|ɹ/gi,"r").
	replace(/ɽ/gi,"-").
	replace(/ʎ/gi,"ly").
	replace(/ɪ/gi,"é").
	replace(/j/gi,"y").
	replace(/æ/gi,"ä").
	replace(/ə/gi,"").
	replace(/ɐ|a/gi,"a")
}
String.prototype.KawamOut = function(){
	return this.
	replace(/ʈ͡ʂ|tʂ/gi,"-").
	replace(/dʐ|ɖ͡ʐ/gi,"-").
	replace(/k͡pʷ|kpʷ/gi,"-").
	replace(/ɡ͡bʷ|ɡbʷ/gi,"-").
	replace(/ɡ/gi,"g").
	replace(/ʃ/gi,"ch").
	replace(/ʒ/gi,"jh").
	replace(/ɲ/gi,"ny").
	replace(/ŋ/gi,"ng").
	replace(/r|ɹ/gi,"r").
	replace(/ɽ/gi,"-").
	replace(/ʎ/gi,"-").
	replace(/ɪ/gi,"").
	replace(/j/gi,"y").
	replace(/æ/gi,"ä").
	replace(/ə/gi,"ɨ").
	replace(/ɐ|a/gi,"a")
}
String.prototype.convertText = function(inputIndex,outputIndex){
	switch (inputIndex) {
		case "agobem":
			ret = this.AgobEmIn()
			break;
		case "ende":
			ret = this.EndeIn()
			break;
		case "taeme":
			ret = this.TaemeIn()
			break;
		case "idi":
			ret = this.IdiIn()
			break;
		case "kawam":
			ret = this.KawamIn()
			break;
		default:
			ret = this
			break;
	}
	switch (outputIndex) {
		case "agobem":
			ret = ret.AgobEmOut()
			break;
		case "ende":
			ret = ret.EndeOut()
			break;
		case "taeme":
			ret = ret.TaemeOut()
			break;
		case "idi":
			ret = ret.IdiOut()
			break;
		case "kawam":
			ret = ret.KawamOut()
			break;
		default:
			break;
	}
	return ret;
}
String.prototype.easyOrth = function(){
	return this.
		replace(/i[Xx]/g,"ɨ").
		replace(/I[Xx]/g,"Ɨ").
		replace(/a[Xx]/g,"ä").
		replace(/A[Xx]/g,"Ä").
		replace(/e[Xx]/g,"é").
		replace(/E[Xx]/g,"É").
		replace(/g[Xx]/g,"ḡ").
		replace(/G[Xx]/g,"Ḡ")
};
function buttonPress(){
	outputtext.value = inputtext.value.easyOrth().convertText(inputsystem.value,outputsystem.value)
}
function Swap(){
	var newoutputsystem = inputsystem.selectedIndex;
	var newinputsystem = outputsystem.selectedIndex;
	inputsystem.selectedIndex = newinputsystem;
	outputsystem.selectedIndex = newoutputsystem;
	if (outputtext.value != ""){
		var newoutput = inputtext.value;
		var newinput = outputtext.value;
		inputtext.value = newinput;
		outputtext.value = newoutput;
	}
}





