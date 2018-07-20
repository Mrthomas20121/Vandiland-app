/**
 * 
 * @param {String} message 
 */
function encrypt(message) {
  return message.toLowerCase().replace(/a/gi,'b').replace(/b/gi, 'c').replace(/c/gi, 'd').replace(/e/gi, 'f').replace(/f/gi, 'g').replace(/g/gi, 'h').replace(/i/gi, 'j').replace(/d/gi, 'e').replace(/l/gi, 'm');
}
console.log(encrypt('message'));