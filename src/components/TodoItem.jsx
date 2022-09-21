const TodoItem = (props) => {
    return (
        <li>
            <h2 className="tit">오늘은 React를 공부할 것입니다. ({props.num})</h2>
            <lable htmlFor="done" className="sr-only">완료</lable>
            <input type="checkbox" className="done" id="done" />
            <button className="del">삭제</button>
        </li>
    );
};

export default TodoItem;