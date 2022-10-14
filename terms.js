
var finTerms = {
    "Yield to maturity":"The expected rate of return on a bond if bought at its current market price and held to maturity. The discount rate that equates the present value of interest payments and redemption value with the present price of the bond."
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
        var pattern = new RegExp(`\\b${key}\\b`, 'ig');
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