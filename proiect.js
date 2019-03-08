var val_range;
var val_simplu;
function init_miscare(ob, left_i, top_i, left_f, top_f, nr_pasi)
{
ob.style.position="absolute"

var DLeft=left_f-left_i;
var DTop=top_f-top_i;

var dleft=DLeft/nr_pasi;
var dtop=DTop/nr_pasi;
var top_r=top_i;
var left_r=left_i;
misca(ob,top_r,left_r,1,nr_pasi,dleft,dtop,left_f,top_f);
}
function misca(ob,top_r,left_r,pas_c,nr_pasi,dleft,dtop,left_f,top_f)
{

if (pas_c<nr_pasi)
    	{
    	top_r+=dtop;
    	left_r+=dleft;
    	
    	ob.style.top=(Math.round(top_r))+"px";
    	ob.style.left=(Math.round(left_r))+"px";
    	
    	pas_c++;
    	
    	setTimeout(function () {misca(ob,top_r,left_r,pas_c,nr_pasi,dleft,dtop,left_f,top_f);},50);

    	}
else
    	{
    	ob.style.top=(top_f+"px");
    	ob.style.left=(left_f+"px");
    	}

}


window.onload=function()
{
	var pa=document.createElement("p");
	pa.innerHTML="GATA?";
	pa.id="inceput";
	document.body.appendChild(pa);
	var formular=document.createElement("form");
	formular.id="fo";
	document.body.appendChild(formular);
	function dimensiune_harta()//input range
	{
		var linie_noua=document.createElement("br");
		document.getElementById("fo").appendChild(linie_noua);
		var lab_range=document.createElement("label");
		lab_range.setAttribute("for","input_r");
	    var lab_text=document.createTextNode("Numarul de patrate de pe o linie:");
		lab_range.appendChild(lab_text);
	    document.getElementById("fo").appendChild(lab_range);
		var input_range=document.createElement("input");
		input_range.id="input_r";
		input_range.setAttribute("type","range");
		input_range.setAttribute("min",5);
		input_range.setAttribute("max",10);
		document.getElementById("fo").appendChild(input_range);
	}
	function nume_jucator()
	{
		var linie_noua=document.createElement("br");
		document.getElementById("fo").appendChild(linie_noua);
		var lab_text=document.createElement("label");
		lab_text.setAttribute("for","input_t");
	    var lab_text_interior=document.createTextNode("Nume jucator:");
		lab_text.appendChild(lab_text_interior);
	   // document..appendChild(lab_text);
		var input_text=document.createElement("input");
		input_text.id="input_t";
		input_text.setAttribute("type","text");
		var fomular=document.getElementById("fo");
		formular.insertBefore(lab_text,formular.childNodes[0]);//inserez inainte primul copil al formularului
		formular.insertBefore(input_text,formular.childNodes[1]);//inaintea celui de-al doilea

	}
	function obstacole()
	{
		var linie_noua=document.createElement("br");
		document.getElementById("fo").appendChild(linie_noua);
		var lab_checkbox=document.createElement("label");
		lab_checkbox.setAttribute("for","input_c");
	    var lab_text_checkbox=document.createTextNode("Obstacole:");
		lab_checkbox.appendChild(lab_text_checkbox);
	    document.getElementById("fo").appendChild(lab_checkbox);
		var input_checkbox=document.createElement("input");
		input_checkbox.id="input_c";
		input_checkbox.setAttribute("type","checkbox");
		document.getElementById("fo").appendChild(input_checkbox);

	}
	function culoare_podea()
	{
		var lab_radio,linie_noua;
		linie_noua=document.createElement("br");
		document.getElementById("fo").appendChild(linie_noua);
	    var culori=["Moccasin","Linen","Khaki","PapayaWhip"];
		for(var i=0;i<culori.length;i++)
		{

			var rad=document.createElement("input");
			rad.setAttribute("type","radio");
			rad.setAttribute("name","culoare");
			rad.id="culori";
			rad.value=culori[i];
			document.getElementById("fo").appendChild(rad);
			lab_radio=document.createElement("label");
			lab_radio.setAttribute("for","culori"+i);
			lab_radio.innerHTML=culori[i];
			document.getElementById("fo").appendChild(lab_radio);
			linie_noua=document.createElement("br");
		    document.getElementById("fo").appendChild(linie_noua);
		}
		 
	}
	var val_range;
	var val_simplu;
	function dimensiune_patrat()
	{
		var dimensiuni=[50,60,70,80];
		var linie_noua=document.createElement("br");
		document.getElementById("fo").appendChild(linie_noua);
		var sele_simplu=document.createElement("select");
		sele_simplu.id="select1";
		document.getElementById("fo").appendChild(sele_simplu);
		for(var i=0;i<dimensiuni.length;i++)
		{
			var optiuni_simplu=document.createElement("option");
			optiuni_simplu.innerHTML=dimensiuni[i];
			sele_simplu.add(optiuni_simplu);
	    }
	}
	function creeaza()
	{
		var sele_simplu=document.getElementById("select1");
		document.getElementById("select1").onchange=function schimb_patrate()
		{
			var sel_opt=sele_simplu.options[sele_simplu.selectedIndex];
			var valoare_simplu=sel_opt.value;
			val_simplu=valoare_simplu;
			var buton=document.getElementsByTagName("input")[1];
			buton.onchange=function numar_patrate()
			{
				var valoare_range=buton.value;
				val_range=valoare_range;
			    var tabla_joc=document.getElementsByClassName("clasa_tabla")[0];
			if(!tabla_joc)
			{
				var div_harta=document.createElement("div");
				div_harta.id="tabla";
				div_harta.className="clasa_tabla";
				var butoane=document.getElementsByName("culoare");
				for(var i=0;i<butoane.length;i++)
					if(butoane[i].checked)div_harta.style.backgroundColor=butoane[i].value;
				div_harta.style.width=valoare_range*valoare_simplu+2+"px";
				div_harta.style.height=valoare_range*valoare_simplu+2+"px";
				div_harta.style.border="1px solid black";
				div_harta.style.margin="100px";
				document.body.appendChild(div_harta);
			  var div_mic;
			  for(var i=0;i<valoare_range*valoare_range;i++)
			  {
				  div_mic=document.createElement("div");
				  div_mic.style.display="inline-block";//element pozitionat inline care poate fi stilizat ca un element bloc,accepta proprietatiile width si height
				  div_mic.style.width=valoare_simplu+"px";
				  div_mic.style.height=valoare_simplu+"px";
				  div_mic.style.border="0.1px solid #ff8e4b";
			      div_mic.style.float="left";//sunt scoase din flux si pozitionate conform valorii
			      div_mic.className="patrat";
				  div_mic.classList.add("tabla1");
				  div_mic.id="patrat"+i;
 				  document.getElementById("tabla").appendChild(div_mic);
			}
				  
			}
			else
			{
				tabla_joc.parentNode.removeChild(tabla_joc);
				var div_harta=document.createElement("div");
			    div_harta.id="tabla";
				div_harta.className="clasa_tabla";
				var butoane=document.getElementsByName("culoare");
				for(var i=0;i<butoane.length;i++)
					if(butoane[i].checked)div_harta.style.backgroundColor=butoane[i].value;
			    div_harta.style.width=valoare_range*valoare_simplu+2+"px";
				div_harta.style.height=valoare_range*valoare_simplu+2+"px";
				div_harta.style.margin="100px";
				document.body.appendChild(div_harta);
				var div_mic;
			  for(var i=0;i<valoare_range*valoare_range;i++)
			  {
				  div_mic=document.createElement("div");
				  div_mic.style.display="inline-block";//element pozitionat inline care poate fi stilizat ca un element bloc,accepta proprietatiile width si height
				  div_mic.style.width=valoare_simplu+"px";
				  div_mic.style.height=valoare_simplu+"px";
				  div_mic.style.border="0.1px solid #ff8e4b";
			      div_mic.style.float="left";//sunt scoase din flux si pozitionate conform valorii
			      div_mic.className="patrat";
				  div_mic.classList.add("tabla1");
				  div_mic.id="patrat"+i;
    			  document.getElementById("tabla").appendChild(div_mic);
			}
		    }
			var colectie=document.querySelectorAll("div.tabla1");
			var array=[];
			for(var i=0;i<colectie.length;i++)
				array[i]=window.getComputedStyle(colectie[i],null).getPropertyValue("background-color");
			for(let i=0;i<colectie.length;i++)
			{
			colectie[i].onmouseover=function()
			{
				var nr1=Math.floor(Math.random()*255);
				var nr2=Math.floor(Math.random()*255);
				var nr3=Math.floor(Math.random()*255);
				var color="rgb("+nr1+","+nr2+","+nr3+")";
				colectie[i].style.backgroundColor=color;
				
			}
	        colectie[i].onmouseout=function()
			{ 
				colectie[i].style.backgroundColor=array[i];
				
			}
	      	}
		
				
			}
			
		}
		
	}
	var colt;
	function marcheaza_colt()
	  {
		  var linie_noua=document.createElement("br");
		  document.getElementById("fo").appendChild(linie_noua);
		  var texta=document.createElement("textarea");
		  texta.id="te";
		  document.getElementById("fo").appendChild(texta);
		  texta.onchange=function verfica()
		  {
			  var str=texta.value;
			  var valori=str.split(" ");
			  var patt1=/stanga/g;//face cautarea globala a lui stanga in string
			  var patt2=/dreapta/g;
			  var result=valori[0].match(patt1);
			  var result1=valori[0].match(patt2);
			  if(str.indexOf(result)==0)
			  {
				  var pat2=/sus/g;
				  var pat3=/jos/g;
				  var result2=valori[1].match(pat2);
				  var result3=valori[1].match(pat3);
			      if(result2)
				  {
	                  colt=0;
					  var tab=document.getElementById("patrat"+0);
					  var imag=document.createElement("img");
					  imag.src="https://parereataconteaza1.files.wordpress.com/2013/03/wooden-man.jpg";
					  imag.style.width=val_simplu-1+"px"
					  imag.style.height=val_simplu-1+"px";
					  imag.id=colt;
					  document.getElementById("patrat"+0).classList.add("selectat");
					  document.getElementById("patrat"+0).appendChild(imag);
					  texta.disabled=true;
					  
				  }
				  else
				  if(result3)
				  {
					  var id_patrat=val_range*(val_range-1);
					  colt=id_patrat;
					  var tab=document.getElementById("patrat"+id_patrat);
					  var imag=document.createElement("img");
					  imag.src="https://parereataconteaza1.files.wordpress.com/2013/03/wooden-man.jpg";
					  imag.style.width=val_simplu-1+"px"
					  imag.style.height=val_simplu-1+"px";
					  imag.id=colt;
					  document.getElementById("patrat"+id_patrat).classList.add("selectat");
					  document.getElementById("patrat"+id_patrat).appendChild(imag);
					  texta.disabled=true;
				  }
				  else alert("GRESIT");
			  }
			 else
			if(str.indexOf(result1)==0)
			{
			  	  var pat2=/sus/g;
				  var pat3=/jos/g;
				  var result2=valori[1].match(pat2);
				  var result3=valori[1].match(pat3);
				  if(result2)
				  {
	                  var id_patrat=val_range-1;
					  colt=id_patrat;
					  var tab=document.getElementById("patrat"+id_patrat);
					  var imag=document.createElement("img");
					  imag.src="https://parereataconteaza1.files.wordpress.com/2013/03/wooden-man.jpg";
					  imag.style.width=val_simplu-1+"px"
					  imag.style.height=val_simplu-1+"px";
					  imag.id=colt;
					  document.getElementById("patrat"+id_patrat).classList.add("selectat");
					  document.getElementById("patrat"+id_patrat).appendChild(imag);
					  texta.disabled=true;
					    imag.onclick=function()
					  {
						  var imag=document.getElementById(colt);
						  var xi=val_simplu*val_range;
						  var fi=xi+200;
						  var fj=xi+200;
						  init_miscare(imag,xi,440,fi,fj,20);
					  }
				  }
				  else
				  if(result3)
				  {
					  var id_patrat=val_range*val_range-1;
					  colt=id_patrat;
					  var tab=document.getElementById("patrat"+id_patrat);
					  var imag=document.createElement("img");
					  imag.src="https://parereataconteaza1.files.wordpress.com/2013/03/wooden-man.jpg";
					  imag.style.width=val_simplu-1+"px"
					  imag.style.height=val_simplu-1+"px";
					  imag.id=colt;
					  document.getElementById("patrat"+id_patrat).classList.add("selectat");
					  document.getElementById("patrat"+id_patrat).appendChild(imag);
					  texta.disabled=true;
				  }
				  else alert("GRESIT");
		     }
			 else alert("GRESIT");
			  }
			  
		


		  
		  
	  }
	  function schimba_culoare_podea()
	  {
		  var butoane_radio=document.querySelectorAll("#culori");
	      for(let i=0;i<butoane_radio.length;i++)
			  butoane_radio[i].onchange=function set_culoare(e)
			  {
				 if(e.currentTarget.checked) document.getElementById("tabla").style.backgroundColor=butoane_radio[i].value;
			  }
	  }
	  function marcheaza_obstacole()
	  {
		  var buton=document.querySelector("#input_c");
		  buton.onchange=function pune(e)
		  {
			  var ap=[],nr=0,ok=1;
			  if(e.currentTarget.checked)
			  {
			ap[0]=colt;
			ap[1]=val_range*val_range-1;
			for(var i=0;i<5;i++)
			{
				ok=1;
				while(ok)//determin o pozite random,diferita de cele anterioare
				{
					ok=0;
					var x=Math.floor((Math.random()*val_range*val_range));
					for(var j=0;j<nr;j++)
						if(x==ap[j])ok=1;
					ap[nr++]=x;
			 
				}
			var imag=document.createElement("img");
			imag.style.width=val_simplu-0.1+"px";
			imag.style.height=val_simplu-0.1+"px";
			imag.id="imag"+x;
		
			imag.src="http://pctroubleshooting.ro/uploads/monthly_2017_07/X.png.d48a374c6d7b54e437b8733cc95c82cb.png";
			if(!document.getElementById("imag"+x))
			{
			document.getElementById("patrat"+x).appendChild(imag);
			document.getElementById("patrat"+x).classList.add("obstacol");
		    document.getElementById("patrat"+x).classList.add("selectat");
			}
		 }
		  buton.disabled=true;
			  }	
		  }
		  
	  }
	  function litere_mari()//onkeyup
	  {
		  var input_text=document.getElementById("input_t");
		  input_text.addEventListener("keyup",function()
		  {
			  input_text.value=input_text.value.toUpperCase();
		  });
		  input_text.onchange=function afiseaza_nume()
		{
			var valoare_text=input_text.value;
			var primul_element=document.body.firstElementChild;
			primul_element.innerHTML=valoare_text;//schimb continutul primul copil al lui body
		    primul_element.style.color="red";
			primul_element.fontWeight="bold";
		}
		  
	  }
	  function artefacte()
	  {
		  var linie_noua=document.createElement("br");
		  document.getElementById("fo").appendChild(linie_noua);
		  var sel_multiplu=document.createElement("select");
		  sel_multiplu.id="sel_m";
		  sel_multiplu.multiple=true;
		  document.getElementById("fo").appendChild(sel_multiplu);
		  for(var i=0;i<30;i++)
		  {
			  var opt=document.createElement("option");
			  opt.innerHTML=i;
			  sel_multiplu.add(opt);
		  }
	  }
	dimensiune_patrat();
	nume_jucator();
	dimensiune_harta();
	creeaza();
	culoare_podea();
	schimba_culoare_podea();
	marcheaza_colt();
	obstacole();
	marcheaza_obstacole();
	litere_mari();
	artefacte();
	function pune_artefacte()
	{
		var v=["https://images.pexels.com/photos/1028904/pexels-photo-1028904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			   "https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			   "https://images.pexels.com/photos/158471/ibis-bird-red-animals-158471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		       "https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		       "https://images.pexels.com/photos/535431/pexels-photo-535431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
		   ];
		 var k=0;
		 var ok=1;
	     var select_multiplu=document.getElementById("sel_m");
		 select_multiplu.onchange=function()
		 {
			 var sel_opt=select_multiplu.options;
			 for(var i=0;i<sel_opt.length;i++)
				   if(sel_opt[i].selected && k<=4) 
				   {
					  var valoare=sel_opt[i].value;
					  var divulet=document.getElementById("patrat"+valoare);
					  if(!divulet.classList.contains("selectat"))
					  {
						  var imag=document.createElement("img");
						  imag.style.width=val_simplu-0.2+"px";
						  imag.style.height=val_simplu-0.2+"px";
						  imag.src=v[k];
						  imag.id=valoare;
						  k++;
						  divulet.appendChild(imag);
						  divulet.classList.add("selectat");
						  divulet.classList.add("artefacte");
					  }
				   }
				 
		 }
		
	}
	pune_artefacte();
    function introdu_deplasari()
	{
		var lab_text=document.createElement("label");
		lab_text.setAttribute("for","input_td");
	    var lab_text_interior=document.createTextNode("Deplasari:");
		lab_text.appendChild(lab_text_interior);
		var input_text=document.createElement("input");
		input_text.id="input_td";
		input_text.setAttribute("type","text");
		document.body.appendChild(lab_text);
		document.body.appendChild(input_text);
	}
    introdu_deplasari();
	var valoare;
	function deplaseaza()
	{
		var t;
		var nr=0;
		var input_text_d=document.getElementById("input_td");
		input_text_d.addEventListener("keypress",function(event)
		{
			var x=String.fromCharCode(event.charCode);
			var textc=prompt("Cum vrei sa te deplasezi?","Nu uita ca poti numai N,S,E,V");
			if(x!="N" && x!="S" && x!="V" && x!="E")alert("Ce facem aici?");
			else
			if(x=="S")
			{
				valoare=parseInt(parseInt(colt)+parseInt(val_range));
				if(valoare<val_range*val_range)
				{
				var imag=document.createElement("img");
				imag.style.width=val_simplu-0.1+"px";
				imag.style.height=val_simplu-0.1+"px";
				imag.id=valoare;
				//v[nr++]=valoare;
			    imag.src="https://parereataconteaza1.files.wordpress.com/2013/03/wooden-man.jpg";
		        if(!document.getElementById("patrat"+valoare).classList.contains("selectat"))
				{
				document.getElementById(colt).parentNode.style.border="0.1px solid red";
				document.getElementById(colt).parentNode.removeChild(document.getElementById(colt));
				document.getElementById("patrat"+valoare).appendChild(imag);
			    colt=valoare;
				}
				else
				if(document.getElementById("patrat"+valoare).classList.contains("artefacte"))
				{
					nr++;
					var copil=document.getElementById("patrat"+valoare).children[0];
					document.getElementById("patrat"+valoare).removeChild(copil);
					document.getElementById("patrat"+valoare).classList.remove("artefacte");
					document.getElementById(colt).parentNode.style.border="0.1px solid red";
					document.getElementById(colt).parentNode.removeChild(document.getElementById(colt));
					document.getElementById("patrat"+valoare).appendChild(imag);
					colt=valoare;
				}
				}
			}
			else
			if(x=="E")
			{
				valoare=parseInt(parseInt(colt)+1);
				var ok=1;
				if(colt!=0)
				{
				var s=0;
				for(var i=1;i<val_range;i++)
				{
					s=parseInt(i*(val_range));
					if(s==parseInt(valoare))ok=0;
				}
				}
				if(valoare<val_range*val_range && ok==1)
				{
				var imag=document.createElement("img");
				imag.style.width=val_simplu-0.1+"px";
				imag.style.height=val_simplu-0.1+"px";
				imag.id=valoare;
			    imag.src="https://parereataconteaza1.files.wordpress.com/2013/03/wooden-man.jpg";
		        if(!document.getElementById("patrat"+valoare).classList.contains("selectat"))
				{
				document.getElementById(colt).parentNode.style.border="0.1px solid red";
				document.getElementById(colt).parentNode.removeChild(document.getElementById(colt));
				document.getElementById("patrat"+valoare).appendChild(imag);
			    colt=valoare;
				}
				else
				if(document.getElementById("patrat"+valoare).classList.contains("artefacte"))
				{
					nr++;
					var copil=document.getElementById("patrat"+valoare).children[0];
					document.getElementById("patrat"+valoare).removeChild(copil);
					document.getElementById("patrat"+valoare).classList.remove("artefacte");
					document.getElementById(colt).parentNode.style.border="0.1px solid red";
					document.getElementById(colt).parentNode.removeChild(document.getElementById(colt));
					document.getElementById("patrat"+valoare).appendChild(imag);
					colt=valoare;
				}
				}
				
			}
			else
			if(x=="V")
			{
				valoare=parseInt(parseInt(colt)-1);
				var ok=1;
				if(colt!=0)
				{
				var s=valoare;
				for(var i=1;i<val_range;i++)
				{
					s=parseInt(i*(val_range));
					if(s==parseInt(valoare)+1)ok=0;
				}
				}
				if(valoare<val_range*val_range && ok==1)
				{
				var imag=document.createElement("img");
				imag.style.width=val_simplu-0.1+"px";
				imag.style.height=val_simplu-0.1+"px";
				imag.id=valoare;
				//v[nr++]=valoare;
			    imag.src="https://parereataconteaza1.files.wordpress.com/2013/03/wooden-man.jpg";
		        if(!document.getElementById("patrat"+valoare).classList.contains("selectat"))
				{
				document.getElementById(colt).parentNode.style.border="0.1px solid red";
				document.getElementById(colt).parentNode.removeChild(document.getElementById(colt));
				document.getElementById("patrat"+valoare).appendChild(imag);
			    colt=valoare;
				}
				else
				if(document.getElementById("patrat"+valoare).classList.contains("artefacte"))
				{
					nr++;
					var copil=document.getElementById("patrat"+valoare).children[0];
					document.getElementById("patrat"+valoare).removeChild(copil);
					document.getElementById("patrat"+valoare).classList.remove("artefacte");
					document.getElementById(colt).parentNode.style.border="0.1px solid red";
					document.getElementById(colt).parentNode.removeChild(document.getElementById(colt));
					document.getElementById("patrat"+valoare).appendChild(imag);
					colt=valoare;
				}
				}
				
			}
			else
			if(x=="N")
			{
				valoare=parseInt(parseInt(colt)-parseInt(val_range));
				if(valoare<val_range*val_range)
				{
				var imag=document.createElement("img");
				imag.style.width=val_simplu-0.1+"px";
				imag.style.height=val_simplu-0.1+"px";
				imag.id=valoare;
				//v[nr++]=valoare;
			    imag.src="https://parereataconteaza1.files.wordpress.com/2013/03/wooden-man.jpg";
		        if(!document.getElementById("patrat"+valoare).classList.contains("selectat"))
				{
				document.getElementById(colt).parentNode.style.border="0.1px solid red";
				document.getElementById(colt).parentNode.removeChild(document.getElementById(colt));
				document.getElementById("patrat"+valoare).appendChild(imag);
			    colt=valoare;
				}
				else
				if(document.getElementById("patrat"+valoare).classList.contains("artefacte"))
				{
					nr++;
					var copil=document.getElementById("patrat"+valoare).children[0];
					document.getElementById("patrat"+valoare).removeChild(copil);
					document.getElementById("patrat"+valoare).classList.remove("artefacte");
					document.getElementById(colt).parentNode.style.border="0.1px solid red";
					document.getElementById(colt).parentNode.removeChild(document.getElementById(colt));
					document.getElementById("patrat"+valoare).appendChild(imag);
					colt=valoare;
				}
				}
				
			}
			if(valoare==val_range*val_range-1)
			{
				var divulete=document.querySelectorAll("div.tabla1");
				var i=0;
			    t=setInterval(function()
				{
					if(i==divulete.length)
					{
						document.body.removeChild(document.getElementById("tabla"));
						clearInterval(t);
					}
					else
					{
						divulete[i].parentNode.removeChild(divulete[i]);
						i++;
					}
					
					
				},1000);
				x=setTimeout(function()
				{
					window.addEventListener("click",function(e)
					{
						var div_coord=document.createElement("div");
						div_coord.innerHTML="SCOR="+nr;
						div_coord.style.position="absolute";
						div_coord.style.left=e.pageX+"px";
						div_coord.style.top=e.pageY+"px";
						div_coord.style.border="1px solid grey";
						div_coord.style.backgroundColor="red";
						document.body.appendChild(div_coord);
					});
				},5000);
				
				
				
			}
		});
	}
	deplaseaza();


}
