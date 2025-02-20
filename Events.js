document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.createElement("section");
    document.body.appendChild(eventsContainer);

    const eventsData = [
        { image: "BDPLAppleBees.JPG", date: "2025-0w-18" },
        { image: "BDPLShakeFundRaiser.JPG", date: "2025-04-15" },
        { image: "BDPLSocialHouse.JPG", date: "2025-05-20" },
        { image: "BDPLCrumblFundRaise.JPG", date: "2025-06-05" },
        { image: "BDPLBdubsDinner.JPG", date: "2025-07-01" },
        { image: "BDPLPotluck.JPG", date: "2025-08-10" },
        { image: "BDPLTeamDinnerBanquet.JPG", date: "2025-09-25" }
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
