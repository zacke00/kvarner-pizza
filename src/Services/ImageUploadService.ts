import axios from "axios";

const ImageUploadService = (
    () => {
        const imageUploadEndpoint = "http://localhost:5282/api/Item/UploadImage";

        const uploadImage = async (name: string, image: File) => {
            
            const formData = new FormData();
            formData.append("file", image);
            

            const result = await axios({
                url: imageUploadEndpoint + "/" + name,
                method: "POST",
                data: formData,
                headers: { "Content-Type": "multipart/form-data"}
            });

            formData.delete("file");
            
            
        }

        return {
            uploadImage
        }
    }
)();

export default ImageUploadService;