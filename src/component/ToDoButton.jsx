function ToDoButton(props) {
    let id = props.id;
    return (
        <>
            <span><button onClick={()=>props.hapusId(id)}>DELETE</button></span>
        </>
    )
}

export default ToDoButton