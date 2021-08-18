import { useMediaQuery, Badge } from "@zeal-ui/core";

const useMediaQueryDemo = () => {
    const [isDesktop] = useMediaQuery(["(min-width: 1024px)"]);
    return (
        <Badge color="purple">
            {isDesktop ? "Rendering in a desktop" : "Rendering in a mobile"}
        </Badge>
    );
};

export default useMediaQueryDemo;