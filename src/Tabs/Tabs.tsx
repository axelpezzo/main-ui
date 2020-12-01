import classNames from "classnames";
import React, { Fragment, useState } from "react";
import { IProps } from "./types";
import "./styles.scss";

const Tabs: React.FC<IProps> = ({ config }) => {
  const [currentIndex, updateCurrentIndex] = useState(0);

  const renderHeader = (): JSX.Element[] => {
    return config.map((item, index) => {
      return (
        <div
          id={index.toString()}
          className={classNames("tab", { active: currentIndex === index })}
          key={index}
          onClick={() => updateCurrentIndex(index)}
        >
          <span>{item.label}</span>
        </div>
      );
    });
  };

  const renderContent = (): JSX.Element | null => {
    const content = config[currentIndex]?.content;
    if (content) {
      return <div className="panel grid">{content}</div>;
    }
    return null;
  };

  return (
    <Fragment>
      <div className="tabs_header">
        <div className="tabs grid">{renderHeader()}</div>
      </div>
      <div className="tabs_content">{renderContent()}</div>
    </Fragment>
  );
};

export default Tabs;
