const getDefaultState = () => {
  JSON.stringify(localStorage.setItem("view", "grid"));
  return "grid";
};

const initialState = !localStorage.getItem("view")
  ? getDefaultState()
  : localStorage.getItem("view");

const viewReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "GRID": {
      JSON.stringify(localStorage.setItem("view", "grid"));
      return (state = "grid");
    }

    case "LARGE": {
      JSON.stringify(localStorage.setItem("view", "large"));
      return (state = "large");
    }
    default: {
      return state;
    }
  }
};

export default viewReducer;
