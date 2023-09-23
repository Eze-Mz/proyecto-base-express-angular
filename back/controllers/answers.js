const { answerService } = require('../services');

const getAllAnswerByType = async (req, res) => {
  try {
    const answers = await answerService.getAllAnswerByType(req.params.answerType);
    res.json(answers);
  } catch (error) {
    // extraer el mensaje de error de sequelize

    // const sequelizeError = error.errors[0].message;
    console.log(error.message);
    res.status(500).json({ action: 'getAllAnswerByType', error });
  }
};

module.exports = {
  getAllAnswerByType
};
