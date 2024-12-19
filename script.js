function elem(selector) {
    return document.querySelector(selector)
   }
   function elems(selector) {
    return document.querySelectorAll(selector)
   }
   
   let input = elem('input'),
    last_number,
    operation
   
   elems('.number').forEach(button => {
    button.addEventListener('click', function () {
     let number = this.innerText
     input.value = input.value + number
    })
   });
   
   elem('#add').addEventListener('click', function () {
    last_number = input.value;
    input.value = '';
    operation = 'add';
   });

      
   elem('#sub').addEventListener('click', function () {
    last_number = input.value;
    input.value = '';
    operation = 'sub';
   });

      
   elem('#mul').addEventListener('click', function () {
    last_number = input.value;
    input.value = '';
    operation = 'mul';
   });

      
   elem('#div').addEventListener('click', function () {
    last_number = input.value;
    input.value = '';
    operation = 'div';
   });

   
   elem('#eql').addEventListener('click', function () {
    let curent_number = parseInt(input.value)
    if (operation  === "div" && curent_number == 0) {
        input.value = "не делись братан"
        operation = null
        last_number = null
        return
    }
    if (last_number && operation) {
        let result;
        switch(operation){
            case "add": {result = parseInt(last_number) + parseInt(input.value);
            } break;
            case "sub": {result = parseInt(last_number) - parseInt(input.value);
            } break;
            case "mul": {result = parseInt(last_number) * parseInt(input.value);
            } break;
            case "div": {result = parseInt(last_number) / parseInt(input.value);
            } break;
            case "step": {result = parseInt(last_number) ** parseInt(input.value);
            } break;
        }
         input.value = result;
        last_number=null;
        operation=null;
    }
   });


elem("#sqr").addEventListener("click", function() {
    let number = parseInt(input.value);
    input.value=number*number;
});

elem("#clr").addEventListener("click", function() {
    input.value="";
    last_number=null;
    operation=null;
});

elem("#kor").addEventListener("click", function() {
    let number = parseInt(input.value);
    input.value = Math.sqrt(number);
});

      
elem('#step').addEventListener('click', function () {
    last_number = input.value;
    input.value = '';
    operation = 'step';
   });
