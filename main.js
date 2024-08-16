

function replaceText(fromString, toString){
  getTextNodes().forEach(function(node){
    node.nodeValue = node.nodeValue.replace(new RegExp(quote(fromString), 'g'), toString);
  });

  function getTextNodes(){
    var node_list = [];

    (function scan(node){
      if(node.childNodes.length) 
        for(var i = 0; i < node.childNodes.length; i++) {
          scan(node.childNodes[i]);
		}
      else if(node.nodeType == Node.TEXT_NODE) {
        node_list.push(node);
	  }
    })(document);

    return node_list;
  }

  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}

(function main(){
  for (let key in dictionary) {
    replaceText(key, dictionary[key]);
  }
})();

setTimeout(function () {
  for (let key in dictionary) {
    replaceText(key, dictionary[key]);
  }
}, 3000);
