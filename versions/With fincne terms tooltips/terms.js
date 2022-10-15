


fetch("termlist.txt")
  .then(response => response.text())
  .then(text => text)
const terms = text
const termLines = terms.split('\n');

let finTerms = {};

for(let i = 0; i < termLines.length; ++i) {
  const line = termLines[i];
  const termParts = line.split('&$&');
  finTerms[termParts[0].trim()] = termParts[1].trim();
  }


// func to get all the text nodes under a particular node
function textNodesUnder(el) {
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

// getting textnodes from the body of the document
var pageText = textNodesUnder(document.body);

for (node of pageText) {
    var origText = node.nodeValue;
    var term = origText;
    for (const key of Object.keys(finTerms)) {
        var pattern = new RegExp(`${key}`, 'ig');
        var tooltip = "Definition: "
        var chars = Math.max(tooltip.length, key.length + 10);
        var replacement = '<span class="tooltip">' + key + 
                              '<span class="tooltiptext" style="width:' + chars + 'ex;">' + 
                              tooltip + '<br/>"' + finTerms[key] + '"</span></span>';
        var replacedTerm = term.replace(pattern, replacement);
  
        if ((replacedTerm !== term) && (node.parentNode !== null)) {
          term = replacedTerm;
        }
    }
    if ((term != origText) && (node.parentNode !== null)) {
       var elementTerm = document.createElement("span");
       elementTerm.innerHTML = term;
       node.parentNode.replaceChild(elementTerm, node);
    }
}

/*

let finTerms = readTextFile("./termlist.txt"); 

function readTextFile(fileName) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', chrome.runtime.getURL(fileName), true);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
		{
			const terms = xhr.responseText;
			//... The content has been read in xhr.responseText
			const termLines = terms.split('\n');

			let dictionary = {};

			for(let i = 0; i < termLines.length; ++i) {
				const line = termLines[i];
				const termParts = line.split('&$&');
				dictionary[termParts[0].trim()] = termParts[1].trim();
			}
    } coonsole.log(dictionary)
  }
} xhr.send()

*/







// THIS WORKS

/*

var pageText = textNodesUnder(document.body);

for (node of pageText) {
    var origText = node.nodeValue;
    var term = origText;
    for (const key of Object.keys(finTerms)) {
        var pattern = new RegExp(`\\b${key}\\b`, 'ig');
        var tooltip = ""
        var chars = Math.max(tooltip.length, key.length + 10);
        var replacement = '<span class="tooltip">' + key + 
                              '<span class="tooltiptext" style="width:' + chars + 'ex;">' + 
                              tooltip + '<br/>"' + finTerms[key] + '"</span></span>';
        var replacedTerm = term.replace(pattern, replacement);
  
        if ((replacedTerm !== term) && (node.parentNode !== null)) {
          term = replacedTerm;
        }
    }
    if ((term != origText) && (node.parentNode !== null)) {
       var elementTerm = document.createElement("span");
       elementTerm.innerHTML = term;
       node.parentNode.replaceChild(elementTerm, node);
    }
}

*/