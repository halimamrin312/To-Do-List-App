function Form(props) {
    return (
        <form className="input">
            <input type="text" ref={props.newTask} placeholder="What will you do" />
            <button type="submit" onClick={props.addTask}>Add Task</button>
        </form>
    )
}

export default Form