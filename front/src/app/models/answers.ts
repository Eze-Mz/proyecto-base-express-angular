export const ANSWER_IDS = {
  EDAD: 'edad',
  SEXO: 'sexo',
  PROCEDENCIA: 'procedencia',
  ACOMPANIANTE: 'acompaniante'
};


export interface IProcedencia {
    id: number,
    procedencia: string,
    proc_otro_text: string | null,
    createdAt: string,
    updatedAt: string,
    deletedAt: string | null,
    SurveyId: number,
  }

export interface IAcompaniamiento {
  id: number,
  acom_solo: boolean,
  acom_pareja: boolean,
  acom_familia: boolean,
  acom_amigo: boolean,
  acom_excursion: boolean,
  acom_otro_text: string | null,
  createdAt: string,
  updatedAt: string,
  deletedAt: string | null,
  SurveyId: number,
}

export interface ISexo {
  id: number,
  sexo: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string | null,
  SurveyId: number,
}

export interface IEdad {
  id: number,
  edad: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string | null,
  SurveyId: number,
}

export interface ISurveyAnswers {
  id: number,
  createdAt: string,
  updatedAt: string,
  deletedAt: string | null,
  updateUser: number | null,
  state: string,
  edad: IEdad,
  sexo: ISexo,
  procedencia: IProcedencia,
  acompaniante: IAcompaniamiento,
  User: any
}


