const initialState = {
  todos: [],
};
const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
    const newList =  state.todos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todos: newList,
       
      };
    case "COMPLETE_TODO":
      const newToDos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: newToDos,
      };
      

      default: return state;
  }
};


export default todoReducers;