import Cards from "../../components/Cards/Cards";
import TodoImage from "./Images/todo.png";
import PettoImage from "./Images/petto.png";
import QuizImage from "./Images/quiz.png";
import TextmImage from "./Images/textM.png";
import Navbar from "../../components/Navbar/Navbar";
import BmiImage from "./Images/bmi.png"
import CalcyImage from "./Images/calcy.png"
import DrumImage from "./Images/drum.png"
import WeatherImage from "./Images/weather.png"




export default function Project( ) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <h1 className="container text-5xl py-9 text-center fw-bold">
          My Project Work
        </h1>
      </div>
      <div className="d-flex justify-content-evenly flex-wrap">
        <Cards
          title={"Todo App"}
          description={
            "Lorem ipsum dolor sit ampedita repellat eius, explicabo fugit delectus sit harum cupiditate!"
          }
          img={TodoImage}
          liveUrl="https://github.com/saurabhjaykar1603/taskeasy"
          gitubUrl="https://github.com/saurabhjaykar1603/taskeasy"
        />
        <Cards
          title={"Pettopia"}
          description={
            "Lorem ipsum dolor sit ampedita repellat eius, explicabo fugit delectus sit harum cupiditate!"
          }
          img={PettoImage}
          liveUrl={"https://petopia.netlify.app/#"}
          gitubUrl={"https://github.com/saurabhjaykar1603/petopiya"}
        />
        <Cards
          title={"Quizz Master"}
          description={
            "Lorem ipsum dolor sit ampedita repellat eius, explicabo fugit delectus sit harum cupiditate!"
          }
          img={QuizImage}
          liveUrl={"https://quiz-master-rtc.netlify.app/"}
          gitubUrl={"https://github.com/harshbhange0/quizmaster"}
        />
        <Cards
          title={"Text Master"}
          description={
            "Lorem ipsum dolor sit ampedita repellat eius, explicabo fugit delectus sit harum cupiditate!"
          }
          img={TextmImage}
          liveUrl={"https://textmaster.onrender.com/"}
          gitubUrl={"https://textmaster.onrender.com/"}
        />
      </div>

      <section>
        <div>
          <h1 className="container text-5xl py-9 text-center fw-bold">
            My Project Mini Work
          </h1>
        </div>
        <div className="d-flex justify-content-evenly flex-wrap">
          <Cards
            title={"Arthmetic Calculator"}
            description={
              "Lorem ipsum dolor sit ampedita repellat eius, explicabo fugit delectus sit harum cupiditate!"
            }
            img={ CalcyImage}
            liveUrl="https://saurabh-calcy.netlify.app/"
            gitubUrl="https://github.com/saurabhjaykar1603/JS-CALCULATOR"
          />
          <Cards
            title={"Drum Kit"}
            description={
              "Lorem ipsum dolor sit ampedita repellat eius, explicabo fugit delectus sit harum cupiditate!"
            }
            img={DrumImage}
            liveUrl={"https://drum-keet-sj.netlify.app/"}
            gitubUrl={"https://github.com/saurabhjaykar1603/DRUM-KEET"}
          />
          <Cards
            title={"BMI Calculator"}
            description={
              "Lorem ipsum dolor sit ampedita repellat eius, explicabo fugit delectus sit harum cupiditate!"
            }
            img={BmiImage}
            liveUrl={"https://bmi-calcy.netlify.app/"}
            gitubUrl={"https://github.com/saurabhjaykar1603/bmi-calculator"}
          />
          <Cards
            title={"Weather app"}
            description={
              "Lorem ipsum dolor sit ampedita repellat eius, explicabo fugit delectus sit harum cupiditate!"
            }
            img={WeatherImage}
            liveUrl={"https://weather360-bysj.netlify.app/"}
            gitubUrl={"https://github.com/saurabhjaykar1603/Weather360"}
          />
        </div>
      </section>
    </>
  );
}
