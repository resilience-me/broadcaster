function generateTx() {

    var bytecode = document.getElementById('bytecode').value
    
    //todo: generate transaction
    
    var rawTx = "banana"
  $('#rawTx').val(rawTx);

}


function broadcast() {
    
    
    var privateKey = document.getElementById('privateKey').value
        
         var rawTx = document.getElementById('rawTx').value
        
        

        privateKey = new Buffer(privateKey, 'hex');

       
       var tx = new EthTx(JSON.parse(rawTx));
        tx.sign(privateKey);       

        var serializedTx = tx.serialize().toString('hex');
        

     var url =   "http://api.etherscan.io/api?module=proxy&action=eth_sendRawTransaction&hex="+serializedTx


     $.get(url, function(data, status){
            alert(JSON.stringify(data));
        });
       

}
