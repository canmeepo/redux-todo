let nextTodoId = 0

export const addTodo = ( todo, done) => ({
    type: 'ADD_TODO',
    payload: {
        id: nextTodoId++,
        todo,
        done
    }
})

export const deleteTodo = (id) => ({
    type: 'DELETE',
    id
})

export const done = (id) => ({
    type: 'DONE',
    id
})
