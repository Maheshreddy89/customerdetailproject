const customers = [
    
  ];
  

  function populateCustomerTable() {
    const tableBody = document.querySelector("table tbody");
  
    
    tableBody.innerHTML = "";
  
    
    customers.forEach((customer) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${customer.firstName}</td>
        <td>${customer.lastName}</td>
        <td>${customer.email}</td>
        <td>
          <button onclick="editCustomer('${customer.email}')">Edit</button>
          <button onclick="deleteCustomer('${customer.email}')">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  function showAddCustomerForm() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";
  }
  
  function hideAddCustomerForm() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }
  
  document.getElementById("addCustomerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
  
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
  
    
    customers.push({ firstName, lastName, email });
  
    
    populateCustomerTable();
  
    
    document.getElementById("addCustomerForm").reset();
    hideAddCustomerForm();
  });
  
  
  function deleteCustomer(email) {
  
    const index = customers.findIndex((customer) => customer.email === email);
  
    if (index !== -1) {
      customers.splice(index, 1);
      
      populateCustomerTable();
    }
  }
  
 
  function showEditCustomerForm(email) {
    const customer = customers.find((customer) => customer.email === email);
    if (customer) {
      document.getElementById("editFirstName").value = customer.firstName;
      document.getElementById("editLastName").value = customer.lastName;
      document.getElementById("editEmail").value = customer.email;
      const editFormOverlay = document.getElementById("editCustomerFormOverlay");
      editFormOverlay.style.display = "block";
      editFormOverlay.onsubmit = function (e) {
        e.preventDefault();
        const editedFirstName = document.getElementById("editFirstName").value;
        const editedLastName = document.getElementById("editLastName").value;
        const editedEmail = document.getElementById("editEmail").value;
  
       
        customer.firstName = editedFirstName;
        customer.lastName = editedLastName;
        customer.email = editedEmail;
  
        populateCustomerTable();
  
      
        hideEditCustomerForm();
      };
    }
  }
  
  function hideEditCustomerForm() {
    const editFormOverlay = document.getElementById("editCustomerFormOverlay");
    editFormOverlay.style.display = "none";
  }
  

  function editCustomer(email) {
    showEditCustomerForm(email);
  }

  document.addEventListener("DOMContentLoaded", function () {
    populateCustomerTable();
  });