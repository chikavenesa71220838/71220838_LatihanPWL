// 1. import data pet list
import petList from'./data/pets.js';
// 2. buat selector untuk element dropdown 
// 3. buat selector untuk element form 
// 4. buat selector untuk element search 
const dropdownElement = document.querySelector('.dropdownMenu');
const formElement = document.querySelector('.searchForm');
const searchInputElement = document.querySelector('.searchInput');
// 5. buat fungsi yang berisi komponen beserta data dengan template sebagai berikut
// 5a. isi src dengan photo.full
// 5b. nama pet
// 5c. tipe
// 5d. deskripsi
// 5e. Tanggal di publikasikan
const komponendataPet = (pet) => {
  return `
  <div class="card my-3 mx-2" style="width: 20%">
      <img height="300" style="object-fit: cover" class="card-img-top" src='${pet.photo.full}' alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title d-inline">${pet.name}</h5>
        <span class="badge badge-pill badge-info">${pet.type}</span>
        <p class="card-text">
          ${pet.description}
        </p>
        <p><small>Published at: ${new Date(pet.published_at).toLocaleDateString()}</small></p>
        <button
          type="button"
          class="btn btn-secondary"
          data-toggle="modal"
          data-target="#confirmationModal"
        >
          Adopt Me
        </button>
      </div>
  </div>`;

};

// 6. fungsi render komponen pet dengan map 
const renderComponent = (petList) => {
  const petInfoContainer = document.querySelector('.petInfo');
  petInfoContainer.innerHTML = petList.length 
    ? petList.map(pet => komponendataPet(pet)).join("")
    : '<div class="d-flex align-items-center w-100 justify-content-center"><img src="./assets/no-data-found.jpg" style="width: 300px" /></div>';
};

// 7. memanggil fungsi renderComponent dengan parameter petList untuk menampilkan data (sebagai inisialisasi sebelum data difilter)
renderComponent(petList);
// 8. Lengkapi fungsi sortPetById 
const sortPetById = (key) => {
  let sortPet = [... petList];
  if (key === "oldest") {
    // 8a. return sort berdasarkan tanggal masuk paling lama
    return sortPet.sort((a,b)=> new Date(a.published_at)- new Date(b.published_at));
  }
  if (key === "newest") {
   // 8b. return sort berdasarkan tanggal masuk paling baru
   return sortPet.sort((a,b)=> new Date(b.published_at)- new Date(a.published_at));
  }
  if (key === "name") {
    // 8a. return sort berdasarkan name
    return sortPet.sort((a,b)=> a.name > b.name ? 1:-1);
  }
  return sortPet
};

// 9. Lengkapi fungsi untuk search pet berdasarkan key
const searchPetByKey = (key) => {
  return petList.filter(pet => pet.name.toLowerCase().includes(key.toLowerCase()));
};

// 10. Buat event listener "change" untuk dropdown element dan tampilkan ketika memilih option pada dropdown
dropdownElement.addEventListener("change", (event) => {
  // 10a. gunakan value dari event untuk melakukan sort dari fungsi 8
  const sortPet = sortPetById(event.target.value);
  // 10b. panggil fungsi untuk menampilkan komponen dari hasil fungsi sort yang dipanggil pada poin 10a.
  renderComponent(sortPet);
});

// 11. Sama seperti point 9, buat event listener "submit" dan tampilkan ketika user submit form
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
// 11a. gunakan value dari event untuk melakukan search dari fungsi 9
  const searchinpt = searchInputElement.value;
// 11b. panggil fungsi untuk menampilkan komponen dari hasil fungsi sort yang dipanggil pada poin 11a.
  const filterpet = searchPetByKey(searchinpt);
  renderComponent(filterpet);
});