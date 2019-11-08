import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/login'; 
import ConstruirFichas from './components/ConstruirFichas';
import AreaEdicion from './components/AreaEdicion';
import ProcesoManual from './components/ProcesoManual';
import Vertelefono from './components/VerTelefono';
import Agenda from './components/Agenda';
import Search from './components/Search';
import Timelines from './components/Timeline';
import ReporteUsuario from './components/ReporteUsuario';
import ReporteSupervisor from './components/ReporteSupervisor';
import moment from 'moment';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {  
       expandida: true,
       estadoLogin:false,
       tipoLogin:"standar",
       area:"",
       verTelefono: false,
       verAgenda:false,
       anexo:"",
       tipoUsuario:"",
       ejecutivos:[],
       interfaz:"",
       grupos:[],
       fichas:[],
       gruposCandidatos:[],
       peticionFichas:false,
       fichasEnCola:0,
       fichasDescartadas:0,
       fichasExito:0,
       fichasprocesadas:"",
       //opcionesOsuario:[{opcion:"Estado", funcion:"x"},{opcion:"Logoff Usuario", funcion:"x"},{opcion:"Pausar", funcion:"x"},{opcion:"Llamar", funcion:"x"},{opcion:"Cortar", funcion:"x"},{opcion:"Transferir", funcion:"x"}],
       opcionesOsuario:[
                        {
                          opcion:"fab fa-trello", 
                          funcion:"gestion",
                          ver: false
                        },{
                          opcion:"far fa-calendar-alt", 
                          funcion:"agenda",
                          ver: false
                        },
                        {
                          opcion:"fa fa-headset", 
                          funcion:"telefono",
                          ver: false
                        },
                        {
                          opcion:"fas fa-chart-pie", 
                          funcion:"reportes_supervisor",
                          ver: false
                        },
                        {
                          opcion:"fas fa-chart-line", 
                          funcion:"reporte",
                          ver: false
                        },
                        
                        {
                          opcion:"fas fa-users-cog", 
                          funcion:"supervision",
                          ver: false
                        },
                        {
                          opcion:"fas fa-user-times", 
                          funcion:"salir",
                          ver: true
                        }
                       ],
       xmlProceso:"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<definitions xmlns=\"http://www.omg.org/spec/BPMN/20100524/MODEL\"\r\n             xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\"\r\n             xmlns:omgdc=\"http://www.omg.org/spec/DD/20100524/DC\"\r\n             xmlns:omgdi=\"http://www.omg.org/spec/DD/20100524/DI\"\r\n             xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\r\n             expressionLanguage=\"http://www.w3.org/1999/XPath\"\r\n             typeLanguage=\"http://www.w3.org/2001/XMLSchema\"\r\n             targetNamespace=\"\"\r\n             xsi:schemaLocation=\"http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd\">\r\n<collaboration id=\"sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424\">\r\n    <participant id=\"sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F\" name=\"Customer\" processRef=\"sid-C3803939-0872-457F-8336-EAE484DC4A04\">\r\n    </participant>\r\n</collaboration>\r\n<process id=\"sid-C3803939-0872-457F-8336-EAE484DC4A04\" isClosed=\"false\" isExecutable=\"false\" name=\"Customer\" processType=\"None\">\r\n    <extensionElements/>\r\n    <laneSet id=\"sid-b167d0d7-e761-4636-9200-76b7f0e8e83a\">\r\n        <lane id=\"sid-57E4FE0D-18E4-478D-BC5D-B15164E93254\">\r\n            <flowNodeRef>sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138</flowNodeRef>\r\n            <flowNodeRef>sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26</flowNodeRef>\r\n            <flowNodeRef>SCAN_OK</flowNodeRef>\r\n            <flowNodeRef>sid-E49425CF-8287-4798-B622-D2A7D78EF00B</flowNodeRef>\r\n            <flowNodeRef>sid-E433566C-2289-4BEB-A19C-1697048900D2</flowNodeRef>\r\n            <flowNodeRef>sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9</flowNodeRef>\r\n        </lane>\r\n    </laneSet>\r\n    <startEvent id=\"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138\" name=\"Notices&#10;QR code\">\r\n        <outgoing>sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD</outgoing>\r\n    </startEvent>\r\n    <task completionQuantity=\"1\" id=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26\" isForCompensation=\"false\" name=\"Scan QR code\" startQuantity=\"1\">\r\n        <incoming>sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D</incoming>\r\n        <outgoing>sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A</outgoing>\r\n    </task>\r\n    <exclusiveGateway gatewayDirection=\"Diverging\" id=\"SCAN_OK\" name=\"Scan successful?&#10;\">\r\n        <incoming>sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A</incoming>\r\n        <outgoing>sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB</outgoing>\r\n        <outgoing>sid-337A23B9-A923-4CCE-B613-3E247B773CCE</outgoing>\r\n    </exclusiveGateway>\r\n    <task completionQuantity=\"1\" id=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B\" isForCompensation=\"false\" name=\"Open product information in mobile  app\" startQuantity=\"1\">\r\n        <incoming>sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB</incoming>\r\n        <outgoing>sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C</outgoing>\r\n    </task>\r\n    <endEvent id=\"sid-E433566C-2289-4BEB-A19C-1697048900D2\" name=\"Is informed\">\r\n        <incoming>sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C</incoming>\r\n    </endEvent>\r\n    <exclusiveGateway gatewayDirection=\"Converging\" id=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\">\r\n        <incoming>sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD</incoming>\r\n        <incoming>sid-337A23B9-A923-4CCE-B613-3E247B773CCE</incoming>\r\n        <outgoing>sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D</outgoing>\r\n    </exclusiveGateway>\r\n    <sequenceFlow id=\"sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD\" sourceRef=\"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138\" targetRef=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\"/>\r\n    <sequenceFlow id=\"sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A\" sourceRef=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26\" targetRef=\"SCAN_OK\"/>\r\n    <sequenceFlow id=\"sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C\" sourceRef=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B\" targetRef=\"sid-E433566C-2289-4BEB-A19C-1697048900D2\"/>\r\n    <sequenceFlow id=\"sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB\" name=\"No\" sourceRef=\"SCAN_OK\" targetRef=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B\"/>\r\n    <sequenceFlow id=\"sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D\" sourceRef=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\" targetRef=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26\"/>\r\n    <sequenceFlow id=\"sid-337A23B9-A923-4CCE-B613-3E247B773CCE\" name=\"Yes\" sourceRef=\"SCAN_OK\" targetRef=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\"/>\r\n</process>\r\n<bpmndi:BPMNDiagram id=\"sid-74620812-92c4-44e5-949c-aa47393d3830\">\r\n    <bpmndi:BPMNPlane bpmnElement=\"sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424\" id=\"sid-cdcae759-2af7-4a6d-bd02-53f3352a731d\">\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F\" id=\"sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F_gui\" isHorizontal=\"true\">\r\n            <omgdc:Bounds height=\"250.0\" width=\"933.0\" x=\"42.5\" y=\"75.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n                <omgdc:Bounds height=\"59.142852783203125\" width=\"12.000000000000014\" x=\"47.49999999999999\" y=\"170.42857360839844\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-57E4FE0D-18E4-478D-BC5D-B15164E93254\" id=\"sid-57E4FE0D-18E4-478D-BC5D-B15164E93254_gui\" isHorizontal=\"true\">\r\n            <omgdc:Bounds height=\"250.0\" width=\"903.0\" x=\"72.5\" y=\"75.0\"/>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138\" id=\"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138_gui\">\r\n            <omgdc:Bounds height=\"30.0\" width=\"30.0\" x=\"150.0\" y=\"165.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"22.0\" width=\"46.35714340209961\" x=\"141.8214282989502\" y=\"197.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26\" id=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26_gui\">\r\n            <omgdc:Bounds height=\"80.0\" width=\"100.0\" x=\"352.5\" y=\"140.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n                <omgdc:Bounds height=\"12.0\" width=\"84.0\" x=\"360.5\" y=\"172.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"SCAN_OK\" id=\"SCAN_OK_gui\" isMarkerVisible=\"true\">\r\n            <omgdc:Bounds height=\"40.0\" width=\"40.0\" x=\"550.0\" y=\"160.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"12.0\" width=\"102.0\" x=\"521.0\" y=\"127.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B\" id=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B_gui\">\r\n            <omgdc:Bounds height=\"80.0\" width=\"100.0\" x=\"687.5\" y=\"140.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n                <omgdc:Bounds height=\"36.0\" width=\"83.14285278320312\" x=\"695.9285736083984\" y=\"162.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-E433566C-2289-4BEB-A19C-1697048900D2\" id=\"sid-E433566C-2289-4BEB-A19C-1697048900D2_gui\">\r\n            <omgdc:Bounds height=\"28.0\" width=\"28.0\" x=\"865.0\" y=\"166.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"11.0\" width=\"62.857147216796875\" x=\"847.5714263916016\" y=\"196.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\" id=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9_gui\" isMarkerVisible=\"true\">\r\n            <omgdc:Bounds height=\"40.0\" width=\"40.0\" x=\"240.0\" y=\"160.0\"/>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A\" id=\"sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A_gui\">\r\n            <omgdi:waypoint x=\"452.5\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"550.0\" y=\"180\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB\" id=\"sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB_gui\">\r\n            <omgdi:waypoint x=\"590.0\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"687.5\" y=\"180\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"12.048704338048935\" width=\"16.32155963195521\" x=\"597.8850936986571\" y=\"155\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD\" id=\"sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD_gui\">\r\n            <omgdi:waypoint x=\"180.0\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"240.0\" y=\"180\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D\" id=\"sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D_gui\">\r\n            <omgdi:waypoint x=\"280.0\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"352.5\" y=\"180\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C\" id=\"sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C_gui\">\r\n            <omgdi:waypoint x=\"787.5\" y=\"180.0\"/>\r\n            <omgdi:waypoint x=\"865.0\" y=\"180.0\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-337A23B9-A923-4CCE-B613-3E247B773CCE\" id=\"sid-337A23B9-A923-4CCE-B613-3E247B773CCE_gui\">\r\n            <omgdi:waypoint x=\"570.5\" y=\"200.0\"/>\r\n            <omgdi:waypoint x=\"570.5\" y=\"269.0\"/>\r\n            <omgdi:waypoint x=\"260.5\" y=\"269.0\"/>\r\n            <omgdi:waypoint x=\"260.5\" y=\"200.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"21.4285888671875\" width=\"12.0\" x=\"550\" y=\"205\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNEdge>\r\n    </bpmndi:BPMNPlane>\r\n    <bpmndi:BPMNLabelStyle id=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n        <omgdc:Font isBold=\"false\" isItalic=\"false\" isStrikeThrough=\"false\" isUnderline=\"false\" name=\"Arial\" size=\"11.0\"/>\r\n    </bpmndi:BPMNLabelStyle>\r\n    <bpmndi:BPMNLabelStyle id=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n        <omgdc:Font isBold=\"false\" isItalic=\"false\" isStrikeThrough=\"false\" isUnderline=\"false\" name=\"Arial\" size=\"12.0\"/>\r\n    </bpmndi:BPMNLabelStyle>\r\n</bpmndi:BPMNDiagram>\r\n</definitions>\r\n\r\n",
       xmlOverlays:[{"ID_ETAPA_PROCESO":"SCAN_OK", "NOTA":"AQUI HAY 3 FICHAS" },{"ID_ETAPA_PROCESO":"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138", "NOTA":"AQUI HAY 2 FICHAS" }],
       xmlViwEstadoProceso:"",
       edicion:[],
       procesomanual:[
                        {tag:"nuevo", cantidad:0, ver: true, canales:[{tag:"seguimiento",cantidad:0,ver: true},
                                    {tag:"agendado",cantidad:0, ver: true},
                                    {tag:"sin respuesta",cantidad:0, ver: true}], gruposCandidatos:[]},
                        {tag:"en gestion", cantidad:0, ver: true, canales:[{tag:"seguimiento",cantidad:0,ver: true},
                                    {tag:"agendado",cantidad:0, ver: true},
                                    {tag:"sin respuesta",cantidad:0, ver: true}], gruposCandidatos:[]},
                        {tag:"agendado", cantidad:0, ver: true, 
                            canales:[
                                    {tag:"seguimiento",cantidad:0,ver: true},
                                    {tag:"agendado",cantidad:0, ver: true},
                                    {tag:"sin respuesta",cantidad:0, ver: true}], gruposCandidatos:[]},
                        /*{
                          tag:"en gestion", 
                          cantidad:0, 
                          ver: true, 
                          canales:[
                                    { 
                                      tag:"seguimiento",cantidad:0, 
                                      ver: true, 
                                      tipificacion:[
                                                      {
                                                          tag:"sin respuesta", 
                                                          cantidad:0, 
                                                          ver:true
                                                      },
                                                      {
                                                          tag:"en seguimiento", 
                                                          cantidad:0, 
                                                          ver:true
                                                      }
                                                    ]
                                    },
                                    {tag:"agendado",cantidad:0, ver: true},
                                    {tag:"sin respuesta",cantidad:0, ver: true}
                                  ]
                        }*/
                      ],
       procesomanualFiltro:[],
       searchFiltro:"",
       uniqueid:"",
       eventosAgenda:[]


     }
      /*
    this.interfazExpandida = this.interfazExpandida.bind(this);
    this.estadoLogin = this.estadoLogin.bind(this);
    this.actualizarFichas = this.actualizarFichas.bind(this);
    this.actualizarOverlayXml = this.actualizarOverlayXml.bind(this);
    this.desplegarEdicion = this.desplegarEdicion.bind(this);
    this.estadoProceso = this.estadoProceso.bind(this);
    this.filtroFichas = this.filtroFichas.bind(this)
    this.navegarInterfaz=this.navegarInterfaz.bind(this)
    this.estadoAgenda=this.estadoAgenda.bind(this)
    this.estadoTelefono=this.estadoTelefono.bind(this)
    this.searchFiltro=this.searchFiltro.bind(this)
    this.pedirFichas=this.pedirFichas.bind(this)
    this.pedirNuevas=this.pedirNuevas.bind(this)
    this.pedirFichasNuevas=this.pedirFichasNuevas.bind(this)
    this.actualizarUniqueid=this.actualizarUniqueid.bind(this)
    this.llamafichaDesdeAgenda=this.llamafichaDesdeAgenda.bind(this)
    this.actualizarGrupoCandidato=this.actualizarGrupoCandidato.bind(this)
    this.contarFichaGc=this.contarFichaGc.bind(this)*/
    

  }


  


  actualizarGrupoCandidato=(grupo)=>{

    const gruposCandidatos=this.state.gruposCandidatos
    gruposCandidatos.forEach(function(element) {
      console.log(element.tag+"/"+grupo)
      if(element.tag==grupo && element.ver==true){
        element.ver=false
      }else if(element.tag==grupo && element.ver==false){
        element.ver=true
      }

    })
    this.setState({gruposCandidatos:gruposCandidatos});
    console.log(this.state.gruposCandidatos)

  }

  contarFichaGc=(fichas)=>{
    console.log(this.state.fichas)
    /**/
    const las_fichas=this.state.fichas
    const procesomanual=this.state.procesomanual
    const gruposCandidatos=this.state.gruposCandidatos

    gruposCandidatos.forEach(function(element_b) {element_b.cantidad=0})
    

    las_fichas.forEach(function(element_0) {
      procesomanual.forEach(function(element_a) {
        //console.log(ficha.estado+"/"+element_a.tag+"/"+element_a.ver)
        //console.log(ficha.estado==element_a.tag && element_a.ver==true)
        if(element_0.caso_estado==element_a.tag && element_a.ver==true){
          //CONSEGUI EL ESTADO DE LA FICHA Y EN CONDICION DE VER TRUE
          gruposCandidatos.forEach(function(element_b) {
              console.log(element_b.tag+"/"+element_0.gruposCandidatos+"//"+element_b.ver+"/"+true)
              if(element_b.tag==element_0.gruposCandidatos ){
                console.log(element_0.caso)
                element_b.cantidad=element_b.cantidad+1
              }

          })
        }
      })
    })

      
          
    this.setState({gruposCandidatos:gruposCandidatos});
    

    console.log(gruposCandidatos)

  }


  llamafichaDesdeAgenda=(id)=>{
    console.log(id)

  }


  actualizarUniqueid=(uniqueid)=>{
    
    console.log(uniqueid)
    if(uniqueid==0 || uniqueid=="0"){
      this.state.uniqueid="";
    }else{
      this.setState({uniqueid:uniqueid});
    }
    console.log(this.state.uniqueid)

    

    
  }

  pedirNuevas=()=>{
    console.log(this.state.procesomanual[0].cantidad)
    if(this.state.procesomanual[0].cantidad==0){
      setTimeout(() => { this.pedirFichasNuevas() }, 60000);
    }
  }

  pedirFichasNuevas=()=>{
    console.log("PIDIENDO")

    if(this.state.peticionFichas==true){
      return false;
    }else{
      this.state.peticionFichas=true
      

            //HAGO PETICIONE SPOR GRUPO CANDIDATO
    const variables_sesion= JSON.parse(localStorage.getItem("constantes"));
    console.log(variables_sesion)
    const gruposCandidatos=this.state.gruposCandidatos
    this.state.peticionFichas=false

    //SETEO PARAMETROS DE AGENDA Y FICAS A 0
    //this.setState({fichas:[]});
    //this.setState({eventosAgenda:[]});
    //VARIABLES A COMPLEMENTAR ENTRE LOS GRUPOS DE FICHA
    let fichas_grupos = []           
    const agrupaciones = []  
    const agendamientos = []
    //INICIO RECORRIDO DEL GRUPO CANDIDATO
    const total_gruposCandidatos=gruposCandidatos.length
    let total_gruposCandidatos_consultados=0
    let encontre="no"

    if(variables_sesion.log_in_out=="out" ){
      return false;
    }

    for(const i in gruposCandidatos){
        console.log(gruposCandidatos[i]);
        //PETICION SIN CONSIDERAR ESTADO DEL PROCESO
        //const cant_peticion=gruposCandidatos[i].peticion_max-variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas.length;
        //SI TENGO = NO BUSCO NADA
        console.log(variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas)
        const elGrupo=variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas
        let nuevasEncontradas=0
        for(const b in elGrupo){
         console.log(elGrupo[b].caso_estado)
         if(elGrupo[b].caso_estado=="nuevo" || elGrupo[b].caso_estado=="Asignado"){
            nuevasEncontradas++
         }
        }
        const cant_peticion=gruposCandidatos[i].peticion_max-nuevasEncontradas;
        if(cant_peticion==0){
          //this.actualizarFichas(variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas, agrupaciones, "");
          //console.log("NO PIDO "+gruposCandidatos[i].tag)
         
          //return false;
        }else if(cant_peticion>0){
          
          console.log("PIDO "+gruposCandidatos[i].tag)
        
                //CREO LAS AGRUPACIONES
                //agrupaciones.push(gruposCandidatos[i])
                var url = 'https://bs2.openpartner.cl/face?auto';
                var data = {
                              "tx"        : "FI0",
                              "tx_version": "0.1",
                              "op"        : "gf0",
                              //"op"        : "gu0",
                              "destino"   : "test",
                              "instsReq": {
                                  "face_user" : this.state.anexo,
                                  "face_group": gruposCandidatos[i].tag+":"+gruposCandidatos[i].peticion_max,
                                  "quantity"  : cant_peticion,
                                  "step"      : "nuevo",
                                  "backLimit" : moment().format('YYYY-MM-DDTHH:mm:ss'),
                                  "sorted"    : "desc"
                              }
                          }
                //PIDO FICHAS PARA UN GRUPO
                let contar_peticion = new Promise((resolve, reject) => {
                  fetch(url, {
                    method: 'POST', 
                    body: JSON.stringify(data),
                    "mime.type":"application/json; charset=utf8",  
                    headers:{
                    'Content-Type': 'text/plain'
                    }
                  })
                  .then(res => res.json())
                  .then(response => {

                        if(response){
                          this.state.peticionFichas=false
                          
                          console.log(response.casos)
                          if(response.estatus=="OK" && response.casos.length>=1){
                            const fichas_nuevas=[]
                            response.casos.forEach(function(element) {
                              //PARSEO DE DATOS 
                              console.log(element.caso_estado)
                              if(element.caso_estado=="nuevo" || element.caso_estado=="Asignado"){
                                
                                element.caso_estado="nuevo"
                                element["selcionada"]=false;
                                element["gruposCandidatos"]=gruposCandidatos[i].tag;
                                element["key_orden"]=moment(element.caso_ts_str).format("X");
                                encontre="si";

                                console.log(variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas)
                                variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas=variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas.concat(element)
                                console.log(variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas)
                                localStorage.setItem("constantes", JSON.stringify(variables_sesion));
                                console.log(element)
                                fichas_nuevas.push(element)
                              }
                            }); 
                            console.log(fichas_nuevas)
                            //const newfichas=this.state.fichas.concat(fichas_nuevas)
                            //console.log(newfichas)
                            //this.setState({fichas: newfichas});
                            if(fichas_nuevas.length>=1){
                              this.actualizarFichas(fichas_nuevas, agrupaciones, "");
                            }
                            
                            resolve("SI");
                          }else if(response.estatus=="OK" && response.casos.length==0){
                            resolve("SI")
                          }
                        }
                  })
                  .catch(error => console.error('Error:', error));
                })
                Promise.all([contar_peticion]).then(values => {
                    console.log("AAA")
                    if(values[0]=="SI" ){
                      total_gruposCandidatos_consultados++
                      console.log(total_gruposCandidatos, total_gruposCandidatos_consultados)
                      if( encontre=="si" && total_gruposCandidatos==total_gruposCandidatos_consultados){
                        //this.pedirFichas();
                        //return false;
                      }else if( encontre=="no" && total_gruposCandidatos==total_gruposCandidatos_consultados){
                         console.log("AAA")
                        this.pedirNuevas() 
                      }
                    }
                })
                





        }
    }

                
    
   

  





}




  }


  pedirFichas=(ciclo_in)=>{

    //SETEO CICLO
    const setear_proceso= this.state.procesomanual
      for(const i in setear_proceso){ setear_proceso[i].cantidad=0}
      this.setState({procesomanual:setear_proceso}) 
    //DETERMINAR NUEVA PETICION O FIHAS GESTIONADAS
    let ciclo=""
    let cantidadAdicional=0
    const variables_sesion= JSON.parse(localStorage.getItem("constantes"));
    console.log(variables_sesion.log_in_out)
    if(variables_sesion.log_in_out=="out" ){
      ciclo="gu0" //con gestion
      cantidadAdicional=300;
    }else{
      ciclo="gf0"; //nuevas
      cantidadAdicional=0
    }
    // PIDO FICHASSS
    //return false;
    console.log(this.state.peticionFichas)
    if(this.state.peticionFichas==true){
      return false;
    }else{
      this.state.peticionFichas=true


    //HAGO PETICIONE SPOR GRUPO CANDIDATO
    const variables_sesion= JSON.parse(localStorage.getItem("constantes"));
    console.log(variables_sesion)
    const gruposCandidatos=this.state.gruposCandidatos
    this.state.peticionFichas=false

    //SETEO PARAMETROS DE AGENDA Y FICAS A 0
    this.setState({fichas:[]});
    //this.setState({eventosAgenda:[]});
    //VARIABLES A COMPLEMENTAR ENTRE LOS GRUPOS DE FICHA
    let fichas_grupos = []           
    const agrupaciones = []  
    const agendamientos = []
    //INICIO RECORRIDO DEL GRUPO CANDIDATO
    const total_gruposCandidatos=gruposCandidatos.length
    let total_gruposCandidatos_consultados=0
    
     //ciclo="gu0" //con gestion 1er
     //ciclo="gf0"; //nuevas 2do
    for(const i in gruposCandidatos){
        console.log(gruposCandidatos[i]);
        //const cant_peticion=gruposCandidatos[i].peticion_max-variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas.length;
        //SI TENGO = NO BUSCO NADA
        console.log(variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas)
        const elGrupo=variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas
        let nuevasEncontradas=0
        for(const b in elGrupo){
         console.log(elGrupo[b].caso_estado)
         if(elGrupo[b].caso_estado=="nuevo" || elGrupo[b].caso_estado=="Asignado" && ciclo=="gf0"){
            nuevasEncontradas++
         }else{}
        }

        const cant_peticion=gruposCandidatos[i].peticion_max-nuevasEncontradas;
       
        
        if(cant_peticion<=0 ){
          this.actualizarFichas(variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas, agrupaciones, "","X");
          console.log("NO PIDO "+gruposCandidatos[i].tag)
         
          //return false;
        }else if(cant_peticion>0){

         /**/ 
          
          console.log("PIDO "+gruposCandidatos[i].tag)
        
                //CREO LAS AGRUPACIONES
                //agrupaciones.push(gruposCandidatos[i])
                const totalPedir=cant_peticion+cantidadAdicional
                var url = 'https://bs2.openpartner.cl/face?'+ciclo;
                var data = {
                              "tx"        : "FI0",
                              "tx_version": "0.1",
                              "op"        : ciclo,
                              //"op"        : "gu0",
                              "destino"   : "test",
                              "instsReq": {
                                  "face_user" : this.state.anexo,
                                  "face_group": gruposCandidatos[i].tag+":5",
                                  "quantity"  : totalPedir,
                                  "step"      : "nuevo",
                                  "backLimit" : moment().format('YYYY-MM-DDTHH:mm:ss'),
                                  "sorted"    : "desc"
                              }
                          }
                //PIDO FICHAS PARA UN GRUPO
                let contar_peticion = new Promise((resolve, reject) => {
                  fetch(url, {
                    method: 'POST', 
                    body: JSON.stringify(data),
                    "mime.type":"application/json; charset=utf8",  
                    headers:{
                    'Content-Type': 'text/plain'
                    }
                  })
                  .then(res => res.json())
                  .then(response => {if(response){

                    console.log(response)
                    if(response.estatus=="OK"){
                              
                              //INICIO LECTURA DE LA RESPUESTA
                              const casos_ordenados=[]
                              response.casos.forEach(function(element) {
                                  //AJUSTO ESTADOS DE LA FIVHAS AL PROCESO MANUAL
                                  console.log(element)
                                  if(element.caso_estado=="nuevo" || element.caso_estado=="Asignado" || element.caso_estado==""){
                                    element.caso_estado="nuevo";
                                  }else if(element.caso_estado=="en_gestion"){
                                    element.caso_estado="en gestion";
                                  }else if(element.caso_estado=="seguimiento"){
                                     element.caso_estado="en gestion";
                                  }else if( element.caso_estado=="agendado_propio"){
                                                                //agendado_propio
                                     element.caso_estado="agendado";
                                  }
                                  element["selcionada"]=false;
                                  element["gruposCandidatos"]=gruposCandidatos[i].tag;
                                  //element.caso_id="S"
                                  
                                  //KEDDE ORDENAMINETO
                                  if(element.caso_estado=="nuevo"){
                                    element["key_orden"]=moment(element.caso_ts_str).format("X");
                                  }else if(element.caso_estado=="en gestion"){
                                    element["key_orden"]=moment(element.caso_ts_ult_ges).format("X");
                                  }else if(element.caso_estado=="agendado"){
                                    element["key_orden"]=moment(element.caso_ts_ult_ges).format("X"); 
                                  }
                                  
                                      // nuevo=element.caso_ts_str
                                      // gestion = fechas_ultima gestion
                                      // agendado = fecha de egendamiento 

                                  //AGENDAMIENTO
                                  console.log(element)
                                  console.log(element.caso_estado)
                                  console.log(element.caso_canal)
                                    
                                  if(element.caso_estado=="agendado"){ 
                                    
                                    //console.log(element.datos_ficha.fecha_co+"/"+element.datos_ficha.fecha_co.length)
                                          if(element.caso_canal=="web"){
                                            //console.log(variables_sesion.eventosAgenda.find( agendado => agendado.id === element.caso_id ));
                                           console.log(element.caso_fecha_agendada+"T"+element.caso_hora_agendada.slice(0, 5))
                                            const newFecha=element.caso_fecha_agendada+"T"+element.caso_hora_agendada.slice(0, 5)
                                           const fecha = new Date(newFecha)
                                            agendamientos.push({
                                                id: element.caso_id,
                                                title: element.datos_ficha.doc_nucotizacion+"("+element.datos_ficha.doc_nombre+" "+element.datos_ficha.doc_Ap_paterno+")",
                                                allDay: false,
                                                start: fecha,
                                                end: fecha,
                                            })

                                          }else if(element.caso_canal=="tel"){
                                            console.log(element.caso_fecha_agendada+"T"+element.caso_hora_agendada.slice(0, 5))
                                            const newFecha=element.caso_fecha_agendada+"T"+element.caso_hora_agendada.slice(0, 5)
                                           const fecha = new Date(newFecha)
                                           
                                              agendamientos.push({
                                                  id: element.caso_id,
                                                  title:  element.caso_id+"("+element.datos_ficha.doc_nu_celular+")",
                                                  allDay: false,
                                                  start: fecha,
                                                  end:fecha,
                                              })
                                            
                                            
                                          }
                                  }
                                  //INSERTO FICHAS A AGRUPACION
                                  
                 
                              })//FIN DE RECCORRIDO DE LA RESPUESTA
                              console.log(agendamientos)
                              //ACTUALIZO DATOS EN LOCAL STORAGE
                              //variables_sesion.eventosAgenda=variables_sesion.eventosAgenda.concat(agendamientos)
                              if(variables_sesion.eventosAgenda.length>=1){
                                if(agendamientos.length>=1){
                                  let existeEnAgenda="no"
                                  for(const a in agendamientos){
                                    for(const b in variables_sesion.eventosAgenda){
                                      if(agendamientos[a].id==variables_sesion.eventosAgenda[b].id){
                                        existeEnAgenda="si"
                                      }
                                    
                                    }
                                    if(existeEnAgenda=="no"){
                                      variables_sesion.eventosAgenda=variables_sesion.eventosAgenda.concat(agendamientos[a])
                                    }
                                  }
                                  
                                }else{
                                  variables_sesion.eventosAgenda=variables_sesion.eventosAgenda
                                }
                              }else{
                                variables_sesion.eventosAgenda=agendamientos
                              }
                              this.state.eventosAgenda=variables_sesion.eventosAgenda
                              

                              console.log(variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas)
                              variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas=variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas.concat(response.casos)
                             
                              console.log(variables_sesion)
                              localStorage.setItem("constantes", JSON.stringify(variables_sesion));
                              this.actualizarFichas(variables_sesion.gruposCandidatos[gruposCandidatos[i].tag].fichas, agrupaciones, "",ciclo);
                              //ACTUALIZO DATOS
                              
                              //this.actualizarFichas(data_moment, agrupaciones, "")
                              //this.actualizarFichas(response.casos, agrupaciones, "")
                              resolve("SI")
                      }else{
                        //this.setState({eventosAgenda:[]});
                        this.actualizarFichas([], agrupaciones, "")
                      }

                  }})
                  .catch(error => console.error('Error:', error));
                 })
                 Promise.all([contar_peticion]).then(values => {
                
                    if(values[0]=="SI" ){
                      total_gruposCandidatos_consultados++
                      console.log(total_gruposCandidatos, total_gruposCandidatos_consultados)
                      if( variables_sesion.log_in_out=="out" && total_gruposCandidatos==total_gruposCandidatos_consultados){
                        variables_sesion.log_in_out="in";
                        localStorage.setItem("constantes", JSON.stringify(variables_sesion));
                        this.pedirFichas();
                        return false;
                      }
                    }
                })
    
        }


    }// CIERRO FOR
    
    //SETEO A IN LA SESION
    this.pedirNuevas();
    


}

this.llamarIndicadores();
    
}

  
llamarIndicadores=()=>{  
//return false;
    const gruposCandidatos=this.state.gruposCandidatos
    var url = 'https://bs2.openpartner.cl/face';

    // PIDO COLA
    const grupos_anyq = []
    gruposCandidatos.forEach(function(element) {
     
      grupos_anyq.push({
                      "term": {
                        "caso_grupoC.keyword": element.tag+":"+element.peticion_max
                        }
                      })

    })
     console.log(grupos_anyq)
    var url = 'https://bs2.openpartner.cl/face';
    var data = {
  "tx": "FD0",
  "op": "anyQ",
  "index": "gdm_journal_0.4",
  "query": {
    "size": 0,
    "query": {
      "bool": {
        "should":  grupos_anyq
      }
    },
    "aggs": {
      "cotizaciones": {
        "filters": {
          "filters": {
            "En Cola": {
              "bool": {
                "must": [
                  {
                    "query_string": {
                      "query": "caso_face_user:none"
                    }
                  }
                ]
              }
            }
          }
        },
        "aggs": {
          "ultimo_mes": {
            "date_range": {
              "field": "caso_tso",
              "ranges": [
                {
                  "from": "now-1M",
                  "to": "now"
                }
              ],
              "time_zone": "America/Santiago"
            },
            "aggs": {
              "unicas": {
                "cardinality": {
                  "field": "caso_id.keyword"
                }
              }
            }
          }
        }
      }
    }
  }
};
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data),
      "mime.type":"application/json; charset=utf8",  
      headers:{
      'Content-Type': 'text/plain'
      }
    })
    .then(res => res.json())
    .then(response => {

      if(response.estatus=="OK" && response.data){
        console.log(response.data.aggregations.cotizaciones.buckets["En Cola"].ultimo_mes.buckets[0].unicas.value) 
                  //console.log(response.data.aggregations.cotizaciones.buckets["En Cola"].doc_count)
        var total=response.data.aggregations.cotizaciones.buckets["En Cola"].ultimo_mes.buckets[0].unicas.value; 
        this.setState({fichasEnCola:total});

      }
            
           
            

    })

    //DESCARTADAS
    var data = {
      "tx": "FD0",
      "op": "anyQ",
      "index": "gdm_journal_0.4",
      "query": {
        "size": 0,
        "query": {
          "bool": {
            "must": [
              {
                "term": {
                  "ges_user.keyword": this.state.anexo
                }
              }
            ],
            "should": [
              {
                "term": {
                  "ges_result.keyword": "sin_interes"
                }
              },
              {
                "term": {
                  "ges_result.keyword": "datos_erroneos"
                }
              },
              {
                "term": {
                  "ges_result.keyword": "cerradoSinVenta"
                }
              }
            ],
            "minimum_should_match": 1
          }
        },
        "aggs": {
          "ultimo_mes": {
            "date_range": {
              "field": "ges_ts",
              "ranges": [
                {
                  "from": "now-1M",
                  "to": "now"
                }
              ],
              "time_zone": "America/Santiago"
            },
            "aggs": {
              "unicas": {
                "cardinality": {
                  "field": "caso_id.keyword"
                }
              }
            }
          }
        }
      }
    }
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data),
      "mime.type":"application/json; charset=utf8",  
      headers:{
      'Content-Type': 'text/plain'
      }
    })
    .then(res => res.json())
    .then(response => {

      if(response.estatus=="OK" && response.data){
                  console.log(response.data.aggregations.ultimo_mes.buckets[0].unicas.value)
                  var total=response.data.aggregations.ultimo_mes.buckets[0].unicas.value
                   this.setState({fichasDescartadas:total});

      }
            
           //console.length(response) 
            

    })

    //EXITO
    var data = {
    "tx": "FD0",
    "op": "anyQ",
    "index": "gdm_journal_0.4",
    "query" :{
        "size":0,
    "query": {
    "bool": {
      "must": [
        {
          "term": {
            "ges_user.keyword": this.state.anexo
          }
        }
      ],
      "should": [
        {
          "term": {
            "ges_result.keyword": "cerradoconVenta"
          }
        }
      ],
      "minimum_should_match": 1
    }
  },
  "aggs": {
          "ultimo_mes": {
            "date_range": {
              "field": "ges_ts",
              "ranges": [
                {
                  "from": "now-1M",
                  "to": "now"
                }
              ],
              "time_zone": "America/Santiago"
            },
            "aggs": {
              "unicas": {
                "cardinality": {
                  "field": "caso_id.keyword"
                }
              }
            }
          }
    }
        }
}
fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data),
      "mime.type":"application/json; charset=utf8",  
      headers:{
      'Content-Type': 'text/plain'
      }
    })
    .then(res => res.json())
    .then(response => {

      if(response.estatus=="OK" && response.data){
                  console.log(response.data.aggregations.ultimo_mes.buckets[0].unicas.value)
                  var total=response.data.aggregations.ultimo_mes.buckets[0].unicas.value
                   this.setState({fichasExito:total});

      }
            
           //console.length(response) 
            

    })

  }


  pedirEjecutivos=()=>{


    //console.log(this.state.anexo)

    var url = 'https://bscore.openpartner.cl/gdm';
    var data = {
                  "tx"      : "getEP",
                  "tx_user"   : this.state.anexo,
                  "tx_version": "0.3",
                  "destino"   : "test"
              };
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data),
      "mime.type":"application/json; charset=utf8",  
      headers:{
      'Content-Type': 'text/plain'
      }
    })
    .then(res => res.json())
    .then(response => {
            
            if(response.estatus=="OK"){
              const ejecutivos = [];
              /*  response.data.forEach(function(element) {
                  ejecutivos.push({
                                    "label": element.ConsultorVentas,
                                    "value": element.RUT
                  })  

                }); 

            */


               this.setState({ejecutivos:response.data});


            }
            //console.log(this.state.ejecutivos)

    })
    //.catch(error => console.error('Error:', error));




  }

  searchFiltro=(texto)=>{

    //console.log(texto)
    this.setState({searchFiltro:texto});

  }

  estadoTelefono=()=>{
    this.setState(state => ({
      verTelefono: !state.verTelefono
    }));
  }

  estadoAgenda=()=>{
    this.setState(state => ({
      verAgenda: !state.verAgenda
    }));
  }

  interfazExpandida=()=> {
    
    this.setState(state => ({
      expandida: !state.expandida
    }));
  }

  estadoLogin=(data)=> {
    console.log(data)
    //BORRO LA EDICION PARA UN NUEVO LOGIN
    this.setState({edicion:""})
    this.setState({area:data.area})
    console.log(data)
    //SETEO L AVARIABLE DEL USUARIO
    if(data.anexo!=""){
      this.setState({anexo:data.anexo});
      //TRATO STRIN DE GRUPOS PARA CREARSETEAR EL GRUPO CANDIDATO
      console.log(typeof(data.gruposCandidatos))
      const variables_sesion= JSON.parse(localStorage.getItem("constantes"));
      const newGrupoCandidato=[];
      if(typeof(data.gruposCandidatos)!="string"){
        data.gruposCandidatos.forEach(function(element_a) {
          const dato=element_a.split(":", 2);
          newGrupoCandidato.push({tag:dato[0], peticion_max:dato[1], cantidad:0, ver:true})
          console.log(variables_sesion.gruposCandidatos)
          if(variables_sesion.gruposCandidatos[dato[0]] && variables_sesion.gruposCandidatos[dato[0]].fichas.length>=1){
            variables_sesion.gruposCandidatos[dato[0]]={"peticionMaxima":dato[1],"fichas":variables_sesion.gruposCandidatos[dato[0]].fichas}
          }else{
            variables_sesion.gruposCandidatos[dato[0]]={"peticionMaxima":dato[1],"fichas":[]}
          }
          
        })
      }else if(data.gruposCandidatos!="" && typeof(data.gruposCandidatos)=="string"){
        const dato=data.gruposCandidatos.split(":", 2);
        newGrupoCandidato.push({tag:dato[0], peticion_max:dato[1], cantidad:0, ver:true}) 
        //variables_sesion.gruposCandidatos[dato[0]]={"peticionMaxima":dato[1],"fichas":[]}
        if(variables_sesion.gruposCandidatos[dato[0]] && variables_sesion.gruposCandidatos[dato[0]].fichas.length>=1){
            variables_sesion.gruposCandidatos[dato[0]]={"peticionMaxima":dato[1],"fichas":variables_sesion.gruposCandidatos[dato[0]].fichas}
          }else{
            variables_sesion.gruposCandidatos[dato[0]]={"peticionMaxima":dato[1],"fichas":[]}
          }
      }
      console.log(newGrupoCandidato)
      this.setState({gruposCandidatos:newGrupoCandidato});
      localStorage.setItem("constantes", JSON.stringify(variables_sesion));
      //LLAMO LA SFICHAS PARA ESTE USUARIO
      this.pedirFichas("gf0");
      this.pedirEjecutivos();

    }

    if(data.anexo!=""){
      this.setState({interfaz:(data.permisos[0].tag=="face" ? 'gestion' : data.permisos[0].tag)});
    }else if(data.anexo==""){
      this.setState({interfaz:"reportes_supervisor"});
    }

    const opcionesActuales=this.state.opcionesOsuario
    data.permisos.forEach(function(element_a, index_a) {
      console.log(element_a)
      console.log(opcionesActuales)
      if(element_a.tag=="reportes_supervisor"){
          opcionesActuales[3].ver=true
          

      }
      if(element_a.tag=="reportes_usuario"){
         opcionesActuales[4].ver=true

      }
      if(element_a.tag=="face"){
         opcionesActuales[0].ver=true
         opcionesActuales[1].ver=true
         opcionesActuales[2].ver=true
         
      }



    })
    
    this.setState(state => ({
        estadoLogin: !state.estadoLogin
    }));

  }

  actualizarFichas=(fichas, grupos, overlays, ciclo)=> {
   console.log(fichas)
   console.log(ciclo)
   
   const newfichas=this.state.fichas.concat(fichas)
   console.log(newfichas)
    this.setState({fichas: newfichas});
    this.setState({grupos: grupos});


    



    console.log(this.state.procesomanual)
    //this.setState({xmlOverlays: overlays});
    //ACTUALIZAR CANTIDADES DEL PROCESO
    
    const procesomanual=this.state.procesomanual
    //for(const i in procesomanual){ procesomanual[i].cantidad=0}


    //RRECORRO LA FICHAS
    fichas.forEach(function(element_a, index_a) {

        //RRECORRO EL PROCESO
        procesomanual.forEach(function(element_b, index_b) {
            
            if(element_b.tag==element_a.caso_estado){
                procesomanual[index_b].cantidad=procesomanual[index_b].cantidad+1
            }
            
            //SI EXISTEN CANALES EN EL PROCESO
            if(element_b.canales.length>0 && element_b.tag==element_a.caso_estado){

              //RRECORRO LOS CANALES
              element_b.canales.forEach(function(element_c, index_c) {
                //CUENTO CUANTOS EN ESE CANAL
                //console.log(element_b.canales[index_c].tag+"/"+element_a.tipo_caso)
                if( element_b.canales[index_c].tag == element_a.tipo_caso){
                  //console.log("SUMO")
                  //console.log(element_a.caso_ES)
                  procesomanual[index_b].canales[index_c].cantidad=procesomanual[index_b].canales[index_c].cantidad+1
                }
                //VERIFICO SI TIENE DEFINIDA TIPIFICACION
                if(element_c.tipificacion ){
                  element_c.tipificacion.forEach(function(element_d, index_d) {
                    if(element_d.tag==element_a.tipificacion){
                      procesomanual[index_b].canales[index_c].tipificacion[index_d].cantidad++

                      // element_d.cantidad++
                    }
                  })
                }
              })
            }



        });
    })
    this.setState({procesomanual:procesomanual})
    console.log(this.state.procesomanual)
    //this.pedirNuevas();

    //FILTRO CON GRUPO CANDIDATO
      this.contarFichaGc()
    
  }

  actualizarOverlayXml=(overlays)=> {
    //console.log(overlays)
    this.setState({xmlOverlays: [{"ID_ETAPA_PROCESO":"SCAN_OK", "NOTA":overlays, "ID_FICHA":overlays }]});
    
   // console.log(this.state.xmlOverlays)
  }

  estadoProceso(en_esatdo){

    //console.log(en_esatdo)
  }


  desplegarEdicion=(accion, datosFormulario, ficha, data_editada, datos_de_una_ficha_editada) => {
    //console.log(datosFormulario)
    console.log(data_editada)
    if(accion=="limpiar" || accion==""){
      this.setState({edicion:[]});
      
      const fichas_actuales=this.state.fichas 
      fichas_actuales.forEach(function(element_a, index_a) {
          element_a.selcionada=false
      })
      this.setState({fichas:fichas_actuales})
    }else if(accion=="cargar"){

      this.setState({edicion:[{"ficha": ficha, "datosFormulario":datosFormulario, "data_editada":false}]});
    

      console.log(ficha)
      const ficha_selecionada = ficha.caso_ES
      const fichas_actuales=this.state.fichas 
      fichas_actuales.forEach(function(element_a, index_a) {

        if(element_a.caso_id==ficha_selecionada){
          element_a.selcionada=1

        }else{
          element_a.selcionada=0
        }
        console.log(element_a.selcionada); console.log(ficha_selecionada)

      })
      this.setState({fichas:fichas_actuales})
      
   }else if(accion=="atualizar"){
      this.setState({edicion:[{"ficha": ficha, "datosFormulario":datosFormulario, "data_editada":data_editada}]});
      
   }else if(accion=="buscar"){
       this.setState({edicion:[]});
    

      console.log(ficha)
      const ficha_selecionada = ficha.caso_ES
      const fichas_actuales=this.state.fichas 
      fichas_actuales.forEach(function(element_a, index_a) {

        if(element_a.caso==ficha_selecionada){
          element_a.selcionada=true

        }else{
          element_a.selcionada=false
        }
        //console.log(element_a.selcionada); 
        //console.log(ficha_selecionada);

      })
      this.setState({fichas:fichas_actuales})
     
   }else if(accion=="cargar_ficha_agenda"){

      this.actualizarUniqueid(ficha)
      console.log(ficha)
      const id_ficha_selecionada = ficha
      const fichas_actuales=this.state.fichas 
      let fichaSelecionada = {}
      fichas_actuales.forEach(function(element_a, index_a) {

        if(element_a.caso_id==id_ficha_selecionada){
          element_a.selcionada=true;
          
          fichaSelecionada={
            canal:element_a.caso_canal,
            anexo:element_a.caso_face_user,
            acciones: element_a.acciones,
            caso_CAM: element_a.caso_TaskId,
            caso_ES: id_ficha_selecionada,
            datos_ficha: element_a,
            estado_proceso: element_a.caso_estado,
            nro_gestion: element_a.caso_gestiones,
            timeline: element_a.timeline,
            tipo_caso:element_a.caso_tipo,
            tipificacion:"",
            selcionada:true,
            gc:element_a.gruposCandidatos
          }
          //fichaSelecionada["caso_ES"]=id_ficha_selecionada;
          //this.setState({edicion:[{"ficha": element_a, "datosFormulario":datosFormulario}]});
          
        }else{
          element_a.selcionada=false
        }
        

      })
      console.log(fichaSelecionada)
      this.setState({edicion:[{"ficha": fichaSelecionada, "datosFormulario":datosFormulario}]});
      this.setState({fichas:fichas_actuales})
      this.llamarIndicadores();

      
   }else if(accion=="atualizar_una_ficha"){
      //console.log(ficha)
      
      //console.log(datos_de_una_ficha_editada)
      //console.log(ficha_selecionada)
      

      const ficha_selecionada = ficha.caso_ES
      const fichas_actuales=this.state.fichas 
      console.log(datos_de_una_ficha_editada)
      console.log(ficha_selecionada)
      console.log(fichas_actuales)
      const estado_caso=datos_de_una_ficha_editada.caso_estado
      let estado_caso_new="";
      if(estado_caso=="nuevo" || estado_caso=="Asignado" || estado_caso==""){
        estado_caso_new="nuevo";
      }else if(estado_caso=="en_gestion"){
        estado_caso_new="en gestion";
      }else if(estado_caso=="seguimiento"){
        estado_caso_new="en gestion";
      }else if( estado_caso=="agendado_propio" || estado_caso=="agendado"){
        estado_caso_new="agendado";
      }else if( estado_caso=="finGestion"){
        estado_caso_new="finGestion";
      }

      const fichas_restantes=[]
      fichas_actuales.forEach(function(element_a, index_a) {
        console.log(ficha_selecionada+"//"+element_a.caso_id)
          if(ficha_selecionada==element_a.caso_id){
            element_a.selcionada="1";
            element_a.estado_proceso=estado_caso_new;
            element_a.caso_estado=estado_caso_new;
            element_a.datos_ficha.caso_estado=estado_caso_new;

            element_a.caso_TaskId=datos_de_una_ficha_editada.caso_TaskId
            element_a.datos_ficha.caso_TaskId=datos_de_una_ficha_editada.caso_TaskId
            
            element_a.datos_ficha.caso_gestiones=datos_de_una_ficha_editada.caso_gestiones;
            element_a.key_orden=moment(datos_de_una_ficha_editada.caso_ts_ult_ges).format("X");
            

          }

          

          if(ficha_selecionada==element_a.caso_id && estado_caso_new!="finGestion"){
            fichas_restantes.push(element_a)

          }else if(ficha_selecionada!=element_a.caso_id){
            fichas_restantes.push(element_a)
          }
          
      })

      //ACTUALIZO FICHA EN APP
      console.log(fichas_restantes);
      const procesomanual=this.state.procesomanual
      for(const i in procesomanual){ procesomanual[i].cantidad=0}
      this.setState({procesomanual:procesomanual})
      this.setState({fichas:[]});
      this.setState({edicion:[]});
      this.setState({verAgenda:false});
      this.actualizarFichas(fichas_restantes, [], "")

      //ACTUALIZO DATO TEMPORAL
      const variables_sesion= JSON.parse(localStorage.getItem("constantes"));
      
      for(const i in variables_sesion.gruposCandidatos){
        //onsole.log(variables_sesion.gruposCandidatos[a])
        const fichas_restantes=[]
        for(const b in variables_sesion.gruposCandidatos[i].fichas){
          console.log(variables_sesion.gruposCandidatos[i].fichas[b])
          if(ficha_selecionada==variables_sesion.gruposCandidatos[i].fichas[b].caso_id){
            variables_sesion.gruposCandidatos[i].fichas[b].selcionada="1";
            variables_sesion.gruposCandidatos[i].fichas[b].estado_proceso=estado_caso_new;
            variables_sesion.gruposCandidatos[i].fichas[b].caso_estado=estado_caso_new;
            variables_sesion.gruposCandidatos[i].fichas[b].datos_ficha.caso_estado=estado_caso_new;

            variables_sesion.gruposCandidatos[i].fichas[b].caso_TaskId=datos_de_una_ficha_editada.caso_TaskId
            variables_sesion.gruposCandidatos[i].fichas[b].datos_ficha.caso_TaskId=datos_de_una_ficha_editada.caso_TaskId
            
            variables_sesion.gruposCandidatos[i].fichas[b].datos_ficha.caso_gestiones=datos_de_una_ficha_editada.caso_gestiones;
            variables_sesion.gruposCandidatos[i].fichas[b].key_orden=moment(datos_de_una_ficha_editada.caso_ts_ult_ges).format("X");
            
          }

          if(ficha_selecionada==variables_sesion.gruposCandidatos[i].fichas[b].caso_id && estado_caso_new!="finGestion"){
            fichas_restantes.push(variables_sesion.gruposCandidatos[i].fichas[b])

          }else if(ficha_selecionada!=variables_sesion.gruposCandidatos[i].fichas[b].caso_id){
            fichas_restantes.push(variables_sesion.gruposCandidatos[i].fichas[b])
          }

          //SI ES UNA AGENDADA
          if(estado_caso_new=="agendado" && ficha_selecionada==variables_sesion.gruposCandidatos[i].fichas[b].caso_id){
            console.log(variables_sesion.eventosAgenda)

           
            const newFecha=new Date(datos_de_una_ficha_editada.ges_fecha_agendamiento+"T"+datos_de_una_ficha_editada.ges_hora_agendamiento.slice(0, 5))
            

            let existeEnAgenda="no"
            for(const i in variables_sesion.eventosAgenda){
              if(variables_sesion.eventosAgenda[i].id==ficha_selecionada){
                  variables_sesion.eventosAgenda[i].start=newFecha;
                  variables_sesion.eventosAgenda[i].end=newFecha;
                  existeEnAgenda="si"
              }
            }

            if(existeEnAgenda=="no"){

              let titulo=""
              if(variables_sesion.gruposCandidatos[i].fichas[b].caso_canal=="web"){
                titulo=variables_sesion.gruposCandidatos[i].fichas[b].datos_ficha.doc_nucotizacion+"("+variables_sesion.gruposCandidatos[i].fichas[b].datos_ficha.doc_nombre+" "+variables_sesion.gruposCandidatos[i].fichas[b].datos_ficha.doc_Ap_paterno+")";                                 
              }else{
                titulo=variables_sesion.gruposCandidatos[i].fichas[b].caso_id+"("+variables_sesion.gruposCandidatos[i].fichas[b].datos_ficha.doc_nu_celular+")";
              }

              variables_sesion.eventosAgenda.push({
                                                  id: ficha_selecionada,
                                                  title: titulo,
                                                  allDay: false,
                                                  start: newFecha,
                                                  end: newFecha,
                                              })
            }
            console.log(variables_sesion.eventosAgenda)
          }

        }
        variables_sesion.gruposCandidatos[i].fichas=fichas_restantes

      }
       this.setState({eventosAgenda:variables_sesion.eventosAgenda});
     
      localStorage.setItem("constantes", JSON.stringify(variables_sesion))
      this.pedirFichasNuevas();
      this.llamarIndicadores();
      
     
   }
   //this.llamarIndicadores();

  }


  filtroFichas=(filtro)=>{
    console.log(filtro)
    if(filtro=="nuevo"){
      this.pedirFichasNuevas();
    }
   

//return false;
    //procesomanualFiltro
    //this.pedirFichas()
    const filtro_actual=this.state.procesomanualFiltro
    const procesomanual=this.state.procesomanual

    // SI EL FILTRO ESTA VACIO
    //console.log(filtro_actual.length)
    if(filtro_actual.length==0){
      //LLENO EL FILTO CON TODOS A EXCEPCION DEL QUE SELECIONE
      

      //SETO TODOS A FALSE A ECEPCION DEL QUE SELECIONE EN EL PROCESO
      procesomanual.forEach(function(element, index) {
        //PRIMER NIVEL
        //if(element.tag==filtro){
            
            if(element.tag==filtro){
              procesomanual[index].ver=true
              
            }else{
              procesomanual[index].ver=false
             
              
            }
             
             if(element.tag!=filtro){
                //console.log(element.tag+"/"+filtro)
                filtro_actual.push(element.tag)
                //console.log("oculto")
              }
            
        //}
      })
      this.setState({procesomanualFiltro:filtro_actual})
      this.setState({procesomanual:procesomanual})
      //FILTRO CON GRUPO CANDIDATO
      this.contarFichaGc()
      
      //console.log(procesomanual)
      //console.log(filtro_actual)
      return false;

    }


    // NO ESTA
    //console.log(filtro_actual)
    if(filtro_actual.indexOf(filtro)==-1){
      //LLENO EL FILTRO
      filtro_actual.push(filtro)
      //ACTUALIZO EL RPOCESO
      procesomanual.forEach(function(element, index) {
        //PRIMER NIVEL
        if(element.tag==filtro){
            procesomanual[index].ver=false
            
        }
        //SEGUNDO NIVEL
        element.canales.forEach(function(element_b, index_b) {
          if(element_b.tag==filtro){
            procesomanual[index].canales[index_b].ver=false
          }
          //TERCER NIVEL
          if(element_b.tipificacion){
            element_b.tipificacion.forEach(function(element_c, index_c) {
              if(element_c.tag==filtro){
                procesomanual[index].canales[index_b].tipificacion[index_c].ver=false
              }

            })
          }
          

        })


      });
      //FILTRO CON GRUPO CANDIDATO
      this.contarFichaGc()
    }else{
      //SI ESTA
      filtro_actual.splice(filtro_actual.indexOf(filtro), 1)
      //ACTUALIZO EL RPOCESO
       procesomanual.forEach(function(element, index) {
        //PRIMER NIVEL
        if(element.tag==filtro){
            procesomanual[index].ver=true
            
        }
        //SEGUNDO NIVEL
        element.canales.forEach(function(element_b, index_b) {
          if(element_b.tag==filtro){
            procesomanual[index].canales[index_b].ver=true
          }
          //TERCER NIVEL
          if(element_b.tipificacion){
            element_b.tipificacion.forEach(function(element_c, index_c) {
              if(element_c.tag==filtro){
                procesomanual[index].canales[index_b].tipificacion[index_c].ver=true
              }

            })
          }

        })
      });
       //FILTRO CON GRUPO CANDIDATO
      this.contarFichaGc()
    }
    this.setState({procesomanualFiltro:filtro_actual})
    this.setState({procesomanual:procesomanual})
    
    
    



  }

  navegarInterfaz=(opcion)=>{

    console.log(opcion)
  
    if(opcion=="salir"){

      const variables_sesion=JSON.parse(localStorage.getItem("constantes"))
      if(variables_sesion.usuario!="" && variables_sesion.clave!=""){
        variables_sesion.usuario = ""
        variables_sesion.clave = ""
        variables_sesion.log_in_out="out"
        variables_sesion.gruposCandidatos = {}
        variables_sesion.eventosAgenda=[]
        localStorage.setItem("constantes", JSON.stringify(variables_sesion))
      }
      this.setState({estadoLogin:false})
      this.setState({interfaz:""})
      this.setState({edicion:""})
      this.setState({eventosAgenda:[]})
      this.setState({opcionesOsuario:[
                        {
                          opcion:"fab fa-trello", 
                          funcion:"gestion",
                          ver: false
                        },
                        {
                          opcion:"far fa-calendar-alt", 
                          funcion:"agenda",
                          ver: false
                        },
                        {
                          opcion:"fa fa-headset", 
                          funcion:"telefono",
                          ver: false
                        },
                        {
                          opcion:"fas fa-chart-pie", 
                          funcion:"reportes_supervisor",
                          ver: false
                        },
                        {
                          opcion:"fas fa-chart-line", 
                          funcion:"reporte",
                          ver: false
                        },
                        {
                          opcion:"fas fa-user-times", 
                          funcion:"salir",
                          ver: true
                        }
                       ]})
      
      
    }else if(opcion=="telefono"){

      this.setState(state => ({
        verTelefono: !state.verTelefono
      }));

      console.log(this.state.verTelefono)

    }else if(opcion=="agenda"){

      this.setState(state => ({
        verAgenda: !state.verAgenda
      }));


    }else{
      this.setState({interfaz:opcion})

    }
  }

  /*<div className="col-12">
                        <div id="divFichas" className='row'>
                          <div id="lista_fichas" className="col-sm-12 col-md-12 col-lg-12 accordion h-75"  >
                            {this.state.fichasprocesadas}
                          </div>
                        </div>
                      </div>*/


  render() {

   
    
    if(this.state.estadoLogin==false){

      return (
            <Login 
                  tipoLogin={this.state.tipoLogin} 
                  estadoLogin={this.estadoLogin}
                  actualizarFichas={this.actualizarFichas}


            />
        );
    }else if(this.state.estadoLogin==true &&  this.state.interfaz=="gestion"){
      return (

        <div className="container-fluid h-100">
          

          {this.state.verTelefono ==true && <Vertelefono estadoTelefono={this.estadoTelefono} actualizarUniqueid={this.actualizarUniqueid} anexo={this.state.anexo} />}
           {this.state.verAgenda ==true && <Agenda  
                                              estadoAgenda={this.estadoAgenda} 
                                              eventosAgenda={this.state.eventosAgenda}
                                              llamafichaDesdeAgenda={this.llamafichaDesdeAgenda}
                                              edicion={this.state.edicion}
                                              ejecutivos={this.state.ejecutivos}
                                              anexo={this.state.anexo}
                                              actualizar={this.pedirFichas}
                                              desplegarEdicion={this.desplegarEdicion}
                                              area={this.state.area}
                                          />}
          
          <div className="row">
            <div className="col-12">
                        <OpcioneDeNavegacion  
                              opciones={this.state.opcionesOsuario} 
                              interfazExpandida={this.interfazExpandida} 
                              estado={this.state.expandida}
                              navegarInterfaz={this.navegarInterfaz}
                          />
            </div>
          </div>
          <div id="contenedor_app" className="row h-100 ">
                
                
                <div id="barra_lateral_fichas" className="col-2" style={{display: (this.state.expandida ? 'block' : 'none')}}>
                   
                   <div className="row h-25">

                    <Search  
                          procesomanual={this.state.procesomanual} 
                          filtroFichas={this.filtroFichas} 
                          filtro={this.state.procesomanualFiltro}
                          searchFiltro={this.searchFiltro}
                          gruposCandidatos={this.state.gruposCandidatos}
                          actualizarGrupoCandidato={this.actualizarGrupoCandidato}
                    />
                     
                   </div>

                   <div className="row h-75">
                      
                      
                      <ConstruirFichas 
                            anexo={this.state.anexo}
                            fichas={this.state.fichas} 
                            grupos={this.state.grupos} 
                            filtro={this.state.procesomanualFiltro}
                            filtroFichas={this.filtroFichas}
                            searchFiltro={this.state.searchFiltro}
                            actualizarOverlayXml={this.actualizarOverlayXml} 
                            desplegarEdicion={this.desplegarEdicion}
                            //procesomanual={this.state.procesomanual}
                            actualizarUniqueid={this.actualizarUniqueid}
                            gruposCandidatos={this.state.gruposCandidatos}
                        /> 



                    </div>
                </div>
                <div className={this.state.expandida ? 'col-8' : 'col-12'}>
                  <div className="row h-100">
                      <div id="indicadores" className="col-12 h-25">
                         <div className="row contenedor_indicadores">
                            
                            <div className="col-2">
                                <a className="expandir" onClick={this.interfazExpandida}> 
                                    {this.state.expandida ? <i className="fas fa-angle-left"></i> : <i className="fas fa-angle-right"></i>}
                                </a>

                              <div className="row indicaddor">
                                <div className="col-12">
                                   <div className="row">
                                      <div className="col-12 cantidad">{this.state.fichasEnCola}</div>
                                      <div className="col-12 descripcion">Con. en Cola</div>
                                   </div>
                                </div>
                              </div>



                            </div>
                            
                            <div className="col-6">
                              <div className="row">
                                  <ProcesoManual 
                                      procesomanual={this.state.procesomanual}
                                      procesomanualFiltro={this.state.procesomanualFiltro} 
                                      filtroFichas={this.filtroFichas} />
                              </div>
                            </div>
                            
                            <div className="col-4">
                              <div className="row indicaddor">
                                <div className="col-6">
                                   <div className="row">
                                      <div className="col-12 cantidad">{this.state.fichasDescartadas}</div>
                                      <div className="col-12 descripcion">Descartados</div>
                                   </div>
                                </div>
                                <div className="col-6">
                                   <div className="row">
                                      <div className="col-12 cantidad">{this.state.fichasExito}</div>
                                      <div className="col-12 descripcion">Exitos</div>
                                   </div>
                                </div>


                              </div>



                            </div>
                            
                            
                          
                        </div>
                      </div>
                      <div className="col-12 h-75" >
                        <div className="row h-100">
                          <div   className="col-12 h-100">
                                <AreaEdicion 
                                  formulario={this.state.edicion} 
                                  estadoAgenda={this.estadoAgenda}
                                  ejecutivos={this.state.ejecutivos}
                                  anexo={this.state.anexo}
                                  pedirFichas={this.pedirFichas}
                                  desplegarEdicion={this.desplegarEdicion}
                                  uniqueid={this.state.uniqueid}
                                  area={this.state.area}
                                 />

                          </div>
                          
                        </div>
                      </div>
                    </div>
                </div>
                <div id="lateral_derecho" className={this.state.expandida ? 'col-2 h-100' : 'col-3 h-100'} style={{display: (this.state.expandida ? 'block' : 'none')}}>
                  
                      <div className="row h-25" ></div>
                      <div id="lineadetiempo" className="row h-75" >
                        <Timelines  
                          edicion={this.state.edicion}
                          area={this.state.area}
                        />
                          
                      </div>
                  
                  
                </div>
            </div>
          </div>
        );
    }else if(this.state.estadoLogin==true &&  this.state.interfaz=="reporte"){
      return (
        <div className="container-fluid h-100">
          <div className="row">
            <div className="col-12">
                        <OpcioneDeNavegacion  
                          opciones={this.state.opcionesOsuario} 
                          interfazExpandida={this.interfazExpandida} 
                          estado={this.state.expandida}
                          navegarInterfaz={this.navegarInterfaz}
                        />
            </div>
          </div>
          <div id="contenedor_app" className="row h-100 ">

                <ReporteUsuario anexo={this.state.anexo}/>
                
          </div>
        </div>
      );
    }else if(this.state.estadoLogin==true &&  this.state.interfaz=="reportes_supervisor"){
      return (
        <div className="container-fluid h-100">
          <div className="row">
            <div className="col-12">
                        <OpcioneDeNavegacion  
                          opciones={this.state.opcionesOsuario} 
                          interfazExpandida={this.interfazExpandida} 
                          estado={this.state.expandida}
                          navegarInterfaz={this.navegarInterfaz}
                        />
            </div>
          </div>
          <div id="contenedor_app" className="row h-100 ">
                <ReporteSupervisor anexo={this.state.anexo}/>
          </div>
        </div>
      );
    }else if(this.state.estadoLogin==true &&  this.state.interfaz=="supervision"){
      return (
        <div className="container-fluid h-100">
          <div className="row">
            <div className="col-12">
                        <OpcioneDeNavegacion  
                          opciones={this.state.opcionesOsuario} 
                          interfazExpandida={this.interfazExpandida} 
                          estado={this.state.expandida}
                          navegarInterfaz={this.navegarInterfaz}
                        />
            </div>
          </div>
          <div id="contenedor_app" className="row h-100 ">
              <div id="barra_lateral_fichas" className="col-2" style={{display: (this.state.expandida ? 'block' : 'none')}}>
                   
                   <div className="row h-25">

                    <Search  
                          procesomanual={this.state.procesomanual} 
                          filtroFichas={this.filtroFichas} 
                          filtro={this.state.procesomanualFiltro}
                          searchFiltro={this.searchFiltro}
                    />
                     
                   </div>

                   <div className="row h-75">
                      
                      
                      <ConstruirFichas 
                            anexo={this.state.anexo}
                            fichas={this.state.fichas} 
                            grupos={this.state.grupos} 
                            filtro={this.state.procesomanualFiltro}
                            filtroFichas={this.filtroFichas}
                            searchFiltro={this.state.searchFiltro}
                            actualizarOverlayXml={this.actualizarOverlayXml} 
                            desplegarEdicion={this.desplegarEdicion}
                            //procesomanual={this.state.procesomanual}
                            actualizarUniqueid={this.actualizarUniqueid}
                        /> 



                    </div>
                </div>
                <div className={this.state.expandida ? 'col-10' : 'col-12'}>
                  <div className="row h-100">
                      
                      <div className="col-12 h-100" >
                        <div className="row h-100">
                          <div   className="col-12 h-100">
                                <AreaEdicion 
                                  formulario={this.state.edicion} 
                                  estadoAgenda={this.estadoAgenda}
                                  ejecutivos={this.state.ejecutivos}
                                  anexo={this.state.anexo}
                                  pedirFichas={this.pedirFichas}
                                  desplegarEdicion={this.desplegarEdicion}
                                  uniqueid={this.state.uniqueid}

                                 />

                          </div>
                          
                        </div>
                      </div>
                    </div>
                </div>
                
          </div>
        </div>
      );
    }else if(this.state.estadoLogin==true &&  this.state.interfaz==""){
      return (
        <div className="container-fluid h-100">
          <div className="row">
            <div className="col-12">
                        <OpcioneDeNavegacion  
                          opciones={this.state.opcionesOsuario} 
                          interfazExpandida={this.interfazExpandida} 
                          estado={this.state.expandida}
                          navegarInterfaz={this.navegarInterfaz}
                        />
            </div>
          </div>
          <div id="contenedor_app" className="row h-100 ">
                
          </div>
        </div>
      );
    }  
  }
}

class OpcioneDeNavegacion extends Component {

/*
                              <BpmnViewer xmlProceso={this.state.xmlProceso} xmlOverlays={this.state.xmlOverlays} estadoProceso={this.state.xmlViwEstadoProceso}/>
                            */

  interfazExpandida = (event) => {

    event.preventDefault();
    this.props.interfazExpandida(this.props);
  }

  render() {

    const opciones = this.props.opciones
    const listItems = opciones.map((number) => (number.ver==true) ?

      <button key={number.opcion} type="button"  onClick={() => this.props.navegarInterfaz(number.funcion)} className="btn btn-light">
        <i className={number.opcion}></i>
      </button>
      : 
      <div  key={number.opcion}></div>

    );



    
    return (
      <div id="navegacion" className="row">
        <nav className="navbar navbar-light bg-light">
          <li className="navbar-brand"></li>
          <div className="btn-group" role="group" aria-label="Basic example">
            {listItems}
          </div>
        </nav>
      </div>
    );
  }

}

class AppBoton extends Component {
  render() {
    return (
            <button> 
                {this.props.estado.isToggleOn ? '<' : '>'}
            </button>
        
    );
  }
}



export default App;

