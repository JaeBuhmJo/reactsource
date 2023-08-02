export default function Navigator(props) {
  console.log(props);
  // const lis = [];

  // for (let index = 0; index < props.topics.length; index++) {
  //   const topic = props.topics[index];

  //   lis.push(
  //     <li key={topic.id}>
  //       <a href={"/read/" + topic.id}>{topic.title}</a>
  //     </li>
  //   );
  // }

  // props 여러 변수로 받아오기
  let { topics, onChangeMode } = props;

  return (
    <nav>
      <ol>
        {topics.map((topic) => (
          <li key={topic.id}>
            <a
              id={topic.id}
              href={"/read/" + topic.id}
              onClick={(e) => {
                e.preventDefault();
                onChangeMode(e.target.id);
              }}
            >
              {topic.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
