(function(){
	App = function(a,b,c,d,e){
		_this = this;
		this.statement = a;
		this.answer1 = b;
		this.answer2 = c;
		this.answer3 = d;
		this.boton = e;
		this.intentos = 4;
		this.p1= true;this.p2= true;this.p3= true;this.p4= true;
		this.randoms();
		this.boton.addEventListener("click",function(){
			_this.otro_metodo();
		});
	}
	App.prototype.array =[];
	App.prototype.pregunta1 = function(){
		if(this.p1){
			this.statement.textContent = "¿Cuál de los siguientes caracteres NO es válido para crear una cadena?";
			posible.textContent = " ' ";
			posible1.textContent = " <<- ";
			posible2.textContent = " # ";
		}
		else{
			this.randoms();
		}
		this.p1 = false;
	}
	App.prototype.pregunta2 = function(){
		if(this.p2){
			this.statement.textContent = "Con qué método podemos obtener el valor de un elemento html";
			posible.textContent = " value() ";
			posible1.textContent = " next() ";
			posible2.textContent = " val() ";
		}
		else{
			this.randoms();
		}
		this.p2 = false;
	}
	App.prototype.pregunta3 = function(){
		if(this.p3){
			this.statement.textContent = "El selector CSS form span se refiere a:";
			posible.textContent = " Todas las advertencias de un formulario";
			posible1.textContent = "  Un formulario y etiquetas span";
			posible2.textContent = " Todas las etiquetas span dentro de todos los formularios de la página form ";
		}
		else{
			this.randoms();
		}
		this.p3 = false;
	}
	App.prototype.pregunta4 = function(){
		if(this.p4){
			this.statement.textContent = "Con qué método podemos obtener el elemento html 'hermano' o siguiente de un objeto jQuery";
			posible.textContent = " Ninguna de las opciones";
			posible1.textContent = " sibling()";
			posible2.textContent = " next()";
		}
		else{
			this.randoms();
		}
		this.p4 = false;
	}
	App.prototype.randoms = function(){
		this.numero = Math.floor(Math.random() * 4);
		if(this.numero == 0) this.pregunta1();
		else if(this.numero == 1) this.pregunta2();
		else if(this.numero == 2) this.pregunta3();
		else this.pregunta4();
		punts.textContent = this.intentos;
	}
	App.prototype.otro_metodo = function(){
		if((this.numero == 0 && this.answer3.checked)||(this.numero == 1 && this.answer3.checked)||(this.numero == 2 && this.answer3.checked) ||(this.numero == 3 && this.answer1.checked)){
			this.array.push(true);
		}else{
			this.array.push(false);
		}
		this.intentos--;
		if(this.intentos == 0)this.mostra_resultado();
		else this.randoms();
	}
	App.prototype.mostra_resultado = function(){
		this.puntos = 0;
		this.porcentaje = 100;
		for(var i=0;i<=this.array.length-1;i++){
			if(this.array[i] == true){
				this.puntos += 10;
			}else{
				this.porcentaje-=25;
			}
		}
		resol.textContent = "Tuviste un porcentaje de: " + this.porcentaje + "%";
		true_or_false.textContent = "Tuviste esta cantidad de puntos: " + this.puntos + " de 40 posibles"; 
		punts.textContent = this.intentos;
	}
})();
// Codigo Esta hecho para prueba de eventos del los radioButtons









