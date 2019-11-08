
if(localStorage.getItem("constantes")){
	//console.log(JSON.parse(localStorage.getItem("constantes")));
	//AQUI TOMA LA ULTIMA CONSTANTE QUE QUEDO
	 constantes =  JSON.parse(localStorage.getItem("constantes"));
	
	
}else{
	 constantes = { 
		cliente:"GM",
		//DESARROLLO
		usuario:"",
		clave:"",
		gruposCandidatos:{},
		log_in_out:"out",
		eventosAgenda:[]

	
	
	};
	localStorage.setItem("constantes", JSON.stringify(constantes))
	
}




