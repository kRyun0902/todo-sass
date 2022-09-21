const TodoInsert = (props) => {
    return (
        <form>
            {/* 라벨 태그의 htmlFor을 인풋의 id랑 같게 하면 라벨 클릭하면 인풋에 포커싱됨 */}
            <label className="sr-only" htmlFor="new">새 일정</label>
            <input type="text" id="new" autoFocus placeholder="새 일정을 입력하세요 :" autoComplete="off" />
            <button type="button">추가</button>
        </form>
    );
};

export default TodoInsert;