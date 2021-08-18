import { Container, Button, Modal, Text, useNotify } from "@zeal-ui/core";

const ModalDemo = () => {
    const styles = `
        .modal{
            width: 18rem;
            height: 20rem;
            @media(min-width:425px){
                width:25rem;
                height:25rem;
            }
        }
    `;
    const { isOpen, onOpen, onClose } = useNotify();
    return (
        <Container type="col" customStyles={styles}>
            <Button onClick={() => onOpen("REGULAR_MODAL")}>Regular Modal</Button>
            <Button onClick={() => onOpen("CENTERED_MODAL")}>Centered Modal</Button>
            <Modal isOpen={isOpen === "REGULAR_MODAL"} onClickAway={onClose} className="modal">
                <Container type="row" rowBetween colCenter>
                    <Text type="subHeading">Modal</Text>
                    <Button onClick={onClose}>X</Button>
                </Container>
                <Text>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like)
                </Text>
            </Modal>
            <Modal type="center" isOpen={isOpen === "CENTERED_MODAL"} onClickAway={onClose} className="modal">
                <Container type="row" rowBetween colCenter>
                    <Text type="subHeading">Modal</Text>
                    <Button onClick={onClose}>X</Button>
                </Container>
                <Text>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like)
                </Text>
            </Modal>
        </Container>
    );
};

export default ModalDemo;