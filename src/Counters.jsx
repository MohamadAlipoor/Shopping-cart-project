import React from "react";
import Counter from "./Counter";

class Counters extends React.Component {
  render() {
    const { counter, handleDelete, handleIncrement } = this.props;
    return (
      <div>
        {counter.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={handleIncrement}
            onDelete={handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
