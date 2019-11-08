import React, { Component } from 'react';
import {Form} from 'react-formio';
import './AreaEdicion.css';
import moment from 'moment';
import { detalleLlamadaForm } from '../forms/detalleLlamadaForm.json';

/*import { prueba } from './formularios/Prueba.json';
import { agendamiento } from './formularios/Tipificacion_Agendamiento.json';
import { seguimiento } from './formularios/Tipificacion_casos_en_seguimiento.json';*/


class AreaEdicion extends Component {

  constructor(props) {
    super(props);
    this.state = {  
       caso_id:"",
       caso_taskId:"",
       caso_gestiones:"",
       ficha_estado:"",
       ficha_canal:"",
       expandida: false,
       formulario:"",
       detalleLLamada:"",
       data_editada:false,
       uniqueid:"",
       caso_instance:""

     }

     this.ocultarfomrulario=this.ocultarfomrulario.bind(this)
     this.mostrarfomrulario=this.mostrarfomrulario.bind(this)
     
     
  }

  actualizarformularios(nuevoFormulario){
    
    console.log(nuevoFormulario)
    this.setState({data_editada:false});
      this.setState({caso_ES:nuevoFormulario.formulario[0].ficha.datos_ficha.caso_id});
      //ACTUALIZO ESTADO DEL AREA DE EDICION
       this.setState({caso_id:nuevoFormulario.formulario[0].ficha.datos_ficha.caso_id});
       this.setState({caso_taskId:nuevoFormulario.formulario[0].ficha.datos_ficha.caso_TaskId});
       this.setState({caso_instance:nuevoFormulario.formulario[0].ficha.datos_ficha.caso_instance});
       this.setState({caso_gestiones:nuevoFormulario.formulario[0].ficha.datos_ficha.caso_gestiones});
       if(nuevoFormulario.formulario[0].ficha.estado_proceso=="nuevo"){
            this.setState({ficha_estado:"nuevo"});
        }else if(nuevoFormulario.formulario[0].ficha.estado_proceso=="en_gestion" || nuevoFormulario.formulario[0].ficha.estado_proceso=="en gestion"){
            this.setState({ficha_estado:"en_gestion"});
        }else if(nuevoFormulario.formulario[0].ficha.estado_proceso=="agendado"){
            this.setState({ficha_estado:"agendado"});
        }

       
      //ACTUALIZO CANAL
      this.setState({ficha_canal:nuevoFormulario.formulario[0].ficha.canal});
      //EXTRAIGO LOS EJECUTIVOS
      const ejecutivos = [];
      const los_ejecitivos=this.props.ejecutivos
      //console.log(los_ejecitivos)
      los_ejecitivos.forEach(function(element) {
        
        ejecutivos.push({
                                    "label": element.ConsultorVentas,
                                    "value": element.RUT
        })  

      }); 
      //DETERMINO LA CONSTANTE FORMULARIO
      const f=nuevoFormulario.formulario[0].datosFormulario
     // this.setState({formulario:""});
     // this.setState({formulario:"detalleLLamada"});
      console.log(nuevoFormulario.formulario[0].ficha.canal)
      if(nuevoFormulario.formulario[0].ficha.canal=="web") {
        
        this.state.formulario="detalleLLamada";
        const newForm=detalleLLamada 
        //PESTAÑA INFO CLIENTE = detalleLLamada.components[0].components[0]
        newForm.components[0].components[0].components[0].columns[0].components[0].defaultValue=f.doc_nu_documento
        newForm.components[0].components[0].components[0].columns[0].components[1].defaultValue=f.doc_nombre
        newForm.components[0].components[0].components[0].columns[0].components[2].defaultValue=f.doc_Ap_paterno
        newForm.components[0].components[0].components[0].columns[0].components[3].defaultValue=f.doc_nu_telefono

        newForm.components[0].components[0].components[0].columns[1].components[0].defaultValue=f.doc_nucotizacion
        newForm.components[0].components[0].components[0].columns[1].components[1].defaultValue=f.doc_version
        newForm.components[0].components[0].components[0].columns[1].components[2].defaultValue=f.doc_lugaratencion

        newForm.components[0].components[0].components[1].columns[0].components[0].defaultValue=f.doc_no_correo
        newForm.components[0].components[0].components[1].columns[1].components[0].defaultValue=f.doc_Comuna
        newForm.components[0].components[0].components[1].columns[2].components[0].defaultValue=f.doc_no_direccion
        //PESTAÑA INFORMACION COMPLEMENTARIA = newForm.components[0].components[1] 
        //VEHICULO EN PARTE DE PAGO
        newForm.components[0].components[1].components[0].components[0].columns[0].components[0].defaultValue=f.doc_Retoma_no_patente
        newForm.components[0].components[1].components[0].components[0].columns[0].components[1].defaultValue=f.doc_Retoma_no_version
        newForm.components[0].components[1].components[0].components[0].columns[1].components[0].defaultValue=f.doc_Retoma_no_modelo
        newForm.components[0].components[1].components[0].components[0].columns[1].components[1].defaultValue=f.doc_Retoma_nu_anio
        newForm.components[0].components[1].components[0].components[0].columns[2].components[0].defaultValue=f.doc_Retoma_no_marca
        newForm.components[0].components[1].components[0].components[0].columns[2].components[1].defaultValue=f.doc_Retoma_ValorRetoma
        //CREDITO
        newForm.components[0].components[1].components[1].components[0].columns[0].components[0].defaultValue=f.doc_Credito_Tipo
        newForm.components[0].components[1].components[1].components[0].columns[0].components[1].defaultValue=f.doc_Credito_TotalaFinanciar
        newForm.components[0].components[1].components[1].components[0].columns[0].components[2].defaultValue=f.doc_Credito_Saldo
        newForm.components[0].components[1].components[1].components[0].columns[1].components[0].defaultValue=f.doc_Credito_MontoPie
        newForm.components[0].components[1].components[1].components[0].columns[1].components[1].defaultValue=f.doc_Credito_ValorCuota
        newForm.components[0].components[1].components[1].components[0].columns[1].components[2].defaultValue=f.doc_Credito_CAE
        newForm.components[0].components[1].components[1].components[0].columns[2].components[0].defaultValue=f.doc_Credito_Cuotas
        newForm.components[0].components[1].components[1].components[0].columns[2].components[1].defaultValue=f.doc_Credito_CostoTotal
        //SEURO
        newForm.components[0].components[1].components[2].components[0].columns[0].components[0].defaultValue=f.doc_Seguro_Deducible
        newForm.components[0].components[1].components[2].components[0].columns[1].components[0].defaultValue=f.doc_Seguro_PrimaAnual
        newForm.components[0].components[1].components[2].components[0].columns[2].components[0].defaultValue=f.doc_Seguro_PrimaMensual
        //PESTAÑA HISTORICO = detalleLLamada.components[0].components[2] 
        //VEHICULO EN PARTE DE PAGO
        /*detalleLLamada.components[0].components[2].components[0].components[0].columns[0].components[0].defaultValue=f.nucotizacion
        detalleLLamada.components[0].components[2].components[0].components[0].columns[0].components[1].defaultValue=f.Retoma_no_version
        detalleLLamada.components[0].components[2].components[0].components[0].columns[1].components[0].defaultValue=f.Retoma_no_modelo
        detalleLLamada.components[0].components[2].components[0].components[0].columns[1].components[1].defaultValue=f.Retoma_nu_anio
        detalleLLamada.components[0].components[2].components[0].components[0].columns[2].components[0].defaultValue=f.Retoma_no_marca
        detalleLLamada.components[0].components[2].components[0].components[0].columns[2].components[1].defaultValue=f.Retoma_ValorRetoma*/
        

        //RESULTADO DE LA LLAMADA
        seguimiento.components[0].components[2].columns[0].components[0].data.values=ejecutivos
        //console.log(seguimiento.components[0].components[2].columns[0].components[0].data.values)
        
        this.state.detalleLLamada=newForm
      
      }else if(nuevoFormulario.formulario[0].ficha.canal=="tel"){
        this.state.formulario="detalletelefonia";
        const newForm=detalletelefonia 
        //PESTAÑA INFO CLIENTE = detalleLLamada.components[0].components[0]
		    newForm.components[0].components[0].components[0].defaultValue=f.doc_nu_documento
        newForm.components[0].components[0].components[1].defaultValue=f.doc_nombre
        newForm.components[0].components[0].components[2].defaultValue=f.doc_Ap_paterno
        newForm.components[0].components[0].components[3].defaultValue=f.doc_patente
        this.state.detalleLLamada=newForm
      }



      console.log(this.state)
      this.mostrarfomrulario()
      console.log(this.state)

      //this.setState({expandida:true});


  }


