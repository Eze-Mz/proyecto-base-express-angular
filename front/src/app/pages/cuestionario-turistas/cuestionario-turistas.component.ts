import { Component } from '@angular/core';

@Component({
  selector: 'app-cuestionario-turistas',
  templateUrl: './cuestionario-turistas.component.html',
  styleUrls: ['./cuestionario-turistas.component.css']
})
export class CuestionarioTuristasComponent {
  edad!: number;
  sexo!: string;
  procedencia!: string;
  otraCiudad!: string;
  otroPais!: string;
  vinoAMinaClavero!: string;
  otrosVino!: string;
  mediosConocidos: { [key: string]: boolean } = {};
  otrosMedios!: string;
  razones: { [key: string]: boolean } = {};
  otrasRazones!: string;
  tipoDeHospedaje!: string;
  otroTipoHospedaje!: string;
  servicioHospedaje!: string;
  recibioMaterial!: string;
  razonNoRecibirMaterial!: string;
  pidioInformacion!: string;
  oficinaTurismo!: string;
  informacion: { [key: string]: boolean } = {};
  otraInformacion!: string;
  mediosSolicitados: { [key: string]: boolean } = {};
  otrosMediosSolicitud!: string;
  tipoMaterialEntregado: string[] = ['Folleto', 'Revista', 'Planos', 'Calcomanías', 'Guía de Servicios'];
  evaluacionInformacion!: string;
  otraInformacionBrindada!: string;
  destinoCompleto!: string;
  razonNoDestinoCompleto!: string;
  recomendaria!: string;
  razonNoRecomendaria!: string;

  // Define las opciones para las preguntas con múltiples opciones
  opcionesVino: string[] = ['Solo', 'Con su pareja', 'Con su familia', 'Con amigos', 'En una excursión', 'Otros'];
  mediosConocimiento: string[] = ['Televisión', 'Página Web', 'Radio', 'Medios Gráficos', 'Facebook', 'Recomendación', 'Otro'];
  razonesEleccion: string[] = [
    'Porque ya conocía y le gustó el lugar',
    'Porque se lo recomendaron',
    'Porque vio alguna promoción en los medios',
    'Porque es un lugar tranquilo para la familia',
    'Por sus paisajes',
    'Por sus eventos',
    'Por la amabilidad de los vecinos',
    'Otros'
  ];
  tipoHospedaje: string[] = ['Hotel', 'Cabaña', 'Hostería', 'Camping', 'Casa de alquiler', 'Otro'];
  informacionSolicitada: string[] = ['Hospedaje', 'Paseos', 'Eventos', 'Gastronomía', 'Turismo Aventura', 'Servicios', 'Rutas', 'Otros'];
  mediosSolicitud: string[] = ['Personalmente', 'Vía mail', 'Vía Facebook', 'Vía Telefónica', 'Otros'];

  onSubmit() {
    // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP o realizar cualquier acción necesaria.
    // Por ejemplo, puedes imprimir los datos en la consola para verificar que se capturaron correctamente.
    console.log('Datos del formulario:', {
      edad: this.edad,
      sexo: this.sexo,
      procedencia: this.procedencia,
      otraCiudad: this.otraCiudad,
      otroPais: this.otroPais,
      vinoAMinaClavero: this.vinoAMinaClavero,
      otrosVino: this.otrosVino,
      mediosConocidos: this.mediosConocidos,
      otrosMedios: this.otrosMedios,
      razones: this.razones,
      otrasRazones: this.otrasRazones,
      tipoDeHospedaje: this.tipoDeHospedaje,
      otroTipoHospedaje: this.otroTipoHospedaje,
      servicioHospedaje: this.servicioHospedaje,
      recibioMaterial: this.recibioMaterial,
      razonNoRecibirMaterial: this.razonNoRecibirMaterial,
      pidioInformacion: this.pidioInformacion,
      oficinaTurismo: this.oficinaTurismo,
      informacion: this.informacion,
      otraInformacion: this.otraInformacion,
      mediosSolicitados: this.mediosSolicitados,
      otrosMediosSolicitud: this.otrosMediosSolicitud,
      evaluacionInformacion: this.evaluacionInformacion,
      otraInformacionBrindada: this.otraInformacionBrindada,
      destinoCompleto: this.destinoCompleto,
      razonNoDestinoCompleto: this.razonNoDestinoCompleto,
      recomendaria: this.recomendaria,
      razonNoRecomendaria: this.razonNoRecomendaria
    });
  }
}
