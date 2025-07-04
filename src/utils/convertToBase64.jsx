const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => {
            console.error("Base64 conversion error:", error);
            resolve(undefined);
        };
    });
};

export default convertToBase64;



