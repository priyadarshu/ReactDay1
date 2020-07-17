import React from "react";
import "./styles.css";
import MyInfo from "./components/MyInfo";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";
import jokesData from "./components/jokesData";
import Product from "./components/Product";
import productsData from "./components/vschoolProducts";

export default function App() {
  const firstName = "Priyadarshini";
  const lastName = "Chettiar";
  const date = new Date(2020, 7, 15, 20, 0, 0);
  const hours = date.getHours();
  const styles = {
    fontSize: "30px",
    fontWeight: "15px"
  };
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756F";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#D90000";
  } else {
    timeOfDay = "night";
    styles.color = "#8914A3";
  }

  const jokeComponents = jokesData.map(joke => (
    <Joke key={joke.id} question={joke.question} punchline={joke.punchLine} />
  ));

  const productComponents = productsData.map(item => (
    <Product key={item.id} product={item} />
  ));

  return (
    <div>
      <div>{productComponents}</div>
      <hr />
      <hr />

      <div>{jokeComponents}</div>

      <Header />
      <h1>Hello {firstName + " " + lastName}!</h1>
      <h5>It is currently about {date.getHours() % 12} o'clock!</h5>
      <p style={styles}>Good {timeOfDay}!</p>

      <div className="todo-list">
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
      </div>
      <MyInfo />
      <div className="contacts">
        <ContactCard
          contact={{
            name: "Mr. Whiskerson",
            imgUrl: "http://placekitten.com/300/200",
            phone: "(212) 555-1234",
            email: "mr.whiskaz@catnap.meow"
          }}
        />
        <ContactCard
          contact={{
            name: "Mr. Hon",
            imgUrl:
              "https://images.unsplash.com/photo-1594569567351-ad9e90210643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=200",
            phone: "(212) 615-1234",
            email: "mr.hon@lam.hulk"
          }}
        />
        <ContactCard
          contact={{
            name: "Mr. Cooper",
            imgUrl:
              "https://images.unsplash.com/photo-1594077716451-4767eca06006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=200",
            phone: "(212) 515-1234",
            email: "mr.cooper@lamda.high"
          }}
        />
        <ContactCard
          contact={{
            name: "Mr. Narnia",
            imgUrl:
              "https://images.unsplash.com/photo-1593507105697-ec89b79ca16e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=200",
            phone: "(212) 565-1234",
            email: "mr.narnia@narnian.roar"
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
