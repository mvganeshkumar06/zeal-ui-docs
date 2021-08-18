import { Button, useStyles } from "@zeal-ui/core";

const UseStylesDemo = () => {
    const styles = useStyles((style, theme) => `
        background-color:${theme === "light" ? style.colors.blue[2] : style.colors.blue[3]}; 
        :hover{
            background-color:${theme === "light" ? style.colors.red[2] : style.colors.red[3]};     
        }
        font-size:1.25rem;
    `);

    return (
        <Button width="10rem" customStyles={styles}>Custom Button</Button>
    );
};

export default UseStylesDemo;
