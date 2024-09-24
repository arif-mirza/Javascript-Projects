const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    compResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        // Add "active" class to the clicked image
        image.classList.add("active");

        userResult.src = compResult.src = "images/rock.png";
        result.textContent = "Wait ...";

        // Remove "active" class from other images
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start"); // Fix: Remove "start" class, not add

            let imageSrc = image.querySelector("img").src; // Fix: Use the 'image' variable

            userResult.src = imageSrc;

            let compRandResponse = Math.floor(Math.random() * 3);

            let compImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];

            compResult.src = compImages[compRandResponse];

            let compValue = ["R", "P", "S"][compRandResponse];
            let userValue = ["R", "P", "S"][index];

            let winPatterns = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            let finalResult = winPatterns[userValue + compValue];

            result.textContent = userValue === compValue ? "Match Draw" : `${finalResult} Won!`;
        }, 2500);
    });
});
