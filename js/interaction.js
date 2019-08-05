const $openClosePokedex = document.getElementById('open-poke');
const $caseLefTo = document.getElementById('caseLeft');
const $openDoor = document.getElementById('door');

$openClosePokedex.addEventListener('click', function(){
  if ($caseLefTo.classList.contains('leftTo')) {
    $caseLefTo.classList.remove('leftTo');
    $openDoor.classList.remove('open-door-visible');
  } else {
    $caseLefTo.classList.add('leftTo');
    $openDoor.classList.add('open-door-visible');
  }
});
