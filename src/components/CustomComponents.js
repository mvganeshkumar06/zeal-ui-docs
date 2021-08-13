import { Container, useStyles, Text, Button } from "@zeal-ui/core";

const CustomComponents = () => {
    const styles = useStyles((style, theme) => `
        width:50%;
        border:1px solid ${theme === "light" ? "black" : "white"};
        border-radius:0.5rem;
        padding:0.5rem;
        box-sizing:border-box;

        .content{
            width:100%;
            text-align:center;
        }
        
        .btn{
            width:80%; 
            background-color:${theme === "light" ? style.colors.blue[2] : style.colors.blue[3]}; 
            font-size:1.25rem;
        }
        
        .btn:hover{
            background-color:${theme === "light" ? style.colors.red[2] : style.colors.red[3]};     
        }
    `);

    return (
        <Container type="col" rowCenter customStyles={styles}>
            <Button className="btn">Customizing multiple components</Button>
            <Text className="content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
        </Container>
    );
};

export default CustomComponents;