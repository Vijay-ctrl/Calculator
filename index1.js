let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
       if (e.target.innerHTML == '=')
      {
            try {
               let result = eval(string);
               if (typeof result === 'number') {
                  string = result.toFixed(10);
                  if (parseFloat(string) == parseInt(string))
                  {
                     string = parseInt(string).toString();
                  }
               }
               else
               {
                  string = result.toString();
               }
               input.value = string;
            }
            catch (error)
            {
               input.value = 'Error';
               string = '';
            }
      }
       else if (e.target.innerHTML == 'AC')
      {
         string = "";
         input.value = string;
      }
      else if (e.target.innerHTML == 'DEL')
      {
         string = string.substring(0, string.length - 1);
         input.value = string;
      }
      else
      {
         string = string + e.target.innerHTML;
         input.value = string;
      }
    });
});