  componentWillReceiveProps(nextProps){
    console.log(nextProps.formulario)
     this.ocultarfomrulario()
     
     
    //console.log(nextProps.formulario.length)
    if(nextProps.formulario.length>0){
      
      this.actualizarformularios(nextProps); 

    }
    

    
    
  }

  verFomrularioTipificacion(text) {
    console.log(text)
    console.log(this.state.ficha_canal)
    console.log(this.state.ficha_estado)
    if(text=="tipificacion"){
        if(this.state.ficha_estado=="nuevo" || this.state.ficha_estado=="en gestion" || this.state.ficha_estado=="en_gestion"){
            this.setState({formulario:"seguimiento"});
        }else if(this.state.ficha_estado=="agendado"){
            this.setState({formulario:"tipificacion"});

        }
    }else if(text=="detalleLLamada"){
        if(this.state.ficha_canal=="web") {
            this.setState({formulario:"detalleLLamada"});
        }else if(this.state.ficha_canal=="tel"){
            this.setState({formulario:"detalletelefonia"});
        }
        
    }
    console.log(this.state.formulario)
  }

  

  enviargestion = (event) => {

    document.getElementById("submit").setAttribute("disabled","disabled");

    console.log(event)

     //const fecha_seguimiento="";
     //const fechas_seguimiento="";
     const items_doc_data={}
    if(event.data.select=="agendamiento_propio"){



        /*console.log(event.data.fechaDeAgendamiento)
        //const fechas_seguimiento=event.data.fechaDeAgendamiento
        //const fechas_seguimiento=fecha_seguimiento.split("T",2)
        items_doc_data["ges_ciudad_agenda"]=""
        items_doc_data["ges_comentario_sv"]=event.data.comentarios
        items_doc_data["ges_comuna_agenda"]=""
        items_doc_data["ges_comentario_gestion"]=""
        items_doc_data["ges_fecha_next"]=event.data.fechaDeAgendamientoPropio.slice(0, 10)
        items_doc_data["ges_hora_next"]=event.data.fechaDeAgendamientoPropio.slice(11, 18)
        items_doc_data["ges_resultado"]=event.data.select
        items_doc_data["ges_rut_asesor_piso"]=""
        items_doc_data["ges_sucursal_agenda"]=""
        items_doc_data["ges_ts"]=this.props.formulario[0].datosFormulario.caso_ts
        items_doc_data["ges_tso"]=moment().format('YYYY-MM-DDTHH:mm:ss')
        items_doc_data["ges_user"]=this.props.anexo*/
        
      
    }else{

        /*items_doc_data["ges_ciudad_agenda"]=""
        items_doc_data["ges_comentario_sv"]=event.data.comentarios
        items_doc_data["ges_comuna_agenda"]=""
        items_doc_data["ges_comentario_gestion"]=""
        items_doc_data["ges_fecha_next"]=""
        items_doc_data["ges_hora_next"]=""
        items_doc_data["ges_resultado"]=event.data.select
        items_doc_data["ges_rut_asesor_piso"]=""
        items_doc_data["ges_sucursal_agenda"]=""
        items_doc_data["ges_tso"]=moment().format('YYYY-MM-DDTHH:mm:ss')
        items_doc_data["ges_ts"]=this.props.formulario[0].datosFormulario.caso_ts
        items_doc_data["ges_user"]=this.props.anexo*/

        //const fechas_seguimiento=event.data.fechaDeAgendamiento
        //const fechas_seguimiento=fecha_seguimiento.split("T",2)
        //items_doc_data["ges_comentario_sv"]=event.data.comentarios
        //items_doc_data["tip_2agente"]=""
       // items_doc_data["tip_2piso"]=""
       // items_doc_data["follow_date"]=event.data.fechaDeAgendamientoPropio.slice(0, 10)
        //items_doc_data["folow_time"]=event.data.fechaDeAgendamientoPropio.slice(11, 18)
        //items_doc_data["ges_result"]=event.data.select
        //items_doc_data["follow_type"]=""

    }
       
    //this.props.formulario[0].datosFormulario["comentario_sv"]=event.data.comentarios
    this.props.formulario[0].datosFormulario["doc_nu_documento"]=this.props.formulario[0].datosFormulario.doc_nu_documento
    const items_gestion_data={}
    const items_gestion_data_var= this.props.formulario[0].datosFormulario
    for(const key in items_gestion_data_var) {
        
        if(key.slice(0, 3)!="ges"){
              items_gestion_data[key]=items_gestion_data_var[key]
        }

    };

    
    const transaccion_o={
                        "tx":"gesSV",
                        "ts_o":moment().format('YYYY-MM-DDTHH:mm:ss'),
                        "tx_user":this.props.anexo,
                        "destino":"test",
                        "tx_version" : "0.3",
                        "origen":"face",
                        "uniqueid":this.props.uniqueid,
                        "accion":"",
                        "caso": {
                            "nro_gestion": this.state.caso_gestiones,
                            "S2_id":this.state.caso_id,
                            "casoCAM":this.state.caso_taskId,
                            "user":this.props.anexo,
                            "tipo":"",
                            "padre":"0",
                            "campania":"",
                            "estado":this.state.ficha_estado,
                        },
                        "gestion_data":items_gestion_data,
                        "doc_data":items_doc_data
                        }

    const transaccion={
                        "tx":"FG0",
                        "face_user":this.props.anexo,
                        "destino":"test",
                        "tx_version" : "0.0",
                        "origen":"face",
                        "accion":"",
                        "caso": {
                            "caso_gestiones": this.state.caso_gestiones,
                            "caso_id":this.state.caso_id,
                            "caso_TaskId":this.state.caso_taskId,
                            "caso_instance":this.state.caso_instance
                        },
                        //"gestion_data":items_gestion_data,
                        "doc_data":items_gestion_data,
                        "gestion_data":
                                      {
                                        "ges_result" : event.data.select,
                                        "ges_comentario_sv":event.data.comentarios,
                                        "ges_fecha_agendamiento":"",
                                        "ges_hora_agendamiento":"",
                                        "ges_ts":moment().format("x"),
                                        "ges_user":this.props.anexo
                                        
                                      }
                        }
    console.log(this.state.ficha_estado)
    console.log(this.state.data_editada)
    if(this.state.data_editada==true && this.state.ficha_estado=="nuevo"){
        if(this.state.ficha_canal=="telefonia") {
          transaccion["accion"]="gestion"
        }else if(this.state.ficha_canal=="web"){
          transaccion["accion"]="actualizacion"
        }
        
    }else if(this.state.data_editada==true && this.state.ficha_estado=="en_gestion"){
        transaccion["accion"]="actualizacion"
    }else if(this.state.data_editada==true && this.state.ficha_estado=="agendado"){
        transaccion["accion"]="actualizacion"
    }

                    console.log(transaccion)

          var url = 'https://bs2.openpartner.cl/face';
         //return false;
            fetch(url, {
              method: 'POST', 
              body: JSON.stringify(transaccion), 
              headers:{
              'Content-Type': 'text/plain'
              }
            })
            .then(res => res.json())
            .then(response => {if(response){
                            console.log(response);
                             //this.props.pedirFichas()
                             //this.props.desplegarEdicion("limpiar","","", "", "");
                              if(response.estatus=="OK"){
                                 this.setState({expandida:false});
                                 this.props.desplegarEdicion("atualizar_una_ficha","",this.props.formulario[0].ficha, "", response.task_data)
                                 
                               }

                            }})
            .catch(error => console.error('Error:', error));
        

    
  }

