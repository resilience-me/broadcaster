function generateTx() {

    var bytecode = document.getElementById('bytecode').value
    
    //todo: generate transaction
    // not sure how to do this. how do i calculate nonce ? and gasPrice, gasLimit ?
    
    var rawTx = {
        gasPrice: 10000000000000, // ?
        gasLimit: 3000000, // ?
        value: 10000000,
        nonce: 0, // ?
        data: bytecode
    }
    
    
  $('#rawTx').val(JSON.stringify(rawTx));

}


function broadcast() {
    
    var privateKey = document.getElementById('privateKey').value

        
         var rawTx = document.getElementById('rawTx').value


        privateKey = new Buffer(privateKey, 'hex');
       var tx = new EthTx(JSON.parse(rawTx));
       alert(tx)

       

        tx.sign(privateKey);       

        var serializedTx = tx.serialize().toString('hex');
        

     var url =   "http://api.etherscan.io/api?module=proxy&action=eth_sendRawTransaction&hex="+serializedTx


     $.get(url, function(data, status){
            alert(JSON.stringify(data));
        });
       

}
