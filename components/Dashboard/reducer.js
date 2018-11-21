import data from "../Commans/data.json";

const initialState = {
  hotTickets: data.hot_tickets,
  categories: data.categories,
  featuredIn: data.featuredIn
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_DATA":
      return {
        ...state,
        hotTickets: action.payload.hot_tickets
      };
    default:
      return state;
  }
};

export default dashboard;
