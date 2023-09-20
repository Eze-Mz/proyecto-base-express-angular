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
  }
];

module.exports = { exampleSurveys };
