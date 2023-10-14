import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/core/services/database.service';
import { Acompaniante, Procedencia, Survey } from 'src/app/models/survey';

@Component({
  selector: 'app-cuestionario-turistas',
  templateUrl: './cuestionario-turistas.component.html',
  styleUrls: ['./cuestionario-turistas.component.css']
})
export class CuestionarioTuristasComponent {
  inSubmission = false;
  success = false;
  isSubmitted = false;
  errorMsj!: string;

  edad!: number;
  sexo!: string;
  procedencia!: string;
  otraProcedencia!: string;
  vinoAMinaClavero: { [key: string]: boolean } = {};
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

  constructor(private db: DatabaseService) { }

  onSubmit() {
    // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP o realizar cualquier acción necesaria.
    // Por ejemplo, puedes imprimir los datos en la consola para verificar que se capturaron correctamente.
    this.inSubmission = true;
    const newProcedencia = new Procedencia(this.procedencia, this.otraProcedencia);
    const newAcompaniante = new Acompaniante(this.vinoAMinaClavero['Solo'], this.vinoAMinaClavero['Con su pareja'], this.vinoAMinaClavero['Con su familia'], this.vinoAMinaClavero['Con amigos'], this.vinoAMinaClavero['En una excursión'], this.vinoAMinaClavero['Otros'], this.otrosVino);
    
    const newSurvey = new Survey(this.edad, this.sexo, newProcedencia, newAcompaniante);
    console.log(newSurvey);
    this.db.createSurvey(newSurvey).subscribe({
      next: (data: any) => {
        this.success = true;
        this.isSubmitted = true;
        this.inSubmission = false;

      },
      error: (error) => {
        this.success = false;
        this.isSubmitted = true;
        this.inSubmission = false;
        this.errorMsj = "Error al cargar la encuesta"
      }
    });
    

    console.log('Datos del formulario:', {
      edad: this.edad,
      sexo: this.sexo,
      procedencia: this.procedencia,
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
