import { FETCH_POSTS_ERROR, FETCH_POSTS_COMPLETED, FETCH_POSTS_START, REMOVE_POST,  ADD_POST  } from "../actions/posts";

const initialState = {
  data: [
    //     {
    //     title: "Diablo",
    //     description: "dsfsdfsdf",
    //     price: 150,
    //     pictureUrls: ["https://terramare.vn.ua/wp-content/uploads/2018/11/%D0%B4%D1%96%D0%B0%D0%B1%D0%BB%D0%BE-min.jpeg"],
    //     diameter: 35,
    // },
    // {
    //     title: "Affumicata",
    //     description: "dsfsdfsdf",
    //     price: 155,
    //     pictureUrls: ["https://terramare.vn.ua/wp-content/uploads/2018/11/%D0%B0%D1%84%D1%84%D1%83%D0%BC%D0%B8%D0%BA%D0%B0%D1%82%D0%B0-min-1024x802.jpeg"],
    //     diameter: 35,
    // },
  ],
  isLoading: false,
  error: null,
};
// Action:

// type: "ADD-POST",
// payload: {id: 1, ...}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FETCH_POSTS_COMPLETED: {
        return {
          ...state,
         data: action.payload,
         isLoading: false
        }
      }
      case FETCH_POSTS_ERROR: {
        return {
          ...state,
         disLoading: false,
         error: action.payload
        }
      }
    case ADD_POST: {
      console.log(action.payload, state.data);
      return {
        ...state,
        data: [action.payload, ...state.data],
      }
    }
    case REMOVE_POST: {
      console.log(action.payload, state.data);
      return {
        ...state,
        data: state.data.filter((p) => p._id !== action.payload),
      }
    }
    default: {
      return state;
    }
  }
};
