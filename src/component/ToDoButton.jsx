function ToDoButton(props) {
    let id = props.id;
    return (
        <>
            <span><button onClick={()=>props.hapusId(id)}>🚽</button></span>
        </>
    )
}

export default ToDoButton