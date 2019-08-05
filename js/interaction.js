const $openClosePokedex = document.getElementById('open-poke');
const $caseLefTo = document.getElementById('caseLeft');
const $openDoor = document.getElementById('door');
const $lowAdd = document.getElementById('lAdd');
const $diago = document.getElementById('diag');
const $dOne = document.getElementById('do');
const $dTwo = document.getElementById('dt');


$openClosePokedex.addEventListener('click', function(){
  if ($caseLefTo.classList.contains('leftTo')) {
    $caseLefTo.classList.remove('leftTo');
    $openDoor.classList.remove('open-door-visible');
    $lowAdd.classList.remove('disable');
    $diago.classList.remove('backDarck');
    $dOne.classList.remove('backDarck');
    $dTwo.classList.remove('backDarck');
  } else {
    $caseLefTo.classList.add('leftTo');
    $openDoor.classList.add('open-door-visible');
    $lowAdd.classList.add('disable');
    $diago.classList.add('backDarck');
    $dOne.classList.add('backDarck');
    $dTwo.classList.add('backDarck');
  }
});
