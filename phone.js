

// spinner load

let spinner = document.getElementById('spinner');

//  data load from api
loadData = async (searchText, dataLimit) => {

  let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  let res = await fetch(url);
  let data = await res.json();
  displayData(data.data, dataLimit)


}



// display Phone Data from api

displayData = ((phones, dataLimit) => {

  //   console.log(phones);

  //    called div for take phone card
  let phone_container = document.getElementById('phone_container');
  phone_container.textContent = '';

  //   no phone available message;

  let no_found = document.getElementById('no_found');

  if (phones.length === 0) {

    no_found.classList.remove('hidden');

  }

  else {
    no_found.classList.add('hidden');
  }


  // no phone avialabel message end


  //  show toal button 

  let show_all_btn = document.getElementById('show_all_btn');


  if (dataLimit && phones.length > 12) {

    phones = phones.slice(0, 12);
    show_all_btn.classList.remove('hidden');

  }


  else {

    show_all_btn.classList.add('hidden')

  }




  phones.forEach((phone) => {

    // console.log(phone)

    let div = document.createElement('div');

    div.innerHTML = `
        
        <div class="card w-full bg-base-100 shadow-xl">
                <figure class="pt-5"><img  src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title font-extrabold">${phone.phone_name}</h2>
                  <p class="text-base font-bold">Brand Name: ${phone.brand}</p>
                  <p>Choose more better phone explore our website.</p>
                  <div class="text-center mt-2">
                    
                  <label for="my_modal_6" class="btn btn-secondary text-white hover:bg-[purple]" onclick="phoneDetails('${phone.slug}')">Details</label>


                  </div>
                
                </div>
              </div>
        
        `

    //  phone container add phone data

    phone_container.appendChild(div);


  })


  // spinner stop
  spinner.classList.add('hidden');

})



//  phoneDetails load

phoneDetails = async (id) => {

  let url = `https://openapi.programming-hero.com/api/phone/${id}`;

  let res = await fetch(url);
  let data = await res.json();
  Modal_Open_Details(data.data);


}


let info_modal_details = document.getElementById('info_modal_details');

// phoneDetailsModalOpen

Modal_Open_Details = (info) => {

  console.log(info)

  

  let div = document.createElement('div');

  div.innerHTML = `
  

  <div class="card w-full bg-base-100 shadow-xl">
  <figure class="pt-5"><img  src="${info.image}" alt="Shoes" /></figure>

  <div class="card-body ">

    <p class="card-title text-center text-base font-extrabold">${info.name}</p>
    <p class="text-sm font-semibold">Brand Name : ${info.brand} </p>

    <p class="text-xl font-extrabold py-2"> Discription 👍 </p>
    <p class="text-sm font-semibold">Display : ${info.mainFeatures.displaySize} </p>
    <p class="text-sm font-semibold">Memory : ${info.mainFeatures.memory} </p>
   
      </div>

  </div>

  
  `

  info_modal_details.appendChild(div);


}







//  seacrhFunction

searchFunction = (dataLimit) => {

  // spinner add
  spinner.classList.remove('hidden');

  let input_value = document.getElementById('input_field').value;
  loadData(input_value, dataLimit);

}


//  data change form searching input field and click search button.

//   search button

document.getElementById('search_btn').addEventListener('click', function () {


  searchFunction(12);


  // input-field clean
  // document.getElementById('input_field').value='';
})


// show all button
document.getElementById('show_all_btn').addEventListener('click', function () {


  searchFunction();


})


// Enter key press

document.getElementById('input_field').addEventListener('keypress', function (event) {


  if (event.key === 'Enter') {

    searchFunction(12);


  }



})




// click button show input field text

let show_field = document.getElementsByClassName('show_field');

for (let show_f1 of show_field) {

  show_f1.addEventListener('click', function (event) {


    document.getElementById('input_field').value = event.target.innerText;


  })

}





// loadData function call for load data from api

loadData('c',12);