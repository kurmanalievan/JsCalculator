   var screen = document.querySelector('.screen');
   var buttons = document.querySelectorAll('.btn');
 //  var clear = documet.querySelector('.btn-clear');
   var equal = document.querySelector('.btn-equal');


   buttons.forEach(element => {
     element.addEventListener('click', function(e){
        var val = e.target.dataset.num;
        screen.value += val;
     })
   });

   equal.addEventListener('click', function(e){
      console.log('kol')
      if(screen.value === ''){
        screen.value = "";
      }else{
        let ans = eval(screen.value);
        screen.value = ans;
      }
   })

