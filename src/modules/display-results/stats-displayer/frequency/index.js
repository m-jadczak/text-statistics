import React from "react";
import PropTypes from "prop-types";

const Frequency = (statistics) => {

const {charsFrequency,wordsFrequency,allCharsCount,wordsCount} = statistics;

return (
  <div className="grid">
    {charsFrequency.length>0 ? <h3>Najczęściej występujące znaki</h3> : ""}
    {charsFrequency.length>0 ? generateFreq(charsFrequency,allCharsCount,"char"): ""}

    {wordsFrequency.length>0 ? <h3>Najczęściej występujące słowa</h3> : ""}
    {wordsFrequency.length>0 ? generateFreq(wordsFrequency,wordsCount,"word"):""}
  </div>
);
};

const generateFreq = (frequencyArray, allItems, propName)=>{
  let result = [];
  for (let i = frequencyArray.length; i > -1; i--) {
    if(frequencyArray[i]!==undefined){
    result.push(<span className="stat-label freq-char" key={`label-item_${frequencyArray[i][propName]}`}>
      {`#${frequencyArray.length-i} miejsce`}
    </span>);
    result.push(<span key={`item_${frequencyArray[i][propName]}`} className="stat-result freq-item">{frequencyArray[i][propName]}</span>);
    result.push(<span className="stat-label font-small right-result freq-count" key={`label-count_${frequencyArray[i][propName]}`}>
      {"Liczba wystąpień"}
    </span>);
    result.push(<span key={`count_${frequencyArray[i][propName]}`} className="stat-result font-small freq-count">{frequencyArray[i].count}</span>);
    result.push(<span className="stat-label font-small freq-percent right-result" key={`label-percent_${frequencyArray[i][propName]}`}>
      {"Procentowy udział"}
    </span>);
    result.push(<span key={`percent_${frequencyArray[i][propName]}`} className="stat-result font-small freq-percent">{(100*frequencyArray[i].count/allItems).toFixed(2)+"%"}</span>);
    }
  }

  return result;
};

Frequency.propTypes = { statistics: PropTypes.object };

export default Frequency;
