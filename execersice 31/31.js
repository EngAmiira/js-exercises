async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
     
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const users = await response.json();
      console.log("User List:", users);
    } catch (error) {
      console.error("Failed to fetch users:", error.message);
    }
  }
  
  fetchUsers();