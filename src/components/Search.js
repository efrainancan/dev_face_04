import React, { Component } from 'react';
import './Search.css';



class Search extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {  
       subFiltros: [],
    }
  }
  componentDidMount(nextProps) {
    this.componentWillReceiveProps(nextProps);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.actualizarSubFiltros(nextProps)
  }

  handleChange(event) {
    //console.log(event.target.value);

    
  }

  actualizarSubFiltros(procesomanual){
    console.log(this.props.procesomanual)
    procesomanual=this.props.procesomanual
    const gruposCandidatos=this.props.gruposCandidatos
    const subFiltros=[];

    gruposCandidatos.forEach(function(a) {
        
        subFiltros.push({tag:a.tag, catidad:a.cantidad, ver:a.ver, tipo:true})  
          
        
    })
/*
    procesomanual.forEach(function(a, index_a) {
        a.gruposCandidatos.forEach(function(b, index_b) {
          subFiltros.push({padre:a.tag,tag:b.tag, catidad:b.cantidad, ver:b.ver, tipo:true})
          
        })
    })
    procesomanual.forEach(function(a, index_a) {
        a.canales.forEach(function(b, index_b) {
          subFiltros.push({padre:a.tag,tag:b.tag, catidad:b.cantidad, ver:b.ver, tipo:true})
          if(b.tipificacion){
            b.tipificacion.forEach(function(c, index_c) {
                  subFiltros.push({padre:b.tag,tag:c.tag, catidad:c.cantidad, ver:c.ver, tipo:false})
            })
          }
        })
    })
    
    const subFiltros=[]
    gruposCandidatos.forEach(function(a, index_a) {
       //a.gruposCandidatos.forEach(function(b, index_b) {
          subFiltros.push({tag:a.tag, catidad:0, ver:true, tipo:true})
          
        //})
    })*/

    this.setState({subFiltros: subFiltros});
    console.log(subFiltros)

  }
actualizarSearch = (event) => {
      console.log(event.target.value)
      this.props.searchFiltro(event.target.value);

}

filtrogrupoCandidato = (event) => {
      console.log(event)
      this.props.actualizarGrupoCandidato(event);

}


  
    render(){
      
      //FILTROS

      const filtropadre= this.props.filtro
      const filtro = this.state.subFiltros

      //TAGS VISUALES //
      const filtro_fichas = filtro.map(number => {if( filtropadre.indexOf(number.padre)==-1){
          return(<span className="padre">
                    <span key={number.tag} onClick={() => this.filtrogrupoCandidato(number.tag)} className={number.ver ? 'badge badge-dark' : 'badge badge-dark off'}>
                      {number.tag}&nbsp;
                      <span id={"counter_"+number.tag} className="badge badge-light">{number.catidad}</span>
                    </span>
                </span>
          )

      
      }}        
      );

      
      return ( 
          <div id="search">
            <div >
              <div className="col-auto">
                <div className="input-group mb-2">
                  <input onChange={this.actualizarSearch} type="text" className="form-control"  placeholder="Buscar" />
                  <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="marcas">{filtro_fichas}</div>
        </div> 
         
      ); 
  }
}



export default Search;

