import React, { Component } from 'react';
import moment from 'moment';
import { Calendar } from 'react-date-range';
import { DateRange } from 'react-date-range';
import './reportes.css';

class ReporteUsuario extends Component {
constructor(props) {
    super(props);
    this.state = {  
       desde:moment().format("YYYY-MM-DD"),
       hasta:moment().format("YYYY-MM-DD"),
       rangovwiu:false
     }
     this.verrango=this.verrango.bind(this)
     this.handleSelect=this.handleSelect.bind(this)
  }
  handleSelect(date){
    console.log(date); // Momentjs object
    console.log(this.state);
    
    /*if(moment(date.startDate._d).format("YYYY-MM-DD")!=this.state.desde && moment(date.endDate._d).format("YYYY-MM-DD")!=this.state.hasta){
        this.setState({desde:moment(date.startDate._d).format("YYYY-MM-DD")});
        this.setState({hasta:moment(date.endDate._d).format("YYYY-MM-DD")});
        this.verrango();
    }*/
    this.setState({desde:moment(date.startDate._d).format("YYYY-MM-DD")});
    this.setState({hasta:moment(date.endDate._d).format("YYYY-MM-DD")});
    if(date.startDate._d != date.endDate._d){
      //this.verrango();
      this.setState({rangovwiu:false})
    }

    

  }
  verrango() {
    //console.log("SS")
    this.setState({rangovwiu:true})
    /*this.setState(state => ({
      rangovwiu: !state.rangovwiu
    }));*/
  }
//<iframe src={"https://ks2.openpartner.cl/s/gildemeister/appStatep/kibana#/dashboard/3d231760-ba0a-11e9-9b8e-b94dc0c5d9c8?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'"+this.state.desde+"T00:00:00.000Z',to:'"+this.state.hasta+"T23:59:59.999Z'))&_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'1dc57010-b9f7-11e9-9b8e-b94dc0c5d9c8',key:caso_face_user.keyword,negate:!f,params:(query:'"+this.props.anexo+"'),type:phrase,value:'"+this.props.anexo+"'),query:(match:(caso_face_user.keyword:(query:'"+this.props.anexo+"',type:phrase))))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:12,i:'1',w:7,x:0,y:0),id:'98c3edc0-ba09-11e9-9b8e-b94dc0c5d9c8',panelIndex:'1',title:'Casos%20del%20periodo',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:12,i:'2',w:19,x:7,y:0),id:'1a9a1000-ba13-11e9-9b8e-b94dc0c5d9c8',panelIndex:'2',title:'Estado%20de%20casos',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:6,i:'3',w:7,x:26,y:0),id:'889f5880-ba13-11e9-9b8e-b94dc0c5d9c8',panelIndex:'3',title:Contactabilidad,type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:6,i:'4',w:8,x:33,y:0),id:e443e2f0-ba13-11e9-9b8e-b94dc0c5d9c8,panelIndex:'4',title:Agendamiento,type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:6,i:'5',w:7,x:41,y:0),id:'57d4b1e0-ba14-11e9-9b8e-b94dc0c5d9c8',panelIndex:'5',title:'Casos%20Gestionados',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:6,i:'6',w:22,x:26,y:6),id:'877b38f0-ba15-11e9-9b8e-b94dc0c5d9c8',panelIndex:'6',title:'M%C3%A9tricas%20por%20sucursal',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:5,i:'7',w:7,x:0,y:12),id:'1e601150-ba16-11e9-9b8e-b94dc0c5d9c8',panelIndex:'7',title:'C.%20%20gestionados%20del%20periodo',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:5,i:'8',w:7,x:0,y:17),id:'9a969040-ba1c-11e9-9b8e-b94dc0c5d9c8',panelIndex:'8',title:'Total%20gestiones%20del%20periodo',type:visualization,version:'7.3.0'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:10,i:'9',w:19,x:7,y:12),id:'51305ce0-ba1e-11e9-9b8e-b94dc0c5d9c8',panelIndex:'9',title:'Resultado%20de%20gestion',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:10,i:'10',w:22,x:26,y:12),id:'51a9dd30-ba1f-11e9-9b8e-b94dc0c5d9c8',panelIndex:'10',title:'Gestiones%20por%20caso',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:9,i:'11',w:48,x:0,y:22),id:c09925a0-ba21-11e9-9b8e-b94dc0c5d9c8,panelIndex:'11',title:'Casos%20Ingresados%20Por%20D%C3%ADa%20y%20Gestionados',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:9,i:'12',w:48,x:0,y:31),id:'562e4c80-ba22-11e9-9b8e-b94dc0c5d9c8',panelIndex:'12',type:visualization,version:'7.3.0')),query:(language:kuery,query:''),timeRestore:!f,title:'FACE%200.3%20-%20EJECUTIVOS',viewMode:view)"} height="100%" width="100%"></iframe>
            
