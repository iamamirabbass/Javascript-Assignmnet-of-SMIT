let signup_email=document.getElementById('signup-email');
let signup_pass=document.getElementById('signup-password');
let signup_button=document.getElementById('signup-btn');


async function signup (){
    try {
        const { data, error } = await supabase.auth.signUp({
            email: signup_email.value,
            password: signup_pass.value,
          })
          
          if (error) throw error;
          if(data){
            alert('Please Check Your Email Address')
          } 
          return data;

    } 
    catch (error) {
        console.log(error)    
    }
    finally{
        signupBtnLoader.style.display = 'none'
    }
}