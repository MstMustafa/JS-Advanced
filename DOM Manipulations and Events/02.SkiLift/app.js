window.addEventListener('load', solve);

function solve() {
    // Get references to the input elements.
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const peopleCount = document.getElementById('people-count');
    const date = document.getElementById('from-date');
    const daysCount = document.getElementById('days-count');

    // Get reference to the 'Next' button.
    const nextStepBtn = document.getElementById('next-btn');

    // Add event listener to the 'Next' button.
    nextStepBtn.addEventListener('click', submit);

    function submit(ev) {
        ev.preventDefault(); // Prevent the default form submission behavior.

        // Get the values from input elements.
        const firstNameValue = firstName.value;
        const lastNameValue = lastName.value;
        const peopleCountValue = peopleCount.value;
        const dateValue = date.value;
        const daysCountValue = daysCount.value;

        // Verify if any required field is empty.
        if (!firstNameValue || !lastNameValue || !peopleCountValue || !dateValue || !daysCountValue) {
            return;
        }

        // Create elements for the ticket.
        const liClass = document.createElement("li");
        liClass.classList.add("ticket");

        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.textContent = "Name: " + firstNameValue + " " + lastNameValue;

        const pDate = document.createElement("p");
        pDate.textContent = "From date: " + dateValue;

        const pDays = document.createElement("p");
        pDays.textContent = "For " + daysCountValue + " days";

        const pPeople = document.createElement("p");
        pPeople.textContent = "For " + peopleCountValue + " people";

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";

        const continueBtn = document.createElement("button");
        continueBtn.classList.add("continue-btn");
        continueBtn.textContent = "Continue";

        // Append elements to the ticket.
        const ul = document.getElementsByClassName("ticket-info-list")[0];
        ul.appendChild(liClass);

        liClass.appendChild(article);

        article.appendChild(h3);
        article.appendChild(pDate);
        article.appendChild(pDays);
        article.appendChild(pPeople);

        liClass.appendChild(editBtn);
        liClass.appendChild(continueBtn);

        // Disable the 'Next' button and clear input fields.
        nextStepBtn.setAttribute("disabled", true);
        clear();

        // Inner callbacks for edit and continue buttons.
        editBtn.addEventListener("click", () => {
            // Restore input values and remove the ticket.
            firstName.value = firstNameValue;
            lastName.value = lastNameValue;
            peopleCount.value = peopleCountValue;
            date.value = dateValue;
            daysCount.value = daysCountValue;

            liClass.remove();
            nextStepBtn.removeAttribute('disabled');
        });

        continueBtn.addEventListener("click", () => {
            // Move ticket to confirmation section.
            const confirmTicket = document.getElementsByClassName("confirm-ticket")[0];
            const liConfirm = document.createElement("li");
            liConfirm.classList.add("ticket-content");

            confirmTicket.appendChild(liConfirm);
            liConfirm.appendChild(article);

            liClass.remove();

            // Add confirm and cancel buttons.
            const confirmBtn = document.createElement("button");
            confirmBtn.classList.add("confirm-btn");
            confirmBtn.textContent = "Confirm";

            const cancelBtn = document.createElement("button");
            cancelBtn.classList.add("cancel-btn");
            cancelBtn.textContent = "Cancel";

            liConfirm.appendChild(confirmBtn);
            liConfirm.appendChild(cancelBtn);

            cancelBtn.addEventListener("click", () => {
                // Remove ticket from confirmation and re-enable 'Next' button.
                confirmTicket.remove();
                nextStepBtn.removeAttribute('disabled');
            });

            confirmBtn.addEventListener("click", () => {
                // Display confirmation message and 'Back' button.
                const mainDiv = document.getElementById("main");
                mainDiv.remove();

                const body = document.getElementById("body");

                const text = document.createElement("h1");
                text.setAttribute("id", "thank-you");
                text.textContent = "Thank you, have a nice day! ";

                const backBtn = document.createElement("button");
                backBtn.setAttribute("id", "back-btn");
                backBtn.textContent = "Back ";

                body.appendChild(text);
                body.appendChild(backBtn);

                backBtn.addEventListener("click", () => {
                    // Reload the page when 'Back' button is clicked.
                    location.reload();
                });
            });
        });
    }

    function clear() {
        // Clear input fields.
        firstName.value = "";
        lastName.value = "";
        peopleCount.value = "";
        date.value = "";
        daysCount.value = "";
    }
}
