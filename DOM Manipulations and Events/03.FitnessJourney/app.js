window.addEventListener('load', solve);

function solve() {

      const name = document.getElementById("name")
      const email = document.getElementById("email")
      const contactNumber = document.getElementById("contact-number")
      const classType = document.getElementById("class-type")
      const classTime = document.getElementById("class-time")

      const nextBtn = document.getElementById("next-btn")

      nextBtn.addEventListener("click",nextPage)

      function nextPage(e)
      {
            e.preventDefault();

            const nameValue = name.value 
            const emailValue = email.value
            const contactNumberValue = contactNumber.value
            const classTypeValue = classType.value 
            const classTimeValue = classTime.value 


            if(
                nameValue == "" ||
                emailValue == "" ||
                contactNumberValue == "" ||
                classTypeValue == ""||
                classTimeValue == ""
            ){
                return;
            }

            const ulClassInfo = document.getElementsByClassName("class-info")[0]



            //creating elements 
            const liClass = document.createElement("li")
            liClass.classList.add("info-item")

            const article = document.createElement("article")
            article.classList.add("personal-info")

            const Pname = document.createElement("p")
            const Pemail = document.createElement("p")
            const Pnumber = document.createElement("p")
            const PclassType = document.createElement("p")
            const PclassTime = document.createElement("p")

            const editBtn = document.createElement("button")
            editBtn.classList.add("edit-btn")
            editBtn.textContent = "Edit"

            const continueBtn = document.createElement("button")
            continueBtn.classList.add("continue-btn")
            continueBtn.textContent = "Continue"

            // attaching the elements

            ulClassInfo.appendChild(liClass)
            liClass.appendChild(article)
            article.appendChild(Pname)
            article.appendChild(Pemail)
            article.appendChild(Pnumber)
            article.appendChild(PclassType)
            article.appendChild(PclassTime)

            liClass.appendChild(editBtn)
            liClass.appendChild(continueBtn)

            // getting the values

            Pname.textContent = nameValue
            Pemail.textContent = emailValue
            Pnumber.textContent = contactNumberValue
            PclassType.textContent = classTypeValue
            PclassTime.textContent = classTimeValue

            //clearing and disabling
            nextBtn.setAttribute("disabled",true)
            clear();

            editBtn.addEventListener("click",()=>{

                name.value = nameValue
                email.value = emailValue
                contactNumber.value = contactNumberValue
                classType.value = classTypeValue
                classTime.value = classTimeValue

                nextBtn.removeAttribute("disabled")
                liClass.remove();


                
            })

            continueBtn.addEventListener("click",()=>{

                liClass.remove();

                const ulContinue = document.getElementsByClassName("confirm-class")[0]

                

                const liContinue = document.createElement("li")
                liContinue.classList.add("continue-info")

                ulContinue.appendChild(liContinue)

                liContinue.appendChild(article)

                const cancelBTN = document.createElement("button")
                cancelBTN.classList.add("cancel-btn")
                cancelBTN.textContent = "Cancel"

                const confirmBTN = document.createElement("button")
                confirmBTN.classList.add("confirm-btn")
                confirmBTN.textContent = "Confirm"

                liContinue.appendChild(cancelBTN)
                liContinue.appendChild(confirmBTN)


                cancelBTN.addEventListener("click",()=>{
                    liContinue.remove();
                    nextBtn.removeAttribute("disabled")

                })

                confirmBTN.addEventListener("click",()=>{
                    const mainDIv = document.getElementById("main")
                    mainDIv.remove();

                    const body = document.getElementById("body")

                    const finalElement = document.createElement("h1")
                    finalElement.id = "thank-you"
                    finalElement.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!"


                    const donebtn = document.createElement("button")
                    donebtn.id = "done-btn"
                    donebtn.textContent = "Done"

                    body.appendChild(finalElement)
                    body.appendChild(donebtn)


                    donebtn.addEventListener("click",()=>{
                        location.reload()
                    })

                })

                


            })




      }


      function clear(){
        name.value = ""
        email.value = ""
        contactNumber.value = ""
        classType.value = ""
        classTime.value = ""
      }
   
}
