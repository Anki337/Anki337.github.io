$(document).ready(function () {
  // Initialize an empty array to store your to-do items
  let toDoList = [];

  // Initialize the last assigned ID to 0
  let lastAssignedID = 0;

  //Function to add a to-do item
  $("#add-btn").click(function () {
    const newItem = $("#admin-text").val(); // Get the text from the textarea
    if (newItem.trim() !== "") {
      // Increment the last assigned ID and assign it to the new item
      lastAssignedID++;
      const uniqueID = lastAssignedID;
      toDoList.push({ id: uniqueID, text: newItem }); // Add the item with ID to the list
      updateToDoList(); // Update the displayed list
      $("#admin-text").val(""); // Clear the textarea
    }
  });

  //Function to delete a to-do item by unique ID
  $("#delete-btn").click(function () {
    const uniqueID = parseInt(prompt("Enter the unique ID to delete:"));
    if (!isNaN(uniqueID)) {
      // Find the index of the item with the given unique ID
      const index = toDoList.findIndex((item) => item.id === uniqueID);
      if (index !== -1) {
        toDoList.splice(index, 1); // Remove the item from the list
        updateToDoList(); // Update the displayed list
      }
    }
  });

  //Function to update the displayed list
  function updateToDoList() {
    const listContainer = $("#to-do-list");
    listContainer.empty(); // Clear the current list

    // Loop through the to-do items and display them with their unique IDs
    for (let i = 0; i < toDoList.length; i++) {
      const listItem = $("<li></li>").text(
        `[${toDoList[i].id}] ${toDoList[i].text}`
      );
      listContainer.append(listItem);
    }
  }
});
