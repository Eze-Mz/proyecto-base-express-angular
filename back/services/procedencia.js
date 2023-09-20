const { procedenciaProvider } = require('../providers');

const createProcedencia = async (procedencia, surveyId) => {
  const newProcedencia = {
    procedencia: procedencia.opcion,
    SurveyId: surveyId
  };
  if (['otra localidad', 'otra provincia', 'otro país'].includes(procedencia.opcion)) {
    newProcedencia.proc_otro_text = procedencia.texto_otros;
  }

  return await procedenciaProvider.createAnswer(newProcedencia);
};

module.exports = {
  createProcedencia
};
