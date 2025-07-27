// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the input box and button
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  // When the Add button is clicked
  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim(); // Get the input value and remove extra spaces

    if (taskText !== "") {
      // Create a <li> element for the task
      const li = document.createElement("li");
      li.textContent = taskText;

      // Create a remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.className = "remove-btn";

      // Add click event to remove task
      removeBtn.addEventListener("click", function () {
        taskList.removeChild(li); // Remove the <li> from the list
      });

      // Add the remove button to the task item
      li.appendChild(removeBtn);

      // Add the task item to the list
      taskList.appendChild(li);

      // Clear the input box
      taskInput.value = "";
    } else {
      alert("Please enter a task.");
    }
  });

  // Optional: Pressing Enter key also adds task
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addButton.click(); // Simulate button click
    }
  });
});
