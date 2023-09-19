const { procedenciaProvider } = require('../providers');

const createProcedencia = async (procedencia, surveyId) => {
  const newProcedencia = {
    procedencia: procedencia.opcion,
    SurveyId: surveyId
  };
  if (procedencia.opcion in ['otra localidad', 'otra provincia', 'otro país']) {
    newProcedencia.proc_otro_text = procedencia.texto_otros;
  }

  return await procedenciaProvider.createAnswer(newProcedencia);
};

module.exports = {
  createProcedencia
};
