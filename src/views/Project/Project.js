import Cards from "../../components/Cards/Cards";
import TodoImage from "./Images/todo.png";
import PettoImage from "./Images/petto.png";
import QuizImage from "./Images/quiz.png";
import TextmImage from "./Images/textM.png";
import Navbar from "../../components/Navbar/Navbar";

export default function Project() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
      <div className="d-flex justify-content-evenly flex-wrap">
        <Cards
          title={"Todo App"}
          description={
            "Lorem ipsum dolor sit ampedita repellat eius, explicabo fugit delectus sit harum cupiditate!"
          }
          img={TodoImage}
        />
        <Cards
          title={"Pettopia"}
          description={
            "Lorem ipsum dolor sit ampedita repellat eius, explicabo fugit delectus sit harum cupiditate!"
          }
          img={PettoImage}
        />
        <Cards
          title={"Quizz Master"}
          description={
            "Lorem ipsum dolor sit ampedita repellat eius, explicabo fugit delectus sit harum cupiditate!"
          }
          img={QuizImage}
        />
        <Cards
          title={"Text Master"}
          description={
            "Lorem ipsum dolor sit ampedita repellat eius, explicabo fugit delectus sit harum cupiditate!"
          }
          img={TextmImage}
        />
      </div>
    </>
  );
}
