"use strict";

localStorage.removeItem("gjsProject");

var escapeName = (name) => `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-");

var editor = grapesjs.init({
    container: "#gjs",
    height: "98vh",
    StorageManager: false,
    selectorManager: { escapeName },
    fromElement: true,
    assetManager: {
        multiUpload: true,
        params: {
            _token: csrfToken,
        },
        upload: uploadImage,
        uploadName: "files",
        assets: images,
    },
    plugins: [
        "grapesjs-preset-webpage",
        "gjs-blocks-basic",
        "grapesjs-tabs",
        "grapesjs-parser-postcss",
        "gjs-plugin-ckeditor",
        "grapesjs-custom-code",
        "grapesjs-tailwind",
        "grapesjs-plugin-forms",
    ],
    pluginsOpts: {
        "grapesjs-tabs": {
            tabsBlock: {
                category: 'Extra',
            }
        },
        "gjs-preset-webpage": {
            modalImportTitle: jsLang("Import Template"),
            modalImportLabel:
                '<div style="margin-bottom: 10px; font-size: 13px;">' + jsLang("Paste here your HTML/CSS and click Import") + '</div>',
            modalImportContent: function (editor) {
                return (
                    editor.getHtml() + "<style>" + editor.getCss() + "</style>"
                );
            },
            textCleanCanvas: jsLang("Are you sure to clear the canvas?"),
        },
        "gjs-plugin-ckeditor": {
            options: {
                language: "en",
                toolbarGroups: [
                    { name: "styles", groups: ["styles"] },
                    { name: "colors", groups: ["colors"] },
                    { name: "tools", groups: ["tools"] },
                    { name: "others", groups: ["others"] },
                    { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
                    "/",
                    {
                        name: "paragraph",
                        groups: [
                            "list",
                            "indent",
                            "blocks",
                            "align",
                            "bidi",
                            "paragraph",
                        ],
                    },
                    { name: "clipboard", groups: ["clipboard", "undo"] },
                    {
                        name: "editing",
                        groups: [
                            "find",
                            "selection",
                            "spellchecker",
                            "editing",
                        ],
                    },
                    "/",
                    { name: "links", groups: ["links"] },
                    { name: "insert", groups: ["insert"] },
                ],
                removeButtons: "NewPage",
            },
        },
        "grapesjs-custom-code": {},
        "grapejs-tailwind": {},
        "grapesjs-plugin-forms": {},
    },
});

const processStorePage = (data) => {
    saveButton.set({
        className: "fa fa-floppy-o icon-blank page-save-button",
        label: "",
    });
    if (data.status = 'info') {
        triggerNotification(data.message);
    } else {  
        triggerNotification(data.message);
    }
};

const savePage = function () {
    saveButton.set({
        className: "page-save-button",
        label: `  <svg width="20" height="20" viewBox="0 0 16 16" color="#FFFFFF" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.05022 3.05026 C 2.65969 3.44078 2.65969 4.07394 3.05022 4.46447 C 3.44074 4.85499 4.07391 4.85499 4.46443 4.46447 L 3.05022 3.05026Z M 4.46443 4.46447 C 5.16369 3.76521 6.05461 3.289 7.02451 3.09608 L 6.63433 1.13451 C 5.27647 1.4046 4.02918 2.07129 3.05022 3.05026 L 4.46443 4.46447Z M 7.02451 3.09608 C 7.99442 2.90315 8.99975 3.00217 9.91338 3.3806 L 10.6787 1.53285C9.39967 1.00303 7.9922 0.864409 6.63433 1.13451 L 7.02451 3.09608ZM9.91338 3.3806C10.827 3.75904 11.6079 4.39991 12.1573 5.22215L13.8203 4.11101C13.0511 2.95987 11.9578 2.06266 10.6787 1.53285L9.91338 3.3806ZM12.1573 5.22215C12.7067 6.0444 13 7.01109 13 8L15 8C15 6.61553 14.5894 5.26215 13.8203 4.11101L12.1573 5.22215Z" fill="url(#paint0_linear_11825_47664)"/>
        <path d="M3 8C3 7.44772 2.55228 7 2 7C1.44772 7 1 7.44772 1 8L3 8ZM1 8C1 8.91925 1.18106 9.82951 1.53284 10.6788L3.3806 9.91342C3.12933 9.30679 3 8.65661 3 8L1 8ZM1.53284 10.6788C1.88463 11.5281 2.40024 12.2997 3.05025 12.9497L4.46447 11.5355C4.00017 11.0712 3.63188 10.52 3.3806 9.91342L1.53284 10.6788ZM3.05025 12.9497C3.70026 13.5998 4.47194 14.1154 5.32122 14.4672L6.08658 12.6194C5.47996 12.3681 4.92876 11.9998 4.46447 11.5355L3.05025 12.9497ZM5.32122 14.4672C6.1705 14.8189 7.08075 15 8 15L8 13C7.34339 13 6.69321 12.8707 6.08658 12.6194L5.32122 14.4672ZM8 15C8.91925 15 9.82951 14.8189 10.6788 14.4672L9.91342 12.6194C9.30679 12.8707 8.65661 13 8 13L8 15ZM10.6788 14.4672C11.5281 14.1154 12.2997 13.5998 12.9497 12.9497L11.5355 11.5355C11.0712 11.9998 10.52 12.3681 9.91342 12.6194L10.6788 14.4672ZM12.9497 12.9497C13.5998 12.2997 14.1154 11.5281 14.4672 10.6788L12.6194 9.91342C12.3681 10.52 11.9998 11.0712 11.5355 11.5355L12.9497 12.9497ZM14.4672 10.6788C14.8189 9.8295 15 8.91925 15 8L13 8C13 8.65661 12.8707 9.30679 12.6194 9.91342L14.4672 10.6788Z" fill="url(#paint1_linear_11825_47664)"/>
        <defs>
        <linearGradient id="paint0_linear_11825_47664" x1="14" y1="8" x2="2" y2="8" gradientUnits="userSpaceOnUse">
        <stop stop-color="currentColor" stop-opacity="0.5"/>
        <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_11825_47664" x1="2" y1="8" x2="14" y2="8" gradientUnits="userSpaceOnUse">
        <stop stop-color="currentColor"/>
        <stop offset="1" stop-color="currentColor" stop-opacity="0.5"/>
        </linearGradient>
        </defs>
        <animateTransform
            from="0 0 0"
            to="360 0 0"
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1300ms"
          />
          </svg>`,
    });
    ajaxRequest(
        {
            html: editor.getHtml(),
            css: editor.getCss(),
            _token: csrfToken,
        },
        pageStoreUrl,
        processStorePage
    );
};

const redirectToPage = () => {
    window.open(pagePreviewUrl, "_blank");
};

editor.Panels.addButton("options", [
    {
        id: "save",
        className: "fa fa-floppy-o page-save-button",
        command: savePage,
        attributes: { title: jsLang("Save Template") },
    },
    {
        id: "redirect",
        className: "fa fa-arrow-circle-o-right",
        command: redirectToPage,
        attributes: { title: jsLang("Preview in new tab") },
    },
]);

const saveButton = editor.Panels.getButton("options", "save");

const ajaxRequest = (data, url, callback) => {
    $.post(url, data, callback);
};

const assetManager = editor.AssetManager;

editor.Panels.removeButton("options", "export-template");

editor.Panels.getButton("options", "gjs-open-import-webpage").set({
    label: "",
    className: "fa fa-upload",
});

editor.on("asset:upload:response", (response) => {
    if (response.error !== undefined) {
        throw "Failed to upload image.";
    } else {
        assetManager.add(response);
    }
});

const triggerNotification = (msg) => {
    $(".notification-msg-bar").find(".notification-msg").html(msg);
    $(".notification-msg-bar").removeClass("smoothly-hide");
    setTimeout(() => {
        $(".notification-msg-bar").addClass("smoothly-hide"),
            $(".notification-msg-bar").find(".notification-msg").html("");
    }, 1500);
};