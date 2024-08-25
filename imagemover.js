// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', (event) => {
    // Get references to the buttons and the meme image
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const memeImage = document.getElementById('memeImage');
   

    // Variables to control the movement
    let moveInterval;
    let xPos = 50;
    let yPos = 50;
    let xDirection = 1;
    let yDirection = 1;

    // Function to move the meme image
    function moveMeme() {
        // Update the position
        xPos += xDirection;
        yPos += yDirection;

        // Change direction if the image hits the edge of the screen
        if (xPos <= 0 || xPos >= window.innerWidth - memeImage.width) {
            xDirection *= -1;
        }
        if (yPos <= 0 || yPos >= window.innerHeight - memeImage.height) {
            yDirection *= -1;
        }

        // Apply the new position
        memeImage.style.left = xPos + 'px';
        memeImage.style.top = yPos + 'px';
    }

    // Function to start moving the meme image
    function startMoving() {
        // Disable the start button and enable the stop button
        startButton.disabled = true;
        stopButton.disabled = false;

        // Start the movement
        moveInterval = setInterval(moveMeme, 1);
    }

    // Function to stop moving the meme image
    function stopMoving() {
        // Disable the stop button and enable the start button
        stopButton.disabled = true;
        startButton.disabled = false;

        // Stop the movement
        clearInterval(moveInterval);
    }

    // Attach the functions to the buttons
    startButton.addEventListener('click', startMoving);
    stopButton.addEventListener('click', stopMoving);
});
