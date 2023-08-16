export const addToDo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id : new Date().getTime().toString(),
            data: data,
            isCompleted: false,
        }
    };
    }

export const removeToDo = (id) => {
    return {
        type: "REMOVE_TODO",
       id
        
    };
    }

export const completeToDo = (id) => {
    return {
        type: "COMPLETE_TODO",
        payload: id,
         
    };
    }
