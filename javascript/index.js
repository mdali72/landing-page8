  
let shrine_web = document.getElementById('shrine_web')
let adventures_web = document.getElementById('adventures_web')
let media_web = document.getElementById('media_web')
let law_web = document.getElementById('law_web')
let zario_web = document.getElementById('zario_web')
let acme_web = document.getElementById('acme_web')
var service_web = document.getElementById('service_web')

let sound_mob = document.getElementById('sound_mob')
let salon_mob = document.getElementById('salon_mob')
let zara_mob = document.getElementById('zara_mob')




let btn2 = document.getElementById('btn2')
function web_btn()
{
	 
		shrine_web.style.display = " block"
		adventures_web.style.display = " block"
		media_web.style.display = " block"
		law_web.style.display = " block"
		zario_web.style.display = " block"
		acme_web.style.display = " block"
		service_web.style.display = " block"
		service_web.style.float = "left"

	 
		sound_mob.style.display = "none"
		salon_mob.style.display = "none"
		zara_mob.style.display = "none"

		btn2.style.border = "solid 0.1px blue"
		btn2.style.backgroundColor = "blue"
		btn2.style.color = "white"


		btn1.style.border = "solid 0.1px black"
		btn1.style.backgroundColor = "white"
		btn1.style.color = "black"

		btn3.style.border = "solid 0.1px black"
		btn3.style.backgroundColor = "white"
		btn3.style.color = "black"



	 
}


let btn3 = document.getElementById('btn3')
function mob_btn()
{
	 
		sound_mob.style.display = "block"
		salon_mob.style.display = "block"
		zara_mob.style.display = "block"
	 
		
		shrine_web.style.display = " none"
		adventures_web.style.display = " none"
		media_web.style.display = " none"
		law_web.style.display = " none"
		zario_web.style.display = " none"
		acme_web.style.display = " none"
		service_web.style.display = " none"


		btn3.style.border = "solid 0.1px blue"
		btn3.style.backgroundColor = "blue"
		btn3.style.color = "white"


		btn2.style.border = "solid 0.1px black"
		btn2.style.backgroundColor = "white"
		btn2.style.color = "black"

		btn1.style.border = "solid 0.1px black"
		btn1.style.backgroundColor = "white"
		btn1.style.color = "black"

	 
}


let btn1 = document.getElementById('btn1')
function all_btn()
{
	 
		 
	 
		sound_mob.style.display = "block"
		salon_mob.style.display = "block"
		zara_mob.style.display = "block"
		shrine_web.style.display = " block"
		adventures_web.style.display = " block"
		media_web.style.display = " block"
		law_web.style.display = " block"
		zario_web.style.display = " block"
		acme_web.style.display = " block"
		service_web.style.display = " block"


		btn1.style.border = "solid 0.1px blue"
		btn1.style.backgroundColor = "blue"
		btn1.style.color = "white"


		btn2.style.border = "solid 0.1px black"
		btn2.style.backgroundColor = "none"
		btn2.style.color = "black"

		btn3.style.border = "solid 0.1px black"
		btn3.style.backgroundColor = "white"
		btn3.style.color = "black"

	 
}



ScrollReveal({ 
    reset: true,
    distance :"60px",  
    duration :2000,
    delay :400 ,
     easing:'ease-in-out'
 });
    ScrollReveal().reveal('.footer_sec1 h2 ' ,{   origin:'top'});
    ScrollReveal().reveal('#shrine_web,#adventures_web,#media_web,#law_web,#salon_mob,#sound_mob,#zario_web,#acme_web,#zara_mob,#service_web', {  opacity:0, scale:0.8  });




