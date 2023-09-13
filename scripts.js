function generateNumber() {

   const min = Math.ceil(document.querySelector(".input-min").value)
   const max = Math.floor(document.querySelector(".input-max").value)


   const result = Math.floor(Math.random() * (max - min + 1) + min);

   


   if (min >= max) {
      alert("o valor mínimo NÃO pode ser maior que o máximo")
   }

   else {
      const result = Math.floor(Math.random() * (max - min + 1) + min);
      alert(result)
   }


}