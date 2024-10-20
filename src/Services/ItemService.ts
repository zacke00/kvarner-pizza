import axios from "axios";
import IItem from "../Interfaces/IItem";

const ItemService = (
    ()=> {
        const ItemEndpoint = "http://localhost:5282/api/Item";

        const getAllItems = async () => {
    try {
        const response = await axios.get("http://localhost:5282/api/Item");
        return response.data;
    } catch (error) {
        console.error("Error inside getAllItems", error);
        throw error; // Rethrow error to handle it properly elsewhere
    }
};

        const getById = async (id: number) => {
            try {
                const response = await axios.get(ItemEndpoint + "/" + id);
                return response.data;
            }catch(error){
                console.error("Error with get by id",error);
            }
        }

        const getByName = async (name: string) => {
            try {
                const response = await axios.get(ItemEndpoint + "/name/" + name);
                return response.data;
            }catch(error){
                console.error("Error with Get by name",error);
            }
        }

        const putItem = async (editedItem: IItem) => {
            try {
                const response = await axios.put(ItemEndpoint, editedItem);
                return response.data;
            }catch(error){
                console.error("Error with Put Item",error);
            }
        }

        const postItem = async (newItem: IItem) => {
            try {
                const response = await axios.post(ItemEndpoint, newItem);
                return response.data;
            }catch(error){
                console.error("Error with Post Item",error);
            }
        }

        const getImage = async (id: number) => {
            try {
                const response = await axios.get(ItemEndpoint + "/image/" + id);
                return response.data;
            }catch(error){
                console.error("Error with Get Image",error);
            }

        }

        return {
            getAllItems,
            getById,
            getByName,
            putItem,
            postItem,
            getImage
        }


    }
)();

export default ItemService;