  render(){
    return ( 
      <div className="col-12 ">
        <div className="row h-100">
          <div type="button"  className="perioreporte">
            <div className={this.state.rangovwiu ? 'display' : 'no-display'}>
              <DateRange 
                onInit={this.handleSelect}
                onChange={this.handleSelect}
              />
            </div>
              <button  type="button" onClick={this.verrango} className="btn btn-secondary btn-lg btn-block">Periodo, desde:{this.state.desde}, hasta: {this.state.hasta}</button>
          </div>
            <div className="col-12 pestania_reporte">
              <div className="row">
                  <div  style={{width: "70%"}}>Indices Individuales</div>
                  <div className="pestania_reporte_individuales" style={{width: "30%"}}>Indices de Grupos</div>
              </div>
            </div>

            <iframe src={"https://bs2.openpartner.cl/kibana/s/gildemeister/app/kibana#/dashboard/7b06bff0-00d7-11ea-a4c8-1f1331ad1aa2?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'"+this.state.desde+"T03:00:00.000Z',to:'"+this.state.hasta+"T02:59:59.999Z'))&_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:cea9dd80-ff0c-11e9-a4c8-1f1331ad1aa2,key:caso_face_user.keyword,negate:!f,params:(query:'774039'),type:phrase,value:'774039'),query:(match:(caso_face_user.keyword:(query:'774039',type:phrase))))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(title:'Casos%20gestionados%20del%20periodo'),gridData:(h:8,i:'7ed831a1-8525-4756-8216-d02cf7563439',w:9,x:0,y:0),id:'91436ec0-00ce-11ea-a4c8-1f1331ad1aa2',panelIndex:'7ed831a1-8525-4756-8216-d02cf7563439',title:'Casos%20gestionados%20del%20periodo',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Tasa%20de%20contactabilidad%20'),gridData:(h:5,i:'2daa3af4-2b11-4b36-a7b8-1f05f2c43cc7',w:19,x:9,y:0),id:'79b7aee0-00d0-11ea-a4c8-1f1331ad1aa2',panelIndex:'2daa3af4-2b11-4b36-a7b8-1f05f2c43cc7',title:'Tasa%20de%20contactabilidad%20',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Tasa%20de%20%C3%A9xito'),gridData:(h:5,i:'735e32ce-20a3-4796-b2c0-c1f51787aafe',w:12,x:28,y:0),id:cc68f6d0-00d0-11ea-a4c8-1f1331ad1aa2,panelIndex:'735e32ce-20a3-4796-b2c0-c1f51787aafe',title:'Tasa%20de%20%C3%A9xito',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Total%20gestionados'),gridData:(h:5,i:'25318324-1ec5-4b4d-864c-8b35a9dfa48d',w:8,x:40,y:0),id:'1277e180-00d2-11ea-a4c8-1f1331ad1aa2',panelIndex:'25318324-1ec5-4b4d-864c-8b35a9dfa48d',title:'Total%20gestionados',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Resultado%20de%20gestiones',vis:(legendOpen:!f)),gridData:(h:12,i:d7b83b40-3fd6-4e7b-bc16-50ae37cf6cf1,w:19,x:9,y:5),id:'79b09f70-00cf-11ea-a4c8-1f1331ad1aa2',panelIndex:d7b83b40-3fd6-4e7b-bc16-50ae37cf6cf1,title:'Resultado%20de%20gestiones',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Numero%20de%20gestiones%20por%20caso'),gridData:(h:12,i:dfb4d177-57e7-4704-8a68-6a1864707874,w:20,x:28,y:5),id:d5c6b060-00cf-11ea-a4c8-1f1331ad1aa2,panelIndex:dfb4d177-57e7-4704-8a68-6a1864707874,title:'Numero%20de%20gestiones%20por%20caso',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Gestiones%20a%20casos%20del%20periodo'),gridData:(h:9,i:f4f84483-ab9f-4bf7-8893-9fa47e8c308f,w:9,x:0,y:8),id:c2079040-00ce-11ea-a4c8-1f1331ad1aa2,panelIndex:f4f84483-ab9f-4bf7-8893-9fa47e8c308f,title:'Gestiones%20a%20casos%20del%20periodo',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Histograma%20total%20gestiones%20del%20periodo%20mas%20antiguos'),gridData:(h:12,i:f0ff3a77-6b38-48f9-b818-320c01fc5238,w:48,x:0,y:17),id:'98881a10-00d2-11ea-a4c8-1f1331ad1aa2',panelIndex:f0ff3a77-6b38-48f9-b818-320c01fc5238,title:'Histograma%20total%20gestiones%20del%20periodo%20mas%20antiguos',type:visualization,version:'7.4.2')),query:(language:kuery,query:''),timeRestore:!f,title:'Face%200.4%20-%20ejecutivo%20Metricas%20individuales%20(2%20linea)',viewMode:view)"} height="100%" width="70%" ></iframe>
		        <iframe src={"https://bs2.openpartner.cl/kibana/s/gildemeister/app/kibana#/dashboard/797d6fa0-000d-11ea-a4c8-1f1331ad1aa2?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'"+this.state.desde+"T03:00:00.000Z',to:'"+this.state.hasta+"T02:59:59.999Z'))&_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:cea9dd80-ff0c-11e9-a4c8-1f1331ad1aa2,key:caso_grupoC.keyword,negate:!f,params:!('opCER_web:5','opCER_anexo:5','opCER_default:5'),type:phrases,value:'opCER_web:5,%20opCER_anexo:5,%20opCER_default:5'),query:(bool:(minimum_should_match:1,should:!((match_phrase:(caso_grupoC.keyword:'opCER_web:5')),(match_phrase:(caso_grupoC.keyword:'opCER_anexo:5')),(match_phrase:(caso_grupoC.keyword:'opCER_default:5'))))))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(title:'Total%20Ingresados'),gridData:(h:7,i:'0d191b00-200d-466d-a37d-65d94de6a414',w:10,x:0,y:0),id:'18fca3d0-0008-11ea-a4c8-1f1331ad1aa2',panelIndex:'0d191b00-200d-466d-a37d-65d94de6a414',title:'Total%20Ingresados',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Ingresos%20por%20grupo'),gridData:(h:7,i:'11b544a3-4050-4638-b0a9-78c7f0c0018b',w:20,x:10,y:0),id:'914332a0-0008-11ea-a4c8-1f1331ad1aa2',panelIndex:'11b544a3-4050-4638-b0a9-78c7f0c0018b',title:'Ingresos%20por%20grupo',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Casos%20en%20cola'),gridData:(h:7,i:d29432d5-a60d-4863-8219-54370f3a9a0f,w:9,x:30,y:0),id:cc2bb1b0-000a-11ea-a4c8-1f1331ad1aa2,panelIndex:d29432d5-a60d-4863-8219-54370f3a9a0f,title:'Casos%20en%20cola',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Casos%20cerrados%20con%20venta'),gridData:(h:7,i:b744738c-1c04-42aa-abf7-1e4a1984aa43,w:9,x:39,y:0),id:'8ea3cb70-000f-11ea-a4c8-1f1331ad1aa2',panelIndex:b744738c-1c04-42aa-abf7-1e4a1984aa43,title:'Casos%20cerrados%20con%20venta',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Histograma%20de%20ingresos%20y%20gestionados%20por%20grupo',vis:(legendOpen:!f)),gridData:(h:7,i:'28a6e30f-90a0-45c7-bb24-3a77bb717542',w:48,x:0,y:7),id:a0d23700-00a0-11ea-a4c8-1f1331ad1aa2,panelIndex:'28a6e30f-90a0-45c7-bb24-3a77bb717542',title:'Histograma%20de%20ingresos%20y%20gestionados%20por%20grupo',type:visualization,version:'7.4.2')),query:(language:kuery,query:''),timeRestore:!f,title:'Face%200.4%20-%20ejecutivo%20Metricas%20por%20grupo%20(1%20linea)',viewMode:view)"} height="100%" width="30%" style={{border: "0px"}}></iframe>
            
          
         </div>
      </div>        
    )
      

  }
}

export default ReporteUsuario;