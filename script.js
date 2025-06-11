const BIKE_CARDS = [
    {
      img: "DNC-BYECAR-main/assets/img-card-1.png",
      paragraph: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
      name: "Scooter Elétrica Voltz EV1",
    },
    {
      img: "DNC-BYECAR-main/assets/img-card-2.png",
      paragraph: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
      name: "Honda CB 500X",
    },
  ];
  
let index = 0;

function slide(direction) { 

    const ul = document.querySelector("ul");
    const li = document.querySelectorAll("li");
    const liWidth = li[0].offsetWidth;
      if((direction == 1) && (index == li.length -1)){
      return;
    }
  
        if((direction == -1) && (index == 0)){
      return;
    }
    const currentScroll = ul.scrollLeft;
    const newScroll = currentScroll + (direction * liWidth);
    ul.scrollTo({ left: newScroll, behavior: "smooth" });
    index = index + direction;

}

function openmodal() { 
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = `
   <div class="modal-content-container">
    <h2>${BIKE_CARDS[index].name}</h2>
    <img src="${BIKE_CARDS[index].img}" alt="${BIKE_CARDS[index].name}" />
    <p>${BIKE_CARDS[index].paragraph}</p>
    <button class="close-modal" onclick="closemodal()">X</button>
    <button class="quero-assinar" >Quero Assinar!</button>
    </div>
    `;
    modal.style.display = "block";
}
function closemodal() { 
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
}


