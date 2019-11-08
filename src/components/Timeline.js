import React, { Component } from 'react';
import './Timeline.css';  
import moment from 'moment';


class Timelines extends Component {


  constructor(props) {
    super(props);
    this.state = {
      timelinedata: [],
      tipoFicha:"",
      uniqueid:""
    }
      //this.handleSubmit = this.handleSubmit.bind(this)
  }
// RECIBO EL MENSAJE
  componentDidMount () {


   
  }

  componentWillReceiveProps(nextProps){
   

    if(nextProps.edicion.length>=1){

        console.log(nextProps.edicion[0].ficha)
        const uid=nextProps.edicion[0].ficha.caso_ES
        //if(uid!=this.state.uniqueid && uid!=""){
          //this.state.uniqueid=uid
          this.setState({uniqueid:uid});
          this.state.tipoFicha=nextProps.edicion[0].ficha.canal
          console.log(this.state.tipoFicha)
          this.handleSubmit()
        //}
        
    }else{
      this.setState({timelinedata:[]});
      this.setState({uniqueid:""});
    }
    
  }
// ENVÃO MENSAJE AL SERVIDOR
  handleSubmit() {
    
    let uid = this.state.uniqueid //event.target.value
    console.log(this.state.uniqueid)
    console.log(uid)

    const tx=JSON.stringify({
  "tx": "FD0",
  "op": "anyQ",
  "index": "gdm_journal_0.4",
  "query": {
    "sort": [
      {
        "ges_ts": {
          "order": "desc"
        }
      }
    ],
    "_source": [
      "caso_ts_ult_ges",
      "ges_ts",
      "ges_result",
      "ges_comentario_sv"
    ],
    "query": {
      "bool": {
        "should": [
          {
            "term": {
              "caso_id.keyword": uid
            }
          }
        ]
      }
    }
  }
})


     fetch("https://bs2.openpartner.cl/face", {
                "method": "POST",
                "headers": {
                "content-type": "text/plain"
                },
                "body": tx
              })
              .then(res => res.json())
              .then(response => {
                console.log(response.data.hits.hits)
                //const hits=response.data.hits.hits.reverse()
                 const hits=response.data.hits.hits;

                 const new_hist={};
                

                 hits.forEach(function(key) {
                  console.log(moment(key._source.caso_ts_ult_ges).format("X"))
                  new_hist[moment(key._source.caso_ts_ult_ges).format("X")] = key;
                  
                });

                const new_new_hist=[];
                for (const i in new_hist) {
                  console.log(new_hist[i])
                  new_new_hist.push(new_hist[i])

                }
                console.log(hits)
                console.log(new_hist)
                console.log(new_new_hist)
                this.setState({timelinedata:new_new_hist.reverse()});

              })

      // acÃ¡ guardo el estado
     // this.setState({...this.state.uniqueid, uid})
      //console.log(this.state.uniqueid)
      
  }

  passTag(text){
    const text2=text;
   console.log(text2)

    if(this.props.area==""){
        return text2;
    }else if(this.props.area=="servicio_tecnico") {
      if(text2=="agendamiento propio"){
          return "Agenda para ingreso";      
      }else if(text2=="en seguimiento"){
          return "Cotizacion de Servicio";
      }else if(text2=="seguimiento"){
          return "Informacion de avance";
      }else if(text2=="agendamiento tercero"){
          return "Coordinación de entrega";
      }else{
         return text2;
      }
    }
  }

  render() {
   
    // acÃ¡ actualizo el componente y recorro el estado com map


    const timelinedata = this.state.timelinedata.map((timeline, index) => {
      console.log(timeline._source);
      let comentario;
      let estilo;
      let fecha;
      let hora;
      
      if(timeline._source.ges_comentario_sv == "" || timeline._source.ges_comentario_sv == undefined ){
        comentario=""
        estilo="no"
      }
      else{
        comentario=timeline._source.ges_comentario_sv;
         estilo=""
      }

      if(!timeline._source.ges_result){
        console.log("A "+index)
         // esta es la primera gestion
         if(this.state.tipoFicha=="tel"){

         }else if(this.state.tipoFicha=="web"){
           //var str = timeline._source.caso_ts_ult_ges;
           //var res = timeline._source.caso_ts_ult_ges.split("T");
           fecha = moment(timeline._source.caso_ts_ult_ges).format("DD-MM-YYYY")
           hora = timeline._source.caso_ts_ult_ges.split("T")
         }
         
        /*{fecha.length==10 && this.state.tipoFicha=="telefonia" && moment.unix(fecha).format("DD-MM-YYYY")}
                        {fecha.length==13 && this.state.tipoFicha=="telefonia" && moment.unix(fecha/1000).format("DD-MM-YYYY")}
                        {this.state.tipoFicha=="telefonia" && " "+moment.unix(fecha/1000).format("HH:MM")}*/

          return <div className="registro"  key={timeline._id}>
                    <div className="fecha">
                        

                        {this.state.tipoFicha=="web" && fecha}
                        {this.state.tipoFicha=="web" && " "+hora[1].slice(0,5)}
                    
                    </div>
                    <div className="marcano"></div>
                    <div className="actividad">
                        <div className="tag">Inicio</div>
                        
                    </div>
                  </div>
       
      }else{
        console.log("B "+index)
        
        
        fecha = moment(timeline._source.caso_ts_ult_ges).format("DD-MM-YYYY")
        hora = timeline._source.caso_ts_ult_ges.split("T")

        const text= this.passTag(timeline._source.ges_result.replace("_"," "))

        return <div className="registro" key={timeline._id}>
                    <div className="fecha"><div>
                        {fecha}
                        {" "}
                        {hora[1].slice(0,5)}
                    </div></div>
                    <div className="marca"><div className="linea"></div></div>
                    <div className="actividad">
                        
                        <div className="tag">{text}</div>
                        
                    </div>
                    <div className={"newcoment "+estilo} >
                        <div className=""> {comentario}</div>
                    </div>

                   
              </div>
               
      }
      
      
    });
    
    // el return devuelve el conenido <div className="comentario"> {comentario}</div>

    if(this.state.timelinedata.length>0 && this.state.uniqueid!=""){
      return(
            <div className="lineamanual">
              {timelinedata} 
            </div>
      )
    }else{
      return(<div className="lineamanual"></div>)
    }





  }
}

export default Timelines;