  actualizar = (event) => {

    console.log(this.state)
    console.log(event.data)
    const actualizar=event.data
    this.setState({expandida:false});
    

  }
 
ocultarfomrulario() {

    this.setState({expandida:false});
    
}

mostrarfomrulario() {
    
    this.setState({expandida:true});
}

actualizarGestionData(event){

    if(this.props.formulario.length>=1){


      console.log(this.props.formulario[0])
      const campos_nuevos= event.data

      for (const i in campos_nuevos) {
            //console.log(i)
            //console.log(campos_nuevos[i])
            this.props.formulario[0].datosFormulario[i]=campos_nuevos[i];
            

      }

      if(event.changed.flags.modified==true){
        this.setState({data_editada:true});
        console.log(event)
        console.log(this.props.formulario[0].datosFormulario)
      
        this.props.desplegarEdicion("atualizar", event.data,this.props.formulario[0].ficha, this.state.data_editada, "")
        this.setState({data_editada:true});

      }
      
    } 
    
 
}
 
/*<div key={key} className="form-group">
          <label for={"exampleInputEmail1"+key}>{key}</label>
          <input type={key} value={formulario[key]} className="form-control" id={"Input"+key} aria-describedby={key} placeholder={"Enter"+key} />
        </div>*/
  render(){

    //const detalle = <Form form={this.state.detalleLLamada} onSubmit={this.actualizar} />
     

/*{formulario}*/
/*{this.state.formulario=="detalleLLamada" && <Form src="https://nhgtjjozhnwcdxx.form.io/telefonia"  onSubmit={this.enviargestion} />}
                {this.state.formulario=="detalletelefonia" && <Form src="https://nhgtjjozhnwcdxx.form.io/telefonia"  onSubmit={this.enviargestion}  />}

                {this.state.formulario=="seguimiento" && <Form src="https://nhgtjjozhnwcdxx.form.io/tipificagestionwebllamada" onSubmit={this.enviargestion} />}
                {this.state.formulario=="tipificacion" && <Form src="https://nhgtjjozhnwcdxx.form.io/tipificaagendamientowebllamada" onSubmit={this.enviargestion} />}



                */
    if(this.state.expandida==true ){

       const area = this.props.area;      
       if(area==""){

            return (
              <div id="contenedorFormularios"  className='row contenedorFormularios'>
                {this.state.formulario=="detalleLLamada" && <Form form={this.state.detalleLLamada} onChange={(schema) => this.actualizarGestionData(schema)} onSubmit={this.actualizar} />}
                {this.state.formulario=="detalletelefonia" && <Form form={detalletelefonia} onChange={(schema) => this.actualizarGestionData(schema)}  />}
                
                {this.state.formulario=="seguimiento" && <Form form={seguimiento} onSubmit={this.enviargestion} />}
                {this.state.formulario=="tipificacion" && <Form form={tipificacion} onSubmit={this.enviargestion} />}

                <div className="btn-group"  role="group" aria-label="Basic example">
                  <button type="button" onClick={() => this.verFomrularioTipificacion("detalleLLamada")} className="btn btn-secondary">Detalle</button>
                  <button type="button" onClick={() => this.verFomrularioTipificacion("tipificacion")} className="btn btn-secondary">Tipificar</button>
                </div>
              </div> 
            ); 

       }else if(area=="servicio_tecnico"){
          return (
              <div id="contenedorFormularios"  className='row contenedorFormularios'>
                
                {this.state.formulario=="detalleLLamada" && <Form form={this.state.detalleLLamada} onChange={(schema) => this.actualizarGestionData(schema)} onSubmit={this.actualizar} />}
                {this.state.formulario=="detalletelefonia"  && <Form form={detalletelefonia} onChange={(schema) => this.actualizarGestionData(schema)}  />}
                  
                {this.state.formulario=="seguimiento"  && <Form form={tipificacionServicioNuevoGestion} onSubmit={this.enviargestion} />}
                {this.state.formulario=="tipificacion" && <Form form={tipificacion_servicio} onSubmit={this.enviargestion} />}
                <div className="btn-group"  role="group" aria-label="Basic example">
                  <button type="button" onClick={() => this.verFomrularioTipificacion("detalleLLamada")} className="btn btn-secondary">Detalle</button>
                  <button type="button" onClick={() => this.verFomrularioTipificacion("tipificacion")} className="btn btn-secondary">Tipificar</button>
                </div>
              </div> 
            ); 
       } 
    }else{
      return ( 
          <div className='row contenedorFormularios'></div> 
         
      ); 
    }
      
  }
}

