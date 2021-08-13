import { Button, Menu, useNotify, List, ListItem } from "@zeal-ui/core";

const MenuDemo = () => {
    const { isOpen, onOpen, onClose } = useNotify();
    return (
        <>
            <Button onClick={() => onOpen("MENU")}>Menu</Button>
            <Menu isOpen={isOpen === "MENU"} onClickAway={onClose} width="15rem">
                <List styleType="circle">
                    <ListItem>
                        There are many variations of passages of Lorem Ipsum
                        available.
                    </ListItem>
                    <ListItem>
                        The majority have suffered alteration in some form, by
                        injected humour, or randomised words.
                    </ListItem>
                    <ListItem>Which don't look even slightly believable.</ListItem>
                    <ListItem>
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary.
                    </ListItem>
                </List>
            </Menu>
        </>
    );
};

export default MenuDemo;