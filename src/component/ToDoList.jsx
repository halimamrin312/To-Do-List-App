import ToDoButton from './ToDoButton'

function ToDoList(props) {
    props.tasks.sort((a, b) => (b.id - a.id))
    return (

        <div className="task-body">
            <ul className='task-frame'>

                {props.tasks.map((item) => {
                    let classCompleted = ''

                    if (item.completed) {
                        classCompleted = 'active';
                    } else {
                        classCompleted = '';
                    }
                    return (

                        <li key={item.id} className = {'list '+ classCompleted}>
                            <div className="left">
                                <button className={'button '+ classCompleted} onClick={() => props.setCompleted(item.id)}>
                                    <div className={'circle '+ classCompleted}></div>
                                </button>
                            </div>
                            <div className="center">
                                <p>{item.task}</p>
                            </div>
                            <div className="right">
                                <ToDoButton id={item.id} hapusId={props.hapusId} />
                            </div>
                        </li>
            )
                })}

        </ul>
        </div >
    )
}

export default ToDoList