(() => {

 /**
  TODO:Never: Funcion que termina en error
  * Toma una cadena y devuelve un nunca o un número
  * @param {string} message - cuerda
  */
  const error = (message:string):(never|number) => {
    throw new Error(message)
  }

  error('Auxilio!');

})()