"use strict";
var Validation;
(function (Validation) {
    Validation.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validation.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? true : false;
    };
})(Validation || (Validation = {}));
console.log(Validation.validateText('Jes'));
//# sourceMappingURL=app.js.map