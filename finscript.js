// 'use strict';
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// const openDisplay = function(){
//         console.log('clicked');
//         modal.classList.remove('hidden');
//         overlay.classList.remove('hidden');
// };
// const closeDisplay=function(){
//         modal.classList.add('hidden');
//         overlay.classList.add('hidden');
// //     modal.classList.add('hidden');
// //     overlay.classList.add('hidden');
// };
// for(let i = 0; i<btnsOpenModal.length; i++)
// btnsOpenModal[i].addEventListener('click', openModal);
// btnCloseModal.addEventListener('click' , closeDisplay);
// overlay.addEventListener('click', openDisplay);
// // function(){
// //         console.log('clicked');
// //         modal.classList.remove('hidden');
// //         overlay.classList.remove('hidden');
// //         modal.classList.add('hidden');
// //         overlay.classList.add('hidden');
// //     }));
// //     overlay.addEventListener('click' , function(){
// //         modal.classList.add('hidden');
// //         overlay.classList.add('hidden');
// //     })




'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
        // console.log(e.key);
      
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });
      