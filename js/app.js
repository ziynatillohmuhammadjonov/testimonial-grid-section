const formEl  = document.querySelector('.form-el')
const inputEl = document.getElementById('userName')
const modalEl = document.querySelector('.modal')

function sendName(){
}
        formEl.addEventListener("submit",(e)=>{
            e.preventDefault()
            if(inputEl.value==="Oybek"){
                formEl.classList.add('hidden');
                modalEl.classList.add('hidden');
            }else{
                alert('Siz boshqa foydalanuvchisiz.....')
                inputEl.value=''
            }
        })
   