(async function () {
    const scriptTag = document.currentScript;

    const baseUrl = scriptTag.getAttribute('src').split("/Modules")[0];
    // Get customization options from data attributes
    const config = {
        fabBgColor: scriptTag.getAttribute("data-fab-bg-color") || "#9163DD",
        fabIcon: scriptTag.getAttribute("data-fab-icon") || `${baseUrl}/Modules/Chatbot/images/img-robot-face.png`,
        iframeSrc: scriptTag.getAttribute("data-iframe-src") || "",
        iframeWidth: scriptTag.getAttribute("data-iframe-width") || 375,
        iframeHeight: scriptTag.getAttribute("data-iframe-height") || 532,
    };

    // Get chatbot details
    const chatbotCode = config.iframeSrc.split("chatbot_code=")[1]?.split("/")[0];
    
    const getChatbotDetails = async () => {
        if (chatbotCode) {
            try {
                const response = await fetch(`${baseUrl}/api/v2/visitor/widget/chatbots/details/${chatbotCode}`);
                const data = await response.json();
                const chatbot = data?.data || {};
                config.fabBgColor = chatbot?.meta?.theme_color || config.fabBgColor;
                config.fabIcon = chatbot?.meta?.floating_image?.url || config.fabIcon;
                return chatbot;
            } catch (error) {
                console.error("Failed to fetch chatbot details:", error);
                return null;
            }
        }
        return null;
    };

    const chatbot = await getChatbotDetails();

    if (!config.iframeSrc) {
        console.error("Iframe source is not set");
        return;
    }

    // Create the chat widget HTML
    const widgetHTML = `
        <div class="techvill-widget-fab-container">
            <button id="techvill-widget-fab" class="techvill-widget-fab-button" style="background-color: ${config.fabBgColor}; display: ${chatbot?.status === "Active" ? "flex" : "none"};">
                <img src="${config.fabIcon}" alt="open" class="techvill-widget-fab-icon" />
            </button>
        </div>
        <div id="techvill-widget-chat-modal" class="techvill-widget-chat-modal">
            <div class="techvill-widget-chat-body">
                ${config.iframeSrc ? `
                    <iframe 
                        src="${config.iframeSrc}"
                        width="${config.iframeWidth}"
                        height="${config.iframeHeight}"
                        title="Techvillage support chat"
                        frameborder="0"
                        allowfullscreen
                        allowtransparency
                        id="techvill-widget-iframe"
                        onload="window.parent.postMessage('techvill-widget-iframe-loaded', '*')"
                        name="techvill-widget-iframe"
                        crossOrigin="anonymous"
                    ></iframe>` : `
                    <div class="techvill-widget-notfound-iframe">
                        <h1>Chat widget</h1>
                        <p>iframe source is not set</p>
                    </div>`
                }
            </div>
        </div>
    `;

    // Create the style element with CSS
    const style = document.createElement("style");
    style.textContent = `
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
        .techvill-widget-fab-container {
            position: fixed;
            bottom: 20px;
            right: 21px;
            z-index: 1500;
        }
        .techvill-widget-fab-button {
            position: relative;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            color: #fff;
            border: none;
            cursor: pointer;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
            transition: all 0.1s ease-in-out;
        }
        .techvill-widget-fab-icon {
            height: 80px;
            width: 80px;
            border-radius: 50%;
            object-fit: fill;
        }
        .techvill-widget-chat-modal {
            visibility: hidden;
            opacity: 0;
            position: fixed;
            bottom: 70px;
            right: 21px;
            background-color: #fff;
            z-index: 1000;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); 
            transition: all 0.2s ease-in-out;
        }
        .techvill-widget-notfound-iframe {
            min-height: 532px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .techvill-widget-notfound-iframe p {
            margin: 0;
            padding: 0;
            color: #000;
        }
    `;

    // Inject HTML and CSS
    document.body.insertAdjacentHTML("beforeend", widgetHTML);
    document.head.appendChild(style);

    // Toggle chat widget visibility
    const toggleChatWidget = () => {
        const chatModal = document.getElementById("techvill-widget-chat-modal");
        if (isOpen) {
            chatModal.style.visibility = "visible";
            chatModal.style.bottom = "110px";
            chatModal.style.opacity = "1";
            fabButton.innerHTML = `
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.536971 0.536971C1.25293 -0.17899 2.41373 -0.17899 3.1297 0.536971L11 8.40728L18.8703 0.536971C19.5863 -0.17899 20.7471 -0.17899 21.463 0.536971C22.179 1.25293 22.179 2.41373 21.463 3.1297L13.5927 11L21.463 18.8703C22.179 19.5863 22.179 20.7471 21.463 21.463C20.7471 22.179 19.5863 22.179 18.8703 21.463L11 13.5927L3.1297 21.463C2.41373 22.179 1.25293 22.179 0.536971 21.463C-0.17899 20.7471 -0.17899 19.5863 0.536971 18.8703L8.40728 11L0.536971 3.1297C-0.17899 2.41373 -0.17899 1.25293 0.536971 0.536971Z" fill="white"/>
                </svg>`;
            fabButton.style.transform = "rotate(90deg)";
        } else {
            chatModal.style.visibility = "hidden";
            chatModal.style.bottom = "70px";
            chatModal.style.opacity = "0";
            fabButton.innerHTML = `<img src="${config.fabIcon}" alt="open" class="techvill-widget-fab-icon"/>`;
            fabButton.style.transform = "rotate(0deg)";
        }
        fabButton.style.transition = "all 0.2s ease-in-out";
        isOpen = !isOpen;
    };

    // Initialize state and event listener
    let isOpen = true;
    const fabButton = document.getElementById("techvill-widget-fab");
    fabButton.addEventListener("click", toggleChatWidget);
})();
