function dayNightHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'day'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'night';
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'day';
  }
}
