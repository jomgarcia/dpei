import { Injectable } from '@angular/core';
import { SrvRecord } from 'dns';

@Injectable()
export class SomosService {


  private somos: whos[] = [

            {
              parrafo1: "La División de Planificación y Evaluación Institucional (DPEI) fue creado mediante el acuerdo 238, con fecha del 12 de marzo del año 2003, con el nombre de Programa de Planificación y Evaluación Institucional. Fue denominada como División, en el acuerdo No. 2, inciso A. Modificaciones y Rectificaciones, numeral 13, de la sesión extraordinaria número 13-2014 del Consejo Universitario de la UNI, realizada el 03 de octubre del año 2014, según certificación de la sesión emitida el 07 de octubre de 2014, en la cual se cita:",
              parrafo2: "Modificar el numeral 1 del Acuerdo de Rectoría No. 238 de fecha 12 de marzo del año 2003 donde se crea el Programa de Planificación y Evaluación Institucional de la Universidad Nacional de Ingeniería, adscrito a la Rectoría. También se modifica el Acuerdo No. 2 del Acta de Consejo Universitario 09-2014 del 09-07-2014, referido a los cargos directivos, en todo aquello que diga Programa de Planificación y Evaluación Institucional.",
              parrafo3: "Debiendo leerse como: División de Planificación y Evaluación Institucional. Esta División se adscribe a la Rectoría, manteniendo la misma estructura interna.",
              parrafo4: "Mediante el Acuerdo de Rectoría No. 420 del 13 de febrero del 2017 Se delega la atención directa del programa de Planificación y Evaluación Institucional al Vice rector General de la UNI. Posteriormente en el acuerdo número 2, inciso A. Modificaciones y Rectificaciones, numeral 14, de la sesión extraordinaria número 13-2014 del Consejo Universitario de la UNI, realizada el 03 de octubre del año 2014, según certificación de la sesión emitida el 07 de octubre de 2014, en la cual se cita:",
              parrafo5: " Modificar el acuerdo de Rectoria 420 del 13 de febrero 2007. El acuerdo debe leerse como: Delegar la atención directa de la División de Planificación y Evaluación Institucional al Vice rector General de la UNI."
              mision: "La División de Planificación y Evaluación Institucional, es una Instancia de la UNI que Planifica, Dirige, Coordina y Acompaña el Proceso de Planificación Estratégica y Operativa; desde la Formulación, Seguimiento, Análisis Estadístico hasta la Evaluación Institucional, que contribuye en las relaciones e intercambios a lo interno y externo de la Universidad, la toma de decisiones oportunas, la mejora continua y rendición social de cuentas.",
              vision: "La División de Planificación y Evaluación Institucional, es una Instancia que contribuye a la mejora continua de la gestión institucional, al aseguramiento de la calidad y rendición social de cuentas de la Universidad Nacional de Ingeniería, ante las instancias correspondientes.",
              objetivos1: "Promover la cultura de Planificación, Seguimiento y Evaluación Institucional ",
              objetivos2: "Administra las acciones de la Planificación Estratégica y Operativa Institucional.",
              objetivos3: "Capacitar y brindar acompañamiento a los responsables de áreas sobre el proceso de la Planificación Estratégica y Operativa desde la formulación, seguimiento, análisis estadístico y evaluación.",
              img1: "assets/img/note plan.svg",
              img2: "assets/img/report.svg",
              img3: "assets/img/organigrama.jpg",
              header: "Las funciones de DPEI son: (REVISAR: que den respuesta a los fines y objetivos. Redactas en presente indicativo y ordenar. Funciones de La División de Planificación y Evaluación Institucional:",
              funciones1: "Administra las acciones de la planificación estratégica, planificación operativa, seguimiento institucional, indicadores de gestión, gestión de riesgo, estadísticas y evaluación.",
              funciones2: "Elabora propuestas de procedimientos y criterios para la planificación institucional.",
              funciones3: " Garantiza el cumplimiento de las políticas, normas y disposiciones dictadas por el Consejo Universitario relacionadas a la planificación institucional.",
              funciones4: " Integra el Plan de Mejora a la Planificación Institucional.",
              funciones5: "Capacita y acompaña a las distintas áreas de la Universidad en el uso y manejo del Sistema Informático de Planificación, Presupuesto y Seguimiento Institucional (SIPPSI) en Planificación Operativa Anual, Indicadores de gestión, Gestión de Riesgo, Seguimiento al POA y Estadísticas CNU.",
              funciones6: " Analiza los resultados de la planificación de cada área de la universidad, así como la elaboración de informes trimestrales, anuales e informe físicos financieros trimestrales y anuales enviados a las instancias correspondientes."
            }
  ];

  constructor() { }

     getsomos() {
       return this.somos;
     }
}

// tslint:disable-next-line:class-name
export interface whos {

  parrafo1: string;
  parrafo2: string;
  parrafo3: string;
  parrafo4: string;
  parrafo5: string;
  mision: string;
  vision: string;
  objetivos1: string;
  objetivos2: string;
  objetivos3: string;
  img1: string;
  img2: string;
  img3: string;
  header: string;
  funciones1: string;
  funciones2: string;
  funciones3: string;
  funciones4: string;
  funciones5: string;
  funciones6: string;
}
