import { Toast, useNotify, Text, Container, Button } from "@zeal-ui/core";

const ToastDemo = () => {
    const { isOpen, onOpen, onClose } = useNotify();
    const toast = `
        width: 15rem;
        @media(min-width:768px){
            width:20rem;
        }
    `;
    return (
        <Layout title="Toast - Zeal UI">
            <Container type="col" width="100%">
                <Text type="mainHeading">Toast</Text>
                <Divider />
                <Text type="subHeading">Import</Text>
                <Text type="subHeading">Examples</Text>
                <Container type="col">
                    <Button onClick={() => onOpen("TOAST_LEFT")}>
                        Show toast left
                    </Button>
                    <Button onClick={() => onOpen("TOAST_CENTER")}>
                        Show toast center
                    </Button>
                    <Button onClick={() => onOpen("TOAST_RIGHT")}>
                        Show toast right
                    </Button>
                </Container>
                <Toast
                    type="left"
                    delay={3000}
                    isOpen={isOpen === "TOAST_LEFT"}
                    onClose={onClose}
                    customStyles={toast}
                >
                    <Text type="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt.
                    </Text>
                </Toast>
                <Toast
                    type="center"
                    delay={3000}
                    isOpen={isOpen === "TOAST_CENTER"}
                    onClose={onClose}
                    customStyles={toast}
                >
                    <Text type="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt.
                    </Text>
                </Toast>
                <Toast
                    type="right"
                    delay={5000}
                    isOpen={isOpen === "TOAST_RIGHT"}
                    onClose={onClose}
                    customStyles={toast}
                >
                    <Text type="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt.
                    </Text>
                </Toast>
                <Text type="subHeading">Props</Text>
            </Container>
        </Layout>
    );
};

export default ToastDemo;
