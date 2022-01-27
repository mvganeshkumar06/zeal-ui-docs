const getTitleFromPath = (path) => {
    return path
        .split('-')
        .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
        .join(' ');
};

export default getTitleFromPath;
