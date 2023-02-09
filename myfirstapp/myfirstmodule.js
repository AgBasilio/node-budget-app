//para exportar modulos es necesario usar 'exports' keyword
//sobre los metodos que se quieren visibilizar

const myName = "my name is NAME";
const myAddress = "Some address";
const myLastname = "Anderson";

exports = { myName, myAddress, myLastname };

exports.myDateTime = function () {
  return Date();
};

//OJO!
exports.myName = function () {
  return "Agustin";
};

//module es un objeto globa, mientras que exports es local del modulo
module.exports = exports