const detalletelefonia={
    "display": "form",
    "components": [
        {
            "label": "Tabs",
            "components": [
                {
                    "label": "Datos Cliente",
                    "key": "tab2",
                    "components": [
                        {
                            "label": "Rut Cliente",
                            "allowMultipleMasks": false,
                            "showWordCount": false,
                            "showCharCount": false,
                            "tableView": true,
                            "alwaysEnabled": false,
                            "type": "textfield",
                            "input": true,
                            "key": "doc_nu_documento",
                            "defaultValue": "",
                            "validate": {
                                "customMessage": "",
                                "json": ""
                            },
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": ""
                            },
                            "tab": 0,
                            "widget": {
                                "type": ""
                            },
                            "properties": {},
                            "tags": [],
                            "reorder": false,
                            "inputFormat": "plain",
                            "encrypted": false,
                            "customConditional": "",
                            "logic": [],
                            "attributes": {}
                        },
                        {
                            "label": "Nombre",
                            "allowMultipleMasks": false,
                            "showWordCount": false,
                            "showCharCount": false,
                            "tableView": true,
                            "alwaysEnabled": false,
                            "type": "textfield",
                            "input": true,
                            "key": "doc_nombre",
                            "defaultValue": "",
                            "validate": {
                                "customMessage": "",
                                "json": ""
                            },
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": ""
                            },
                            "tab": 0,
                            "inputFormat": "plain",
                            "encrypted": false,
                            "properties": {},
                            "tags": [],
                            "customConditional": "",
                            "logic": [],
                            "attributes": {},
                            "widget": {
                                "type": ""
                            },
                            "reorder": false
                        },
                        {
                            "label": "Apellido",
                            "allowMultipleMasks": false,
                            "showWordCount": false,
                            "showCharCount": false,
                            "tableView": true,
                            "alwaysEnabled": false,
                            "type": "textfield",
                            "input": true,
                            "key": "doc_Ap_paterno",
                            "defaultValue": "",
                            "validate": {
                                "customMessage": "",
                                "json": ""
                            },
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": ""
                            },
                            "tab": 0,
                            "properties": {},
                            "tags": [],
                            "inputFormat": "plain",
                            "encrypted": false,
                            "customConditional": "",
                            "logic": [],
                            "attributes": {},
                            "widget": {
                                "type": ""
                            },
                            "reorder": false
                        },
                        {
                            "label": "Columns",
                            "columns": [
                                {
                                    "components": [
                                        {
                                            "label": "Patente Vehiculo",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "doc_patente",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "properties": {},
                                            "tags": [],
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "widget": {
                                                "type": ""
                                            },
                                            "reorder": false
                                        },
                                        {
                                            "label": "Código Producto",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "doc_codigoProducto",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "widget": {
                                                "type": ""
                                            },
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "tags": [],
                                            "reorder": false,
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "type": "column",
                                    "input": false,
                                    "hideOnChildrenHidden": false,
                                    "key": "column",
                                    "tableView": true,
                                    "label": "Column"
                                },
                                {
                                    "components": [
                                        {
                                            "label": "Número VIN",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "doc_vin",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {},
                                            "widget": {
                                                "type": ""
                                            },
                                            "tags": [],
                                            "reorder": false
                                        },
                                        {
                                            "label": "Producto",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "doc_producto",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": ""
                                            },
                                            "widget": {
                                                "type": ""
                                            },
                                            "properties": {},
                                            "tags": [],
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "customConditional": "",
                                            "logic": [],
                                            "attributes": {}
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "type": "column",
                                    "input": false,
                                    "hideOnChildrenHidden": false,
                                    "key": "column",
                                    "tableView": true,
                                    "label": "Column"
                                }
                            ],
                            "mask": false,
                            "tableView": false,
                            "alwaysEnabled": false,
                            "type": "columns",
                            "input": false,
                            "key": "columns2",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": ""
                            },
                            "tab": 0,
                            "reorder": false,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "attributes": {}
                        }
                    ]
                },
                {
                    "label": "Buscador",
                    "key": "buscador",
                    "components": [
                        {
                            "label": "Ingrese dato",
                            "allowMultipleMasks": false,
                            "showWordCount": false,
                            "showCharCount": false,
                            "tableView": true,
                            "alwaysEnabled": false,
                            "type": "textfield",
                            "input": true,
                            "key": "ingreseDato",
                            "defaultValue": "n° VIN o Patente Vehiculo",
                            "validate": {
                                "customMessage": "",
                                "json": "",
                                "required": false,
                                "custom": "",
                                "customPrivate": false,
                                "minLength": "",
                                "maxLength": "",
                                "minWords": "",
                                "maxWords": "",
                                "pattern": ""
                            },
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": "",
                                "eq": ""
                            },
                            "tab": 1,
                            "widget": {
                                "type": "",
                                "format": "yyyy-MM-dd hh:mm a",
                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                "saveAs": "text"
                            },
                            "inputFormat": "plain",
                            "encrypted": false,
                            "reorder": false,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "attributes": {},
                            "placeholder": "",
                            "prefix": "",
                            "customClass": "",
                            "suffix": "",
                            "multiple": false,
                            "protected": false,
                            "unique": false,
                            "persistent": true,
                            "hidden": false,
                            "clearOnHide": true,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "labelWidth": 30,
                            "labelMargin": 3,
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "tabindex": "",
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "allowCalculateOverride": false,
                            "refreshOn": "",
                            "clearOnRefresh": false,
                            "validateOn": "change",
                            "mask": false,
                            "inputType": "text",
                            "inputMask": "",
                            "id": "ec4r6x"
                        }
                    ]
                }
            ],
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "tabs",
            "input": false,
            "key": "tabs2",
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "reorder": false,
            "properties": {},
            "customConditional": "",
            "logic": [],
            "attributes": {}
        }/*,
        {
            "label": "Enviar",
            "state": "",
            "theme": "primary",
            "shortcut": "",
            "disableOnInvalid": true,
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "button",
            "key": "submit",
            "input": true,
            "defaultValue": false,
            "validate": {
                "customMessage": "",
                "json": ""
            },
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "encrypted": false,
            "properties": {},
            "showValidations": false,
            "event": "",
            "url": "",
            "custom": "",
            "reorder": false,
            "customConditional": "",
            "logic": [],
            "attributes": {}
        }*/
    ],
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    }
}

