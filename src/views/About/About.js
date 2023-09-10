import Navbar from "../../components/Navbar/Navbar";

export default function About(){
    return (
        <>
            <Navbar/>
            <div className="container mt-5">
                <h1 className="text-6xl fw-bold text-center">About me</h1>
            </div>
            <div className="container p-4 mt-4">
                <div className="container d-flex justify-center text-center p-5 rounded-lg h-80 bg-gray-400">
            <h1 className="fs-1 ">
            Hi, my name is Saurabh Jaykar and I am a full stack developer. I enjoy creating web applications using HTML, CSS, JavaScript, Bootstrap, React.js, MongoDB, and NodeJS. My favorite type of application to create is e-commerce websites using React.n
        </h1>

                </div>
            </div>
        </>
    )
}