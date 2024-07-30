tailwind.config = {
    theme: {
      extend: {
        colors: {
          gray: '#9F9F9F',
        }
      }
    }
  }


  const decrement = document.getElementById("decrement")
  const productCount = document.getElementById("productCount")
  const increment = document.getElementById("increment")

  increment.addEventListener('click',  ()=>{
    console.log("mallam")
    productCount.style.value += 1
  })


  decrement.addEventListener('click',  ()=>{
    console.log("mallam")
    productCount.style.value += 1
  })