const detalleLLamada=detalleLlamadaForm;



const seguimiento= {
    "display": "form",
    "components": [
        {
            "label": "Field Set",
            "legend": "Resultado llamada",
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "fieldset",
            "input": false,
            "key": "fieldSet2",
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "components": [
                {
                    "label": "Seleccionar",
                    "mask": false,
                    "tableView": true,
                    "alwaysEnabled": false,
                    "type": "select",
                    "input": true,
                    "key": "select",
                    "defaultValue": "",
                    "validate": {
                        "customMessage": "",
                        "json": "",
                        "required": true,
                        "select": false
                    },
                    "conditional": {
                        "show": "",
                        "when": "",
                        "json": ""
                    },
                    "data": {
                        "values": [
                            {
                                "label": "En seguimiento",
                                "value": "en_seguimiento"
                            },
                            {
                                "label": "Sin interés",
                                "value": "sin_interes"
                            },
                            {
                                "label": "Agendamiento propio",
                                "value": "agendamiento_propio"
                            },
                            {
                                "label": "Datos erróneos",
                                "value": "datos_erroneos"
                            },
                            {
                                "label": "Sin respuesta",
                                "value": "sin_respuesta"
                            }
                        ]
                    },
                    "valueProperty": "value",
                    "selectThreshold": 0.3,
                    "encrypted": false,
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "lazyLoad": false,
                    "selectValues": "",
                    "disableLimit": false,
                    "sort": "",
                    "reference": false,
                    "reorder": false
                },
                {
                    "label": "Comentarios",
                    "showWordCount": false,
                    "showCharCount": false,
                    "tableView": true,
                    "alwaysEnabled": false,
                    "type": "textarea",
                    "input": true,
                    "key": "comentarios",
                    "defaultValue": "",
                    "validate": {
                        "customMessage": "",
                        "json": ""
                    },
                    "conditional": {
                        "show": "",
                        "when": "",
                        "json": ""
                    },
                    "inputFormat": "html",
                    "encrypted": false,
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "autoExpand": true,
                    "isUploadEnabled": false,
                    "uploadUrl": "",
                    "uploadOptions": "",
                    "uploadDir": "",
                    "reorder": false
                },
                {
                    "label": "Detalle del Agendamiento",
                    "columns": [
                        {
                            "components": [
                                {
                                    "label": "Ejecutivo de Piso",
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "select",
                                    "input": true,
                                    "key": "ejecutivoDePiso",
                                    "validate": {
                                        "customMessage": "",
                                        "json": "",
                                        "required": true,
                                        "select": false
                                    },
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "data": {
                                        "values": [
                                            {
                                                "label": "",
                                                "value": ""
                                            }
                                        ]
                                    },
                                    "valueProperty": "value",
                                    "lazyLoad": false,
                                    "selectValues": "",
                                    "disableLimit": false,
                                    "sort": "",
                                    "reference": false,
                                    "selectThreshold": 0.3,
                                    "encrypted": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {},
                                    "defaultValue": "",
                                    "reorder": false
                                },
                                {
                                    "label": "Fecha de Agendamiento",
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "datetime",
                                    "input": true,
                                    "key": "fechaDeAgendamiento",
                                    "suffix": true,
                                    "defaultValue": "",
                                    "widget": {
                                        "type": "calendar",
                                        "displayInTimezone": "viewer",
                                        "submissionTimezone": "America/Santiago",
                                        "language": "en",
                                        "useLocaleSettings": false,
                                        "allowInput": true,
                                        "mode": "single",
                                        "enableTime": true,
                                        "noCalendar": false,
                                        "format": "yyyy-MM-dd hh:mm a",
                                        "defaultDate": "",
                                        "hourIncrement": 30,
                                        "minuteIncrement": 1,
                                        "time_24hr": false,
                                        "minDate": "",
                                        "maxDate": "",
                                        "icons": "fontawesome",
                                        "i18n": {
                                            "lng": "en",
                                            "resources": {
                                                "en": {
                                                    "translation": {
                                                        "complete": "Submission Complete",
                                                        "error": "Please fix the following errors before submitting.",
                                                        "required": "{{field}} is required",
                                                        "pattern": "{{field}} does not match the pattern {{pattern}}",
                                                        "minLength": "{{field}} must be longer than {{length}} characters.",
                                                        "maxLength": "{{field}} must be shorter than {{length}} characters.",
                                                        "minWords": "{{field}} must have more than {{length}} words.",
                                                        "maxWords": "{{field}} must have less than {{length}} words.",
                                                        "min": "{{field}} cannot be less than {{min}}.",
                                                        "max": "{{field}} cannot be greater than {{max}}.",
                                                        "minSelectedCount": "You must select at least {{minCount}} items to continue.",
                                                        "maxSelectedCount": "You can only select up to {{maxCount}} items to continue.",
                                                        "maxDate": "{{field}} should not contain date after {{- maxDate}}",
                                                        "minDate": "{{field}} should not contain date before {{- minDate}}",
                                                        "invalid_email": "{{field}} must be a valid email.",
                                                        "invalid_url": "{{field}} must be a valid url.",
                                                        "invalid_regex": "{{field}} does not match the pattern {{regex}}.",
                                                        "invalid_date": "{{field}} is not a valid date.",
                                                        "invalid_day": "{{field}} is not a valid day.",
                                                        "mask": "{{field}} does not match the mask.",
                                                        "stripe": "{{stripe}}",
                                                        "month": "Month",
                                                        "day": "Day",
                                                        "year": "Year",
                                                        "january": "January",
                                                        "february": "February",
                                                        "march": "March",
                                                        "april": "April",
                                                        "may": "May",
                                                        "june": "June",
                                                        "july": "July",
                                                        "august": "August",
                                                        "september": "September",
                                                        "october": "October",
                                                        "november": "November",
                                                        "december": "December",
                                                        "next": "Next",
                                                        "previous": "Previous",
                                                        "cancel": "Cancel",
                                                        "submit": "Submit Form"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "validate": {
                                        "customMessage": "",
                                        "json": "",
                                        "required": true
                                    },
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "datePicker": {
                                        "minDate": "",
                                        "maxDate": ""
                                    },
                                    "encrypted": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {},
                                    "timePicker": {
                                        "hourStep": 30
                                    },
                                    "reorder": false
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "input": false,
                            "hideOnChildrenHidden": false,
                            "key": "column",
                            "tableView": true,
                            "label": "Column"
                        },
                        {
                            "components": [
                                {
                                    "label": "Comentario a ejecutivo",
                                    "autoExpand": false,
                                    "isUploadEnabled": false,
                                    "showWordCount": false,
                                    "showCharCount": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "textarea",
                                    "input": true,
                                    "key": "comentarioAEjecutivo",
                                    "defaultValue": "",
                                    "refreshOn": "submit",
                                    "validate": {
                                        "customMessage": "",
                                        "json": ""
                                    },
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "inputFormat": "html",
                                    "encrypted": false,
                                    "uploadUrl": "",
                                    "uploadOptions": "",
                                    "uploadDir": "",
                                    "reorder": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {}
                                },
                                {
                                    "label": "Enviar correo a Cliente",
                                    "labelPosition": "left-left",
                                    "optionsLabelPosition": "right",
                                    "values": [
                                        {
                                            "label": "",
                                            "value": "",
                                            "shortcut": ""
                                        }
                                    ],
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "selectboxes",
                                    "input": true,
                                    "key": "enviarCorreoACliente",
                                    "defaultValue": {
                                        "": false
                                    },
                                    "validate": {
                                        "customMessage": "",
                                        "json": ""
                                    },
                                    "conditional": {
                                        "show": "true",
                                        "when": "select",
                                        "eq": "conAgendamiento",
                                        "json": ""
                                    },
                                    "inputType": "checkbox",
                                    "customConditional": "",
                                    "encrypted": false,
                                    "minSelectedCountMessage": "",
                                    "maxSelectedCountMessage": "",
                                    "properties": {},
                                    "logic": [],
                                    "attributes": {},
                                    "labelWidth": 29,
                                    "labelMargin": 1,
                                    "reorder": false
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "input": false,
                            "hideOnChildrenHidden": false,
                            "key": "column",
                            "tableView": true,
                            "label": "Column"
                        }
                    ],
                    "mask": false,
                    "tableView": false,
                    "alwaysEnabled": false,
                    "type": "columns",
                    "input": false,
                    "key": "detalleDelAgendamiento",
                    "conditional": {
                        "show": "true",
                        "when": "select",
                        "eq": "agendamiento_tercero",
                        "json": ""
                    },
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "reorder": false
                },
                {
                    "label": "Detalle del Agendamiento Propio",
                    "columns": [
                        {
                            "components": [
                                
                                {
                                    "label": "Fecha de Agendamiento Propio",
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "datetime",
                                    "input": true,
                                    "key": "fechaDeAgendamientoPropio",
                                    "suffix": true,
                                    "defaultValue": "",
                                    "widget": {
                                        "type": "calendar",
                                        "displayInTimezone": "viewer",
                                        "submissionTimezone": "America/Santiago",
                                        "language": "en",
                                        "useLocaleSettings": false,
                                        "allowInput": true,
                                        "mode": "single",
                                        "enableTime": true,
                                        "noCalendar": false,
                                        "format": "yyyy-MM-dd hh:mm a",
                                        "defaultDate": "",
                                        "hourIncrement": 30,
                                        "minuteIncrement": 1,
                                        "time_24hr": false,
                                        "minDate": "",
                                        "maxDate": "",
                                        "icons": "fontawesome",
                                        "i18n": {
                                            "lng": "en",
                                            "resources": {
                                                "en": {
                                                    "translation": {
                                                        "complete": "Submission Complete",
                                                        "error": "Please fix the following errors before submitting.",
                                                        "required": "{{field}} is required",
                                                        "pattern": "{{field}} does not match the pattern {{pattern}}",
                                                        "minLength": "{{field}} must be longer than {{length}} characters.",
                                                        "maxLength": "{{field}} must be shorter than {{length}} characters.",
                                                        "minWords": "{{field}} must have more than {{length}} words.",
                                                        "maxWords": "{{field}} must have less than {{length}} words.",
                                                        "min": "{{field}} cannot be less than {{min}}.",
                                                        "max": "{{field}} cannot be greater than {{max}}.",
                                                        "minSelectedCount": "You must select at least {{minCount}} items to continue.",
                                                        "maxSelectedCount": "You can only select up to {{maxCount}} items to continue.",
                                                        "maxDate": "{{field}} should not contain date after {{- maxDate}}",
                                                        "minDate": "{{field}} should not contain date before {{- minDate}}",
                                                        "invalid_email": "{{field}} must be a valid email.",
                                                        "invalid_url": "{{field}} must be a valid url.",
                                                        "invalid_regex": "{{field}} does not match the pattern {{regex}}.",
                                                        "invalid_date": "{{field}} is not a valid date.",
                                                        "invalid_day": "{{field}} is not a valid day.",
                                                        "mask": "{{field}} does not match the mask.",
                                                        "stripe": "{{stripe}}",
                                                        "month": "Month",
                                                        "day": "Day",
                                                        "year": "Year",
                                                        "january": "January",
                                                        "february": "February",
                                                        "march": "March",
                                                        "april": "April",
                                                        "may": "May",
                                                        "june": "June",
                                                        "july": "July",
                                                        "august": "August",
                                                        "september": "September",
                                                        "october": "October",
                                                        "november": "November",
                                                        "december": "December",
                                                        "next": "Next",
                                                        "previous": "Previous",
                                                        "cancel": "Cancel",
                                                        "submit": "Submit Form"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "validate": {
                                        "customMessage": "",
                                        "json": "",
                                        "required": true
                                    },
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "datePicker": {
                                        "minDate": "",
                                        "maxDate": ""
                                    },
                                    "encrypted": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {},
                                    "timePicker": {
                                        "hourStep": 30
                                    },
                                    "reorder": false
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "input": false,
                            "hideOnChildrenHidden": false,
                            "key": "column",
                            "tableView": true,
                            "label": "Column"
                        }
                    ],
                    "mask": false,
                    "tableView": false,
                    "alwaysEnabled": false,
                    "type": "columns",
                    "input": false,
                    "key": "detalleDelAgendamientoPropio",
                    "conditional": {
                        "show": "true",
                        "when": "select",
                        "eq": "agendamiento_propio",
                        "json": ""
                    },
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "reorder": false
                }
            ],
            "reorder": false,
            "properties": {},
            "customConditional": "",
            "logic": [],
            "attributes": {}
        },

        {
            "label": "Enviar",
            "state": "",
            "shortcut": "",
            "disableOnInvalid": true,
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "button",
            "key": "submit",
            "input": true,
            "defaultValue": false,
            "validate": {
                "customMessage": "",
                "json": ""
            },
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "encrypted": false,
            "properties": {},
            "showValidations": false,
            "event": "",
            "url": "",
            "custom": "",
            "reorder": false,
            "customConditional": "",
            "logic": [],
            "attributes": {}
        }
    ],
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    }
}

const tipificacion= {
    "display": "form",
    "components": [
        {
            "label": "Field Set",
            "legend": "Resultado agendamiento",
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "fieldset",
            "input": false,
            "key": "fieldSet2",
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "components": [
                {
                    "label": "Seleccione",
                    "mask": false,
                    "tableView": true,
                    "alwaysEnabled": false,
                    "type": "select",
                    "input": true,
                    "key": "select",
                    "defaultValue": "",
                    "validate": {
                        "select": false,
                        "customMessage": "",
                        "json": ""
                    },
                    "conditional": {
                        "show": "",
                        "when": "",
                        "json": ""
                    },
                    "data": {
                        "values": [
                            {
                                "label": "Cerrado con Venta",
                                "value": "cerradoconVenta"
                            },
                            {
                                "label": "Cerrado sin Venta",
                                "value": "cerradoSinVenta"
                            }
                        ]
                    },
                    "valueProperty": "value",
                    "selectThreshold": 0.3,
                    "encrypted": false,
                    "reorder": false,
                    "lazyLoad": false,
                    "selectValues": "",
                    "disableLimit": false,
                    "sort": "",
                    "reference": false,
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {}
                }
            ],
            "reorder": false,
            "properties": {},
            "customConditional": "",
            "logic": [],
            "attributes": {}
        },
        {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "theme": "primary",
            "input": true,
            "tableView": true
        }
    ],
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    }
}

const tipificacion_servicio ={
    "display": "form",
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    },
    "components": [
        {
            "title": "Resultado de Gestión",
            "collapsible": false,
            "key": "resultadoDeGestion",
            "type": "panel",
            "label": "Panel",
            "input": false,
            "components": [
                {
                    "label": "Select",
                    "widget": "choicesjs",
                    "data": {
                        "values": [
                            {
                                "label": "Información de avance",
                                "value": "agendamiento_tercero"
                            },
                            {
                                "label": "Coordinación de entrega",
                                "value": "agendamiento_tercero"
                            },
                            {
                                "label": "Finaliza entrega",
                                "value": "cerradoconVenta"
                            }
                        ]
                    },
                    "selectThreshold": 0.3,
                    "key": "select",
                    "type": "select",
                    "input": true
                },
                {
                    "label": "Comentarios",
                    "autoExpand": false,
                    "key": "comentarios",
                    "type": "textarea",
                    "input": true
                }
            ],
            "path": "resultadoDeGestion"
        },
        {
            "label": "Enviar",
            "showValidations": false,
            "disableOnInvalid": true,
            "key": "submit",
            "type": "button",
            "input": true
        }
    ]
}

const tipificacionServicioNuevoGestion = {
    "display": "form",
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    },
    "components": [
        {
            "title": "Resultado de llamada",
            "collapsible": false,
            "key": "resultadoDeLlamada",
            "type": "panel",
            "label": "Panel",
            "input": false,
            "components": [
                {
                    "label": "Seleccionar",
                    "widget": "choicesjs",
                    "data": {
                        "values": [
                            {
                                "label": "Cotización de Servicio",
                                "value": "en_seguimiento"
                            },
                            {
                                "label": "Sin Respuesta",
                                "value": "sin_respuesta"
                            },
                            {
                                "label": "Datos Erroneos",
                                "value": "datos_erroneos"
                            },
                            {
                                "label": "Rechazo de cotización",
                                "value": "sin_interes"
                            }
                        ]
                    },
                    "selectThreshold": 0.3,
                    "key": "select",
                    "type": "select",
                    "input": true
                },
                {
                    "label": "Comentarios",
                    "autoExpand": false,
                    "key": "comentarios",
                    "type": "textarea",
                    "input": true
                }
            ],
            "path": "resultadoDeLlamada"
        },
        {
            "label": "Enviar",
            "showValidations": false,
            "disableOnInvalid": true,
            "key": "submit",
            "type": "button",
            "input": true
        }
    ]
}

export default AreaEdicion;

