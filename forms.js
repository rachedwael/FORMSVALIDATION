let email=document.querySelector('.email')
let mp=document.querySelector('.password')
let formulaire=document.querySelector('.form-content')


function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifPass(champ)
{
   var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}


function verifForm()
{
 
   var mailOk = verifMail(email);
   var motPass=verifPass(mp)
   if( mailOk && motPass)
     { 
      alert("Votre formulaire envoyer avec sucées");
        /*fullName.value=""
        pseudo.value=""
        mdp1.value=""
        mdp2.value=""
        emailPseudo.value=""*/
      return true;
    }
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}



/*

const emailIsValide = (event)=>{

  
    
    if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email.value)) 
       {  
        email.style.border="none"
        b=true
        }
     else if (email.value==="")
     {
        
         alert('le champs email est vide')
         b=false
     }
        
        else
        {
        email.style.border="2px solid red"
        email.value=""
        alert("Adresse e-mail invalide !");
        b=false
    }

    return b
}



const moDePassValide=(event)=>{
    
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(mp.value)) {
       { 
        mp.style.border="none"
        b=true
       }
    } else if (mp.value==="")
        { 
            b=false
        }
    else
    {
        alert("mot de passe invalide !");
        mp.style.border="2px solid red"
        mp.value=""
        b=false
    }
    return b
}


mp.addEventListener('focusout',moDePassValide)

email.addEventListener('focusout',emailIsValide)



const valider=(f)=>{
    if((moDePassValide===true)&&(moDePassValide===true))
    {
        alert('succée')
        return true  
    }
    else
    {
    alert('verifier les chapms ...')
    return false 
    }
}


function envoiForm(event) {
    var target = event.target || event.srcElement;
    if (target.elements.adresse.value === "") {
      alert("L'adresse est vide.");
      if (event.preventDefault) {
        event.preventDefault();
      }
      event.returnValue = false;
    }
  }*/
 