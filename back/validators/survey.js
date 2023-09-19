const { checkSchema } = require('express-validator');

// create checkSchema to validate the exampleObject using express-validator
const surveySchema = checkSchema({
  edad: {
    in: ['body'],
    errorMessage: 'la propiedad edad es requerida',
    isInt: true
  },
  sexo: {
    in: ['body'],
    errorMessage: 'la propiedad sexo es requerida',
    isString: true,
    custom: {
      options: (value) => {
        if (!['masculino', 'femenino'].includes(value)) {
          throw new Error('Sexo debe ser masculino o femenino');
        }
        return true;
      }
    }
  },
  procedencia: {
    in: ['body'],
    errorMessage: 'la propiedad procedencia es requerida',
    isObject: true,
    optional: {
      options: {
        values: 'falsy'
      }
    },
    custom: {
      options: (value) => {
        if (!value.opcion) {
          throw new Error('la propiedad procedencia.opcion is required');
        }
        if (!value.texto_otros && !value.texto_otros === '') {
          throw new Error('la propiedad procedencia.texto_otros is required');
        }
        return true;
      }
    }
  },
  acompaniante: {
    in: ['body'],
    errorMessage: 'la propiedad acompaniante es requerida',
    isObject: true,
    custom: {
      options: (value) => {
        if (!value.opciones) {
          throw new Error('la propiedad acompaniante.opciones is required');
        }
        if (!value.texto_otros && !value.texto_otros === '') {
          throw new Error('la propiedad acompaniante.texto_otros es requerida');
        }
        if (value.opciones.acom_otro && !(value.texto_otros.length > 0)) {
          throw new Error('la propiedad texto_otros es requeridad si el booleano acom_otro es true');
        }
        return true;
      }
    }
  },
  'acompaniante.opciones.*': {
    in: ['body'],
    isBoolean: {
      errorMessage: 'las opciones de acompaniantes deben ser un booleano'
    }
  }
});
/* const exampleObject = {
  Edad: 15,
  Sexo: 'Masculino',
  Procedencia: {
    opcion: 'Otro',
    texto_otros: ''
  },
  Acompaniante: {
    opciones: {
      acom_solo: true,
      acom_pareja: false,
      acom_familia: false,
      acom_amigo: false,
      acom_excusion: false,
      acom_otro: false
    },
    texto_otros: ''
  }
};
 */

module.exports = { surveySchema };
