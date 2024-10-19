const mainTitle = document.querySelector("#title");
let curValue = 0;

const btnIncrease = document.querySelector('#inc');
const btnReset = document.querySelector("#reset");

btnIncrease.addEventListener('click', () => {
    curValue ++;
    mainTitle.textContent = curValue;
});

btnReset.addEventListener('click', () => {
    curValue = 0;
    mainTitle.textContent = curValue;
});

const today = new Date();
const day = today.getDay();
var read= document.getElementById('read');

setTimeout(() => {
    if (day === 5) {
        read.innerHTML = `"Har jummah ke din mujh par Durood-e-Pak ki kasrat kiya karo Beshak meri ummat ka Durood har jummah kay din mujh par pesh kiya jata hai..."`;
        
        } 
        else {
            read.innerHTML = `Farmaan e Mustafa ﷺ : Mujh par kasrat se durood pak parho be shak tumhara mujh par Durood pak parhna tumahray gunaaho ke liye mughfirat hai.`;
        }
},3000);
