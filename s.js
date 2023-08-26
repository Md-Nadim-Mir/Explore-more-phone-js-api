// spinner 
let spinner = document.getElementById('spinner');


// show all button
let show_all_btn = document.getElementById('show_all_btn');


loadPhone = async (searchText ,datalimit) => {

    let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    let response = await fetch(url);
    let data = await response.json();
    displayPhone(data.data,datalimit);
}

displayPhone = (phones,datalimit) => {

    console.log(phones);

    let phone_container = document.getElementById('phone_container');
    phone_container.textContent = '';


    //  no phone found massage...

    let no_found = document.getElementById('no_found');



    if (phones.length === 0) {


        no_found.classList.remove('hidden')

    }



    else {

        no_found.classList.add('hidden')

    }





    if (datalimit && phones.length > 6) {

        phones = phones.slice(0, 6);
        
        show_all_btn.classList.remove('hidden');
        
    }

    else {
    
        show_all_btn.classList.add('hidden');

    }

    //  all phones show



    phones.forEach((single_phone) => {

        let div = document.createElement('div');


        div.innerHTML = `
         
      <div class="card w-full bg-base-100 shadow-xl">

         <figure class="pt-5"><img  src="${single_phone.image}" alt="Shoes" /></figure>
         <div class="card-body">
           <h2 class="card-title">${single_phone.phone_name}</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
         
         </div>

       </div> 

         `
        phone_container.appendChild(div);

    })

    // spinner off 

    spinner.classList.add('hidden')

}



// show_input_field

let show_input_field=document.getElementsByClassName('show_field');

 for(let sshow_input_field of show_input_field){

    sshow_input_field.addEventListener('click',function(event){

       
   
        document.getElementById('input_field').value=event.target.innerText;



    })

 }


// search function

searchFunction=((datalimit)=>{

    spinner.classList.remove('hidden')

    let input_field = document.getElementById('input_field').value;

    loadPhone(input_field,datalimit);

    // document.getElementById('input_field').value = '';

})


// enter key press when load data 

document.getElementById('input_field').addEventListener('keypress',function(event){

    console.log(event.key);

     if(event.key === 'Enter'){

         searchFunction(6);

     }

})


 

// searh_btn
document.getElementById('search_btn').addEventListener('click', () => {

    searchFunction(6);


})





// show all button
show_all_btn.addEventListener('click', function () {

     searchFunction();
     

})





loadPhone('c');





