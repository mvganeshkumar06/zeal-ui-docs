import { Container, Text, Image, List, ListItem, Button, ColorModeSwitch } from '@zeal-ui/core';
import { HomeStyled } from '../styles/HomeStyled';
import Link from 'next/link';

const Home = () => {
    return (
        <HomeStyled type="col" width="100%" rowCenter colCenter>
            <Container type="col" rowCenter colCenter className="contentContainer">
                <Image src="/zeal-ui-icon.svg" alt="ZealUIIcon" className="zealUIIcon" />
                <Text type="mainHeading">Zeal UI</Text>
                <Container type="col" rowCenter colCenter>
                    <Text type="subHeading1" className="tagline">
                        A simple, minimalistic component library to build your awesome apps faster.
                    </Text>
                    <Text type="subHeading2">Features</Text>
                    <List type="stacked" className="features">
                        <ListItem>Reusable and customizable components</ListItem>
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
                    <ColorModeSwitch className="colorModeSwitch" />
                </Container>
            </Container>
        </HomeStyled>
    );
};

export default Home;
