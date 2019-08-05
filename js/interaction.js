const $openClosePokedex = document.getElementById('open-poke');
const $caseLefTo = document.getElementById('caseLeft');
const $openDoor = document.getElementById('door');
const $lowAdd = document.getElementById('lAdd');

$openClosePokedex.addEventListener('click', function(){
  if ($caseLefTo.classList.contains('leftTo')) {
    $caseLefTo.classList.remove('leftTo');
    $openDoor.classList.remove('open-door-visible');
    $lowAdd.classList.remove('disable');
  } else {
    $caseLefTo.classList.add('leftTo');
    $openDoor.classList.add('open-door-visible');
    $lowAdd.classList.add('disable');
  }
});
