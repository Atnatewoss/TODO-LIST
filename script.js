
const taskSection = document.querySelector(".task-section");
const inputBox = document.querySelector(".header-input");
const buttonAdd = document.querySelector(".header-buttonAdd");
const editBtnIMG = document.querySelector(".editBtn img");
const completeBtnIMG = document.querySelector(".completeBtn img");
let taskTitle;

let taskTitleExists = false; // New flag to track if the title has been added
let taskTitleCount = 0; // New flag to track if the title has been removed

buttonAdd.addEventListener("click" , () => {
    // Set the flag to increment by one every time a task is created.
    taskTitleCount += 1;
    let inputValue = inputBox.value.trim();

    if(inputValue === "") {
        alert("Dear user, please enter a task, or come again when you think of one.")
    }
    else {
        // CREATE ALL THE ELEMENTS
            let completeBtn = document.createElement("button");
            let editBtn = document.createElement("button");
            let deleteBtn = document.createElement("button");

            let taskText = document.createElement("p"); // Define a taskText element
            let taskRowLeft = document.createElement("div");
            let taskRowRight = document.createElement("div");
            let taskRow = document.createElement("div");
            let taskDisplay = document.createElement("div");

            // GIVE THE NEWLY CREATED DISPLAY ELEMENT A VALUE (content inside it)
            taskText.textContent = inputBox.value;
            editBtn.innerHTML = `<img src="images/download.png" alt="Edit">`; // Adding an image tag directly inside the button
            deleteBtn.textContent = "X";

            // ADD TASK TITLE ONCE , making sure the task title is created once
            if (!taskTitleExists) {
                taskTitle = document.createElement("p");
                taskTitle.textContent = "Current tasks";
                taskTitle.classList.add("task-title");
                taskDisplay.appendChild(taskTitle);
                taskTitleExists = true;  // Set flag to true after adding title
            }

            // ADD ALL THE ELEMENTS TO THEIR PLACE
            taskRowLeft.appendChild(completeBtn);
            taskRowLeft.appendChild(taskText);

            taskRowRight.appendChild(editBtn);
            taskRowRight.appendChild(deleteBtn);

            taskRow.appendChild(taskRowLeft);
            taskRow.appendChild(taskRowRight);

            taskDisplay.appendChild(taskRow);
            taskSection.appendChild(taskDisplay);


            // ADD THE CLASSES TO EACH ELEMENT ACCORDINGLY
            completeBtn.classList.add("btn", "completeBtn");  
            editBtn.classList.add("btn", "editBtn");
            deleteBtn.classList.add("btn", "deleteBtn");

            taskText.classList.add("task-text");
            taskRowLeft.classList.add("task-row-left");
            taskRowRight.classList.add("task-row-right");
            taskRow.classList.add("task-row");
            taskDisplay.classList.add("task-display");
            taskSection.classList.add("task-section");

        // SET INPUT BOX EMPTY
        inputBox.value = "";


        // ADD FUNCTIONALITY FOR COMPLETE, DELETE, AND EDIT BUTTONS
        completeBtn.addEventListener("click", () => {
            if (taskText.style.textDecoration === "line-through") {
                taskRow.style.border = "2px solid red";
                taskText.style.textDecoration = "none";
                completeBtn.innerHTML = "";
            } else {
                taskRow.style.border = "2px solid green";
                taskText.style.textDecoration = "line-through";
                completeBtn.innerHTML = `<img src="images/complete.png" alt="Edit">`;
            }
        });
        

        deleteBtn.addEventListener("click", () => {
            taskRow.remove();
            taskTitleCount -= 1;  // Decrement the count after task removal
        
            // Check if there are no remaining tasks
            if (taskTitleCount === 0) {
                taskTitle.style.display = "none"; // Hide the title if no tasks are left
                taskTitleExists = false;  // Reset the flag only when there are no tasks
            }
        });      

        editBtn.addEventListener("click", () => {
            if (taskText.contentEditable === "false" || taskText.contentEditable === "inherit" ) {
                
                // Enable editing mode and apply styles for editable text
                taskText.contentEditable = "true";
                taskText.style.padding = "0.5em 1em";
                taskText.style.borderRadius = "5px";
                taskText.style.backgroundColor = "rgb(240, 240, 240)"; // Softer background for edit mode
                taskText.style.border = "1px solid #ccc";
                taskText.style.color = "#333"; // Make text darker for readability
                
                // Edit button style during edit mode
                editBtn.style.width = "52px";
                editBtn.style.height = "30px";
                editBtn.style.padding = "0.4em 0.6em";
                editBtn.style.borderRadius = "19px";
                editBtn.style.backgroundColor = "green";
                editBtn.style.color = "white";
                editBtn.textContent = "save";
                editBtn.style.fontSize = "0.8em";
            } else {

                // Disable editing mode and revert styles
                taskText.contentEditable = "false";
                taskText.style.padding = "0";
                taskText.style.backgroundColor = "transparent"; // Reset background color
                taskText.style.color = "#000"; // Keep text color black in non-edit mode
                taskText.style.border = "none"; // Remove border when not in edit mode

                // Revert edit button to its original state (with image)
                editBtn.style.width = "32px";
                editBtn.style.height = "32px";
                editBtn.style.padding = "0";
                editBtn.style.borderRadius = "50%";
                editBtn.style.backgroundColor = "transparent";
                editBtn.style.color = "blue";
                editBtn.innerHTML = `<img src="images/download.png" alt="Edit">`; // Change back to edit image
            }
        });
    }
});



