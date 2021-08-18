import { Container, Button, Toast, Text, useNotify } from "@zeal-ui/core";

const UseNotifyDemo = () => {
    const { isOpen, onOpen, onClose } = useNotify();
    return (
        <Container type="col" width="100%">
            <Button onClick={() => onOpen("TOAST_CENTER")}>
                Toast center
            </Button>
            <Toast
                type="center"
                delay={3000}
                isOpen={isOpen === "TOAST_CENTER"}
                onClose={onClose}
                color="blue"
            >
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                </Text>
            </Toast>
        </Container>
    );
};

export default UseNotifyDemo;