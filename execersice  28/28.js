function delayedSuccess() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccessful = true; 
        if (isSuccessful) {
          resolve("Success! The data has arrived after 2 seconds.");
        } else {
          reject("Error: Something went wrong.");
        }
      }, 2000);
    });
  }
 
  async function handleData() {
    console.log("Fetching data...");
  
    try {
     
      const message = await delayedSuccess();
      console.log(message);
    } catch (error) {
    
      console.error(error);
    } finally {
      console.log("Process complete.");
    }
  }
  
  handleData();