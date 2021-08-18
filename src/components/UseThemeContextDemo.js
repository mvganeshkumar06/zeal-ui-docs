import { useThemeContext, Button } from "@zeal-ui/core";

const UseThemeContextDemo = () => {
    const { theme, toggleTheme } = useThemeContext();
    return (
        <Button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} theme
        </Button>
    );
};

export default UseThemeContextDemo;