var persone=[];
function registration()
	{

		var name= document.getElementById("nome").value;
		var cog= document.getElementById("cognome").value;
		var email= document.getElementById("email").value;
		var ind= document.getElementById("indirizzo").value;
		
        //email expression code
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		
		if(name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(name))
		{
			alert('Name field required only alphabet characters');
		}
		if(cog=='')
		{
			alert('Please enter your surname');
		}
		else if(!letters.test(cog))
		{
			alert('Surname field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if(!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(ind=='')
		{
			alert('Please enter your address');
		}
	}

	class Persona{
		constructor(nome, cognome, indirizzo, email){
			this.nome = nome;
			this.cognome = cognome;
			this.indirizzo = indirizzo;
			this.email = email;
		}
		setNome(nome){
			if(this.nome!=null){
				this.nome = nome;
			}
		}
		getNome(){
			return this.nome;
		}

		setCognome(cognome){
			if(cognome!=null){
				this.cognome=cognome;
			}
		}
		getCognome(){
			return this.cognome;
		}

		setIndirizzo(indirizzo){
			if(indirizzo!=null){
				this.indirizzo=indirizzo;
			}
		}
		getIndirizzo(){
			return this.indirizzo;
		}

		setEmail(email){
			if(email!=null){
				this.email=email;
			}
		}
		getEmail(){
			return this.email;
		}
		toString() {
			return "Cognome: " + this.cognome + ", Nome: " + this.nome + ", Indirizzo: " + this.indirizzo + ", Email: " + this.email;
			}
	}
	function inserisciPersona() {
		var cognome = document.getElementById("cognome").value;
		var nome = document.getElementById("nome").value;
		var indirizzo = document.getElementById("indirizzo").value;
		var email = document.getElementById("email").value;
		
		var persona = new Persona(nome, cognome, indirizzo, email);
		persone.push(persona);
	}
	function visualizzaPersone() {
		var output = "";
		for (var i = 0; i < persone.length; i++) {
		output += persone[i].toString() + "<br>";
		}
		document.getElementById("output").innerHTML = output;
		}
	function clearFunc()
	{
		document.getElementById("nome").value="";
		document.getElementById("cognome").value="";
		document.getElementById("indirizzo").value="";
		document.getElementById("email").value="";
	}