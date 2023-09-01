import React from "react";
import CodeStackCard from "../Features/CodeStackCard";

import { codingLanguages } from "../../Context/dataSets/codeStackDataset";

function CodeStackSection() {
  return (
    <div id="codeStackSection" className="codeStackSection">
      <div className="codeStackBox">
        {codingLanguages.map((item, indx) => {
          return (
           <CodeStackCard key={indx} item={item} indx={indx}/>
          );
        })}

      </div>
      <div className="textbox">
        <div className="innerTextBox">
          <h4>My Stack</h4>
          <p>
            Interested in knowing more about my code stack? hover over the shield of interest and access the documentation. 
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default CodeStackSection;
