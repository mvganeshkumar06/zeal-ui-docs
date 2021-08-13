import { Container, Text, Image, List, ListItem, Button, ThemeSwitch, useThemeContext } from "@zeal-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Link from "next/link";

const Home = () => {
    const styles = `
        .homeContainer{
            min-height: 100vh;
        }

        .contentContainer{
            padding: 1rem;
        }

        .footer{
            margin-top: auto;
            font-size: 0.75rem;
        }

        .features{
            text-align: center;
        }

        .tagline{
            width: 100%;
            line-height: 2rem;
            text-align: center;
        }

        .zealIcon{
            width:5rem;
            height:5rem;
        }

        .socialIcon{
            width: 1.5rem;
            height: 1.5rem;
            margin:0rem 0.5rem;
        }

        .themeSwitch{
            width: 1rem;
            height: 1rem;
        }
        
        .heartIcon{
            width: 1.5rem;
            height: 1.5rem;
            position:relative;
            top:0.3rem;
            margin-right:0.25rem;
        }

        @media(min-width:425px){
            .footer{
                font-size:1rem;
            }
        }

        @media(min-width:768px){
            .tagline{
                width:50%;
            }
        }
    `;

    const { theme } = useThemeContext();

    return (
        <Container
            type="col"
            rowCenter
            colCenter
            className="homeContainer"
            customStyles={styles}
        >
            <Container
                type="col"
                rowCenter
                colCenter
                className="contentContainer"
            >
                <Image src="/zeal-ui-icon.svg" alt="ZealUIIcon" className="zealIcon" />
                <Text type="mainHeading">Zeal UI</Text>
                <Container type="col" rowCenter colCenter>
                    <Text type="subHeading" className="tagline">
                        A simple, minimalistic component library to build your
                        awesome apps faster.
                    </Text>
                    <Text size="1.25rem">Features</Text>
                    <List type="stacked" className="features">
                        <ListItem>
                            Reusable and customizable components
                        </ListItem>
                        <ListItem>Powered by styled components</ListItem>
                        <ListItem>Built in Dark mode support</ListItem>
                        <ListItem>Responsive mobile first design</ListItem>
                    </List>
                    <br />
                    <Link href="/docs/getting-started">
                        <a>
                            <Button>Documentation</Button>
                        </a>
                    </Link>
                    <Text>{theme === "light" ? "Light" : "Dark"} Theme</Text>
                    <ThemeSwitch className="themeSwitch" />
                </Container>
            </Container>
            <Container type="col" rowCenter colCenter className="footer">
                <Text type="text">
                    Made with <FavoriteIcon className="heartIcon" />
                    by Ganesh Kumar
                </Text>
                <Container type="row" rowCenter colCenter>
                    <a
                        href="https://www.linkedin.com/in/mvganeshkumar06/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedInIcon className="socialIcon" />
                    </a>
                    <a
                        href="https://github.com/mvganeshkumar06"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GitHubIcon className="socialIcon" />
                    </a>
                    <a
                        href="https://twitter.com/mvganeshkumar06"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <TwitterIcon className="socialIcon" />
                    </a>
                </Container>
            </Container>
        </Container>
    );
};

export default Home;
