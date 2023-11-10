import axios from "axios"
import { getPostFulfilled, getPostPending, getPostRejected } from "../actions"

export default function getposts() {
    return async (dispatch) => {
        try {
            dispatch(getPostPending());
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch(getPostFulfilled(data));
        } catch (error) {
            dispatch(getPostRejected(error.message));
        }
    }
}