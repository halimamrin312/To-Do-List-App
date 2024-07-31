import ToDoButton from './ToDoButton'

function ToDoList(props) {
    props.tasks.sort((a, b) => (b.id - a.id))
    return (

        <div className="wrapper">
            <div className="todowrapper">
                <ul>
                    {props.tasks.map((item) => {
                        let statCompleted = ''
                        if (item.completed) {
                            statCompleted = 'Sudah Siap😉✅'
                        } else {
                            statCompleted = 'Belum Siap💀❌'
                        }
                        return (
                            <li key={item.id}>
                                <div className="left">
                                    <span><button onClick={() => props.setCompleted(item.id)}>{statCompleted}</button></span>
                                </div>
                                <div className="center">
                                    <p>{item.task}</p>
                                </div>
                                <div className="right">
                                    <ToDoButton />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList