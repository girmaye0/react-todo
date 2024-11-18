import React from "react";

function AddTodoForm() {
    return(
        <form>
            <label htmlFor="todoTittle">Tittle</label>
            <input type="text" id="todoTittle" />
            <button type="submit">Add</button>

        </form>
    );
};
export default AddTodoForm;