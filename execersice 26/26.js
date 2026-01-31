function blockingDelay() {
    const start = Date.now();
    
    while (Date.now() - start < 2000) {
     
    }
    return "Blocking: Task complete after 2 seconds!";
  }
  
  console.log("Starting blocking task...");
  console.log(blockingDelay());
  console.log("This won't log until the 2 seconds are over.");