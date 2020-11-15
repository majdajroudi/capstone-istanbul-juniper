import React from "react";
import "./index.css";
import { List, Card } from "antd";
import { useTranslation } from "react-i18next";

/**
 * Upon matching cards, a fact related to matched cards appear on screen
 * This component creates the list that will hold all facts
 * "facts" is an array of objects
 * If the language is English "title" will be "Facts"
 * "emptyFactListMessage" is a string that is translated by i18n.
 * It is displayed when fact list is empty
 * If the language is English "emptyFactListMessage" will be ""Match cards to reveal facts!"
 */
const MemoryGameFactList = ({ facts }) => {
  // facts example:
  // {
  //   cardKey: "alternateEnergy0",
  //   description: "Alternatif Enerji",
  //   img: {src: "/static/media/alternateEnergy.88cef00e.svg", imgKey: "alternateEnergy"},
  //   isFlipped: false,
  //   isMatched: false,
  //   link: "https://loremIpsum.com",
  //   phrase: "Lorem ipsum",
  // }
  const [t] = useTranslation();
  const factsTitle = t("memoryGame.facts");
  const emptyFactListMessage = t("memoryGame.emptyFactListMessage");
  const factListTitle = (
    <h1 className="memoryGameFactListContainer__title">{factsTitle}</h1>
  );
  let factListContent;
  // facts is an empty array by default, it gets filled when user makes successful match
  if (facts.length) {
    factListContent = (
      <List
        className="memoryGameFactListContainer__list"
        dataSource={facts}
        renderItem={(fact) => (
          <List.Item className="memoryGameFactListContainer__list__item">
            <a target="__blank" href={fact.link}>
              <Card className="memoryGameFactListContainer__list__item__card">
                {fact.phrase}
              </Card>
            </a>
          </List.Item>
        )}
      />
    );
  } else {
    factListContent = (
      <h5 className="memoryGameFactListContainer__noFacts">
        {emptyFactListMessage}
      </h5>
    );
  }

  return (
    <div className="memoryGameFactListContainer" id="memoryGameFactList">
      {factListTitle}
      {factListContent}
    </div>
  );
};

export default MemoryGameFactList;
