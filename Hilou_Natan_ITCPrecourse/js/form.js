// ids for chosen executables
const submitBtn= document.getElementById('submit')

const Name = document.getElementById('name')
const specialRequest = document.getElementById('comments')
const Email = document.getElementById('email')
const optFile = document.getElementById('myfile')

// keeps it disabled if there are no values (!bang)

const checkEnableButton = () => {
    submitBtn.disabled = !(
     Name.value && 
      specialRequest.value && 
      Email.value &&
      optFile.value
        
     )
  }

//  and if the values are changed enable the button
Name.addEventListener('change', checkEnableButton)
specialRequest.addEventListener('change', checkEnableButton)
Email.addEventListener('change', checkEnableButton)
optFile.addEventListener('change', checkEnableButton)
  

  