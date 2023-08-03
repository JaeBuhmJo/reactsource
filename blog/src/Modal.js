import "./Modal.css";

function Modal(props) {
  console.log(props.choice);
  const choiceArticle = props.choice;

  return (
    <div className="modal">
      <h4>{choiceArticle.title}</h4>
      <p>{choiceArticle.regdate}</p>
      <p>상세내용</p>
    </div>
  );
}

export default Modal;
