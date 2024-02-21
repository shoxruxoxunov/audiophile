import { useParams } from "react-router-dom";
function Detail() {
  // Fetch('http://localhost:3000/data/?slug')
  const { name } = useParams();
  return <div></div>;
}

export default Detail;
