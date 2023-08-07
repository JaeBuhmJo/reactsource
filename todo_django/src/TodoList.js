import { useEffect, useState } from "react";
import axios from "axios";

function TodoList() {
  //장고 서버에서 todo 가져오기

  const [todolist, settodolist] = useState([]);
  useEffect(() => {
    //컴포넌트가 로드된 후 실행해야 할 작업
    axios.get("http://127.0.0.1:8000/todo/").then((response) => {
      console.log(response.data);
      if (response.data) {
        settodolist(response.data);
      }
    });
  }, []);

  return (
    <div className="container">
      <h3>ToDo</h3>
      <div className="row my-3">
        <div className="col-auto mr-auto">
          <a href="" className="btn btn-success">
            <i className="bi-plus"></i>Add ToDo
          </a>
        </div>
        <div className="col-auto">
          <a href="" className="btn btn-primary">
            완료한 ToDo 목록
          </a>
        </div>
      </div>
      <table className="table">
        <tbody>
          {todolist.map((todo, idx) => {
            return (
              <tr key={idx}>
                <th className="align-middle">
                  <a href=" ">{todo.title}</a>
                  {todo.important ? <span className="badge text-bg-danger">!</span> : ""}
                </th>
                <td className="text-right">
                  <a href="" className="btn btn-danger">
                    완료
                  </a>
                  <a href="" className="btn btn-outline-primary">
                    수정
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TodoList;
