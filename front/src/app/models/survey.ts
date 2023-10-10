export class Survey {
    edad: number
    sexo: string
    procedencia: Procedencia
    acompaniante: Acompaniante
    constructor(edad: number, sexo: string, procedencia: Procedencia, acompaniante: Acompaniante) {
        this.edad = edad;
        this.sexo = sexo.toLocaleLowerCase();
        this.procedencia = procedencia;
        this.acompaniante = acompaniante;
    }

}

export class Procedencia {
    opcion: string
    texto_otros: string | null
    constructor(opcion: string, texto_otros: string | null) {
        this.opcion = opcion.toLocaleLowerCase();
        this.texto_otros = texto_otros;
    }
}
export class Acompaniante {
    opciones: {
        acom_solo: boolean,
        acom_pareja: boolean,
        acom_familia: boolean,
        acom_amigo: boolean,
        acom_excursion: boolean,
        acom_otro: boolean
    };
    texto_otros: string | null
    constructor(acom_solo: boolean, acom_pareja: boolean, acom_familia: boolean, acom_amigo: boolean, acom_excursion: boolean, acom_otro: boolean, texto_otros: string | null) {
        this.opciones = {
            acom_solo: !!acom_solo,
            acom_pareja: !!acom_pareja,
            acom_familia: !!acom_familia,
            acom_amigo: !!acom_amigo,
            acom_excursion: !!acom_excursion,
            acom_otro: !!acom_otro
        };
        this.texto_otros = texto_otros;
    }
}


