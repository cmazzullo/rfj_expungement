import React from "react";

function OutcomeIndicator(props) {
  let indicatorColor, indicatorText;
  switch (props.outcome) {
    case "eligible":
      indicatorColor = "green";
      indicatorText = "Eligible";
      break;
    case "ineligible":
      indicatorColor = "red";
      indicatorText = "Not Eligible";
      break;
    default:
      indicatorColor = "red";
      indicatorText = "Not enough information...";
  }

  return (
    <div
      title={props.outcome}
      style={{
        padding: "1rem",
        backgroundColor: indicatorColor
      }}
    >
      Outcome: {indicatorText}
    </div>
  );
}

export default OutcomeIndicator;
