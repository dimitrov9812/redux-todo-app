let nextToDoId = 0;

export const addToDo = (text) => ({
    type: "ADD_TODO",
    id: nextToDoId++,
    text
})

export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setVisibilityFilter = filter => ({
    type: "SET_VISIBILITY_FILTER",
    filter
})