function Form(props) {
    return (
        <div className="wrapper">
            <div className="todowrapper">
                    <header>
                        <h3>🧾 Todo List </h3>
                    </header>

                    <form className="input-box">
                        <input type="text" ref={props.newTask} placeholder="Add Your Task" />
                        <button type="submit" onClick={props.addTask}>Add Task</button>
                    </form>

            </div>
        </div>
    )
}

export default Form