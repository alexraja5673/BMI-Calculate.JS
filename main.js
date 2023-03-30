let fr=document.querySelector("form");
	fr.addEventListener("submit",function(a){
		a.preventDefault();
		 let h=parseInt(document.querySelector("#ht").value);
		 let w=parseInt(document.querySelector("#wt").value);
		 let res=document.querySelector("#print");
		 if(h<0 || (h === "") || isNaN(h)){
			 res.innerHTML="Plese Enter Correct Height";
			 res.style.color="red";
			 res.style.width="15%";
			 res.style.height="25px";
		 }
		 else if(w<0 || (w === "") || isNaN(w)){
			 res.innerHTML="Plese Enter Correct Weight";
			 res.style.color="red";
			 res.style.width="15%";
			 res.style.height="25px";
		 }
		 else{
			 calculate();
		 }
	 });
	function calculate(){
		let h=parseInt(document.querySelector("#ht").value);
		 let w=parseInt(document.querySelector("#wt").value);
		 let res=document.querySelector("#print");
		let bm=(w*100*100/(h**2));
		 var bmi=bm.toFixed(1);
		if(bmi<=18.4){
			res.innerHTML=`<p> Your BMI is ${bmi} </p>`;
			res.style.color="yellow";
		}
		else if(bmi>=18.5 && bmi<=25){
			res.innerHTML=`<p> Your BMI is ${bmi} </p>`;
			res.style.color="green";
		}
		else{
			res.innerHTML=`<p> Your BMI is ${bmi} </p>`;
			res.style.color="red";
		}
	}