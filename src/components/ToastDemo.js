import { Toast, useNotify, Text, Container, Button } from "@zeal-ui/core";

const ToastDemo = () => {
    const { isOpen, onOpen, onClose } = useNotify();
    return (
        <Container type="col" width="100%">
            <Container type="col">
                <Button onClick={() => onOpen("TOAST_LEFT")}>
                    Toast left
                </Button>
                <Button onClick={() => onOpen("TOAST_CENTER")}>
                    Toast center
                </Button>
                <Button onClick={() => onOpen("TOAST_RIGHT")}>
                    Toast right
                </Button>
            </Container>
            <Toast
                type="left"
                delay={3000}
                isOpen={isOpen === "TOAST_LEFT"}
                onClose={onClose}
                color="blue"
            >
                <Text>
                    Lorem ipsum dolor sit amet.
                </Text>
            </Toast>
            <Toast
                type="center"
                delay={3000}
                isOpen={isOpen === "TOAST_CENTER"}
                onClose={onClose}
                color="blue"
            >
                <Text>
                    Lorem ipsum dolor sit amet.
                </Text>
            </Toast>
            <Toast
                type="right"
                delay={3000}
                isOpen={isOpen === "TOAST_RIGHT"}
                onClose={onClose}
                color="blue"
            >
                <Text>
                    Lorem ipsum dolor sit amet.
                </Text>
            </Toast>
        </Container>
    );
};

export default ToastDemo;
