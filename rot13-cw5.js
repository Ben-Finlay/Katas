function rot13(message){
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const cypher =   'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'
  return message.replace(/[A-Z]/gi, e => cypher[alphabet.indexOf(e)]);
}


module.exports = rot13;