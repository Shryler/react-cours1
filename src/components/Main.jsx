import MyCard from "./MyCard";
import "./styles/main.css";

function Main() {
    return (
        <>
        <main className="bg-primary container">
        <div className="imgMyCard">
            <MyCard imageSrc="https://picsum.photos/id/237/200/300" cardTitle="Titre 1" />
            <MyCard imageSrc="https://picsum.photos/id/238/200/300" cardTitle="Titre 2" />
            <MyCard imageSrc="https://picsum.photos/id/239/200/300" cardTitle="Titre 3" />
            <MyCard imageSrc="https://picsum.photos/id/240/200/300" cardTitle="Titre 4" />
            <MyCard imageSrc="https://picsum.photos/id/241/200/300" cardTitle="Titre 5" />
        </div>
        </main>
        </>
    );
}

export default Main;