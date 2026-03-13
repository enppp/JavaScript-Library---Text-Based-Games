function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



async function bootStart() {

  const container1 = document.getElementById("textContainer2")
  
  console.log("Creating 5 lines")
  for (let i = 0; i < 5; i++) {
    const p = document.createElement("p")
    p.textContent = `>_`;
    container1.appendChild(p)
    await delay(50)
  }
    console.log("Created 5 lines")
    await delay(100)
    console.log("Showing DIRECTORY BUTTONS")
    directorySelect()
  
}
