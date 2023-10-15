window.addEventListener("load", solve);

function solve() {
    // Obtaining the reference.
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const age = document.getElementById("age");
    const storyTitle = document.getElementById("story-title");
    const genre = document.getElementById("genre");
    const storyText = document.getElementById("story");

    const publishBtn = document.getElementById("form-btn");

    publishBtn.addEventListener("click", publishStory);

    function publishStory() {
        // Getting the values.
        const firstNameValue = firstName.value;
        const lastNameValue = lastName.value;
        const ageValue = age.value;
        const storyTitleValue = storyTitle.value;
        const genreValue = genre.value;
        const storyTextValue = storyText.value;

        // Verify for non-empty string values.
        if (
            firstNameValue === "" ||
            lastNameValue === "" ||
            ageValue === "" ||
            storyTitleValue === "" ||
            genreValue === "" ||
            storyTextValue === ""
        ) {
            return;
        }

        // Creating elements.
        const liClass = document.createElement("li");
        liClass.classList.add("story-info");

        const article = document.createElement("article");
        const h4NameElement = document.createElement("h4");
        const pAgeElement = document.createElement("p");
        const pTitleElement = document.createElement("p");
        const pGenreElement = document.createElement("p");
        const pStoryElement = document.createElement("p");

        // Creating the buttons.
        const saveBtn = document.createElement("button");
        saveBtn.classList.add("save-btn");
        saveBtn.textContent = "Save Story";

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit Story";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete Story";

        // Appending the created elements
        const previewList = document.getElementById("preview-list");

        previewList.appendChild(liClass);

        liClass.appendChild(article);

        article.appendChild(h4NameElement);
        article.appendChild(pAgeElement);
        article.appendChild(pTitleElement);
        article.appendChild(pGenreElement);
        article.appendChild(pStoryElement);

        liClass.appendChild(saveBtn);
        liClass.appendChild(editBtn);
        liClass.appendChild(deleteBtn);

        // Retrieving the values.
        h4NameElement.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
        pAgeElement.textContent = `Age: ${ageValue}`;
        pTitleElement.textContent = `Title: ${storyTitleValue}`;
        pGenreElement.textContent = `Genre: ${genreValue}`;
        pStoryElement.textContent = storyTextValue;

        // Deactivating the Publish button and resetting the input fields.
        publishBtn.setAttribute("disabled", true);
        clearFields();

        // Setting the Edit button functionality
        editBtn.addEventListener("click", () => {
            liClass.remove();
            publishBtn.removeAttribute("disabled");

            firstName.value = firstNameValue;
            lastName.value = lastNameValue;
            age.value = ageValue;
            storyTitle.value = storyTitleValue;
            genre.value = genreValue;
            storyText.value = storyTextValue;
        });

        // Setting the Save button functionality
        saveBtn.addEventListener("click", () => {
            const mainDiv = document.getElementById("main");
            mainDiv.innerHTML = "";

            const savedTextElement = document.createElement("h1");
            savedTextElement.textContent = "Your scary story is saved!";

            mainDiv.appendChild(savedTextElement);
        });

        // Setting the Delete button functionality
        deleteBtn.addEventListener("click", () => {
            liClass.remove();
            publishBtn.removeAttribute("disabled");
        });
    }

    function clearFields() {
        firstName.value = "";
        lastName.value = "";
        age.value = "";
        storyTitle.value = "";
        genre.value = "";
        storyText.value = "";
    }
}
