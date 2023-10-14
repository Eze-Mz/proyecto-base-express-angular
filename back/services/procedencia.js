const { procedenciaProvider } = require('../providers');

const createProcedencia = async (procedencia, surveyId, t) => {
  const newProcedencia = {
    procedencia: procedencia.opcion,
    SurveyId: surveyId
  };
  if (['otra localidad', 'otra provincia', 'otro país'].includes(procedencia.opcion)) {
    newProcedencia.proc_otro_text = procedencia.texto_otros;
  }

  return await procedenciaProvider.createAnswer(newProcedencia, t);
};

module.exports = {
  createProcedencia
};
