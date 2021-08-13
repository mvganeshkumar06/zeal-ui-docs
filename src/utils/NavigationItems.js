import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const headerContents = {
    title: "Zeal UI",
    logo: {
        src: "/zeal-ui-icon.svg",
        alt: "icon"
    },
    links: [
        {
            item: <GitHubIcon />,
            to: "https://github.com/mvganeshkumar06",
            linkType: "external",
            position: "right",
        },
        {
            item: <LinkedInIcon />,
            to: "https://www.linkedin.com/in/mvganeshkumar06",
            linkType: "external",
            position: "right",
        }
    ],
};

const sidebarContents = {
    links: [
        {
            label: "Intro",
            items: [
                {
                    item: "Getting Started",
                    to: "/docs/getting-started",
                },
                {
                    item: "Customizing Components",
                    to: "/docs/customizing-components",
                }
            ],
        },
        {
            label: "Components",
            items: [
                {
                    item: "Alert",
                    to: "/docs/alert",
                },
                {
                    item: "Avatar",
                    to: "/docs/avatar",
                },
                {
                    item: "Badge",
                    to: "/docs/badge",
                },
                {
                    item: "Button",
                    to: "/docs/button",
                },
                {
                    item: "Container",
                    to: "/docs/container",
                },
                {
                    item: "Grid",
                    to: "/docs/grid",
                },
                {
                    item: "Image",
                    to: "/docs/image",
                },
                {
                    item: "List",
                    to: "/docs/list",
                },
                {
                    item: "Menu",
                    to: "/docs/menu",
                },
                {
                    item: "Modal",
                    to: "/docs/modal",
                },
                {
                    item: "Slideshow",
                    to: "/docs/slideshow",
                }
            ]
        },
        {
            label: "Utils",
            items: [
                {
                    item: "Divider",
                    to: "/docs/divider",
                },
                {
                    item: "Inline Code",
                    to: "/docs/inline-code",
                },
                {
                    item: "Layout",
                    to: "/docs/layout",
                },
                {
                    item: "Spinner",
                    to: "/docs/spinner",
                },
                {
                    item: "Text",
                    to: "/docs/text",
                }
            ]
        }
    ],
};

const footerContents = {
    links: [
        {
            title: "Social",
            items: [
                {
                    item: "Github",
                    to: "https://github.com/mvganeshkumar06",
                    linkType: "external"
                },
                {
                    item: "LinkedIn",
                    to: "https://www.linkedin.com/in/mvganeshkumar06/",
                    linkType: "external"
                }
            ]
        }
    ]
};

export { headerContents, sidebarContents, footerContents };
