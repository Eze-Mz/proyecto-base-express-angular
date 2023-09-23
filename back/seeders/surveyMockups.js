const exampleSurveys = [
  {
    edad: 15,
    sexo: 'masculino',
    procedencia: {
      opcion: 'córdoba capital',
      texto_otros: ''
    },
    acompaniante: {
      opciones: {
        acom_solo: true,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 30,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otra localidad',
      texto_otros: 'Villa Allende'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: true,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 25,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otra provincia',
      texto_otros: 'San Juan'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: true,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 28,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Argentina'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: true,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 22,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Brasil'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: true
      },
      texto_otros: 'Mi amigo'
    }
  },
  {
    edad: 15,
    sexo: 'masculino',
    procedencia: {
      opcion: 'córdoba capital',
      texto_otros: ''
    },
    acompaniante: {
      opciones: {
        acom_solo: true,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 30,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otra localidad',
      texto_otros: 'Villa Allende'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: true,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 25,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otra provincia',
      texto_otros: 'San Juan'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: true,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 28,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Argentina'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: true,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 22,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Brasil'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: true
      },
      texto_otros: 'Mi amigo'
    }
  },
  {
    edad: 18,
    sexo: 'masculino',
    procedencia: {
      opcion: 'córdoba capital',
      texto_otros: ''
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: true,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 35,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otra localidad',
      texto_otros: 'Río Ceballos'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: true,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 45,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otra provincia',
      texto_otros: 'Mendoza'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: true,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 29,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Chile'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: true,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 20,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Uruguay'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: true
      },
      texto_otros: 'Mi hermana'
    }
  },
  {
    edad: 15,
    sexo: 'masculino',
    procedencia: {
      opcion: 'córdoba capital',
      texto_otros: ''
    },
    acompaniante: {
      opciones: {
        acom_solo: true,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 30,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otra localidad',
      texto_otros: 'Villa Allende'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: true,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 25,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otra provincia',
      texto_otros: 'San Juan'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: true,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 28,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Argentina'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: true,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 22,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Brasil'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: true
      },
      texto_otros: 'Mi amigo'
    }
  },
  {
    edad: 18,
    sexo: 'masculino',
    procedencia: {
      opcion: 'córdoba capital',
      texto_otros: ''
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: true,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 35,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otra localidad',
      texto_otros: 'Río Ceballos'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: true,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 45,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otra provincia',
      texto_otros: 'Mendoza'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: true,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 29,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Chile'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: true,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 20,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Uruguay'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: true
      },
      texto_otros: 'Mi hermana'
    }
  },
  {
    edad: 15,
    sexo: 'masculino',
    procedencia: {
      opcion: 'córdoba capital',
      texto_otros: ''
    },
    acompaniante: {
      opciones: {
        acom_solo: true,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 30,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otra localidad',
      texto_otros: 'Villa Allende'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: true,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 25,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otra provincia',
      texto_otros: 'San Juan'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: true,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 28,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Argentina'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: true,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 22,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Brasil'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: true
      },
      texto_otros: 'Mi amigo'
    }
  },
  {
    edad: 18,
    sexo: 'masculino',
    procedencia: {
      opcion: 'córdoba capital',
      texto_otros: ''
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: true,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 35,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otra localidad',
      texto_otros: 'Río Ceballos'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: true,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 45,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otra provincia',
      texto_otros: 'Mendoza'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: true,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 29,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Chile'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: true,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 20,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Uruguay'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: true
      },
      texto_otros: 'Mi hermana'
    }
  },
  {
    edad: 27,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otra localidad',
      texto_otros: 'Unadilla'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: true,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 31,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otra provincia',
      texto_otros: 'Tucumán'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: true,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 19,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Perú'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: true,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 23,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otra localidad',
      texto_otros: 'La Calera'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: true,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 26,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otra provincia',
      texto_otros: 'San Luis'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: true,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 32,
    sexo: 'femenino',
    procedencia: {
      opcion: 'córdoba capital',
      texto_otros: ''
    },
    acompaniante: {
      opciones: {
        acom_solo: true,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 21,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otro país',
      texto_otros: 'Colombia'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: true,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 36,
    sexo: 'femenino',
    procedencia: {
      opcion: 'córdoba capital',
      texto_otros: ''
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: true,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: false
      },
      texto_otros: ''
    }
  },
  {
    edad: 28,
    sexo: 'masculino',
    procedencia: {
      opcion: 'otra provincia',
      texto_otros: 'La Rioja'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: true
      },
      texto_otros: 'Mi prima'
    }
  },
  {
    edad: 24,
    sexo: 'femenino',
    procedencia: {
      opcion: 'otra localidad',
      texto_otros: 'Alta Gracia'
    },
    acompaniante: {
      opciones: {
        acom_solo: false,
        acom_pareja: false,
        acom_familia: false,
        acom_amigo: false,
        acom_excursion: false,
        acom_otro: true
      },
      texto_otros: 'Mi hermano'
    }
  }
];

module.exports = { exampleSurveys };
