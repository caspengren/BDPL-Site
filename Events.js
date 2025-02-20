document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.createElement("section");
    document.body.appendChild(eventsContainer);

    const eventsData = [
        ["BDPLAppleBees.JPG", "BDPLShakeFundRaiser.JPG"],
        ["BDPLSocialHouse.JPG", "BDPLCrumblFundRaise.JPG"],
        ["BDPLBdubsDinner.JPG", "BDPLPotluck.JPG"],
        ["BDPLTeamDinnerBanquet.JPG"]
    ];

    eventsData.forEach((images, index) => {
        const eventDiv = document.createElement("div");
        eventDiv.id = `Events${index + 1}`;
        eventDiv.style.display = "flex";
        eventDiv.style.justifyContent = "center";
        eventDiv.style.gap = "20px";

        images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = `Images/${image}`;
            imgElement.alt = "unable to load picture";
            imgElement.style.width = "40%";
            imgElement.style.height = "auto";
            eventDiv.appendChild(imgElement);
        });

        eventsContainer.appendChild(eventDiv);
        eventsContainer.appendChild(document.createElement("br"));
        eventsContainer.appendChild(document.createElement("hr"));
    });
});
