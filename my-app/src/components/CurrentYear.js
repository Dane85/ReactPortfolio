import React from "react";

class YearDisplay extends React.Component {
  render() {
    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
      <div>
        <p className="year">Year: {currentYear}</p>
      </div>
    );
  }
}

export default YearDisplay;
