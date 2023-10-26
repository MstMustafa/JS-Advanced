window.addEventListener('load', solution);

function solution() {
  
       const employee = document.getElementById("employee")
       const category = document.getElementById("category")
       const urgency = document.getElementById("urgency")
       const team = document.getElementById("team")
       const description = document.getElementById("description")


       const addBtn = document.getElementById("add-btn")
       addBtn.addEventListener("click",add);

       function add(e){

           e.preventDefault();

           const employeeValue = employee.value 
           const categoryValue = category.value 
           const urgencyValue = urgency.value
           const teamValue = team.value 
           const descriptionValue =description.value

           if(employeeValue == "" ||
              categoryValue == "" ||
              urgencyValue == "" ||
              teamValue == "" ||
              descriptionValue == ""
             
           ){
                     return;
           }

             const previewList = document.getElementsByClassName("preview-list")[0]
              
             const liClass = document.createElement("li")
             liClass.classList.add("problem-content")

            const article = document.createElement("article")
            const pName = document.createElement("p")
            const pCategory = document.createElement("p")
            const pUrgency = document.createElement("p")
            const pTeam = document.createElement("p")
            const pDestription = document.createElement("p")

            const editBtn = document.createElement("button")
            editBtn.classList.add("edit-btn")
            editBtn.textContent = "Edit"

            const continueBtn = document.createElement("button")
            continueBtn.classList.add("continue-btn")
            continueBtn.textContent = "Continue"

            //apending

            previewList.appendChild(liClass)

            liClass.appendChild(article)

            article.appendChild(pName)
            article.appendChild(pCategory)
            article.appendChild(pUrgency)
            article.appendChild(pTeam)
            article.appendChild(pDestription)

            liClass.appendChild(editBtn)
            liClass.appendChild(continueBtn)

            //texts

            pName.textContent = `From: ${employeeValue}`
            pCategory.textContent = `Category: ${categoryValue}`
            pUrgency.textContent = `Urgency: ${urgencyValue}`
            pTeam.textContent = `Assigned to: ${teamValue}`
            pDestription.textContent = `Description: ${descriptionValue}`

            addBtn.setAttribute('disabled', 'true');
            clear();

            editBtn.addEventListener('click',()=>{

              employee.value = employeeValue
              category.value = categoryValue
              urgency.value= urgencyValue
              team.value = teamValue
              description.value= descriptionValue

              liClass.remove();
              addBtn.removeAttribute("disabled")
                 
            })

            continueBtn.addEventListener("click",()=>{
                 const pending = document.getElementsByClassName("pending-list")[0]
                   
                 liClass.removeChild(editBtn);
                 liClass.removeChild(continueBtn);

                pending.appendChild(liClass);

                const resolveBtn = document.createElement("button")
                resolveBtn.classList.add("resolve-btn")
                resolveBtn.textContent = "Resolved"

                liClass.appendChild(resolveBtn)


                resolveBtn.addEventListener("click",()=>{
                     const resolvedList = document.getElementsByClassName("resolved-list")[0]

                     liClass.removeChild(resolveBtn)

                     resolvedList.appendChild(liClass)


                     const clearBtn = document.createElement("button")
                     clearBtn.classList.add("clear-btn")
                     clearBtn.textContent = "Clear"

                     liClass.appendChild(clearBtn)


                     clearBtn.addEventListener("click",()=>{
                           liClass.remove();
                           addBtn.removeAttribute("disabled")
                     })




                })

                 
            })
            



             


       }

       function clear(){
        employee.value = ""
        category.value = ""
          urgency.value= ""
           team.value = ""
          description.value= ""
       }



}
