document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.createElement("section");
    document.body.appendChild(eventsContainer);

    const eventsData = [
        { image: "BDPLAppleBees.JPG", date: "2025-02-08" },
        { image: "BDPLShakeFundRaiser.JPG", date: "2025-02-19" },
        { image: "BDPLSocialHouse.JPG", date: "2025-02-22" },
        { image: "BDPLCrumblFundRaise.JPG", date: "2025-03-23" },
        { image: "BDPLBdubsDinner.JPG", date: "2025-04-05" },
        { image: "BDPLPotluck.JPG", date: "2025-04-25" },
        { image: "BDPLTeamDinnerBanquet.JPG", date: "2025-04-27" }
    ];

    const today = new Date();

    eventsData.forEach(event => {
        const eventDate = new Date(event.date);
        if (eventDate >= today) {
            const eventDiv = document.createElement("div");
            eventDiv.style.display = "flex";
            eventDiv.style.flexDirection = "column";
            eventDiv.style.alignItems = "center";
            eventDiv.style.gap = "10px";

            const imgElement = document.createElement("img");
            imgElement.src = `Images/${event.image}`;
            imgElement.alt = "unable to load picture";
            imgElement.style.width = "40%";
            imgElement.style.height = "auto";

            const dateElement = document.createElement("p");
            dateElement.textContent = `Date: ${event.date}`;
            dateElement.style.fontWeight = "bold";

            eventDiv.appendChild(imgElement);
            eventDiv.appendChild(dateElement);
            eventsContainer.appendChild(eventDiv);
            eventsContainer.appendChild(document.createElement("br"));
            eventsContainer.appendChild(document.createElement("hr"));
        }
    });
});
