import React from "react";
import moment from "moment";

const FinalOutput = ({ data }) => {
  if (!data) return null;

  return (
    <div>
      <h3>Your journey:</h3>
      {data.map(object =>
        object.legs.map(nestedObject => {
          let d = nestedObject;
          let date = moment(d.startTime);
          let time = date.format("HH:mm");
          let endTime = moment(d.endTime);
          let difference = endTime.diff(date, "minutes");

          return (
            <div key={d.startTime}>
              {d.mode === "WALK"
                ? `Start walking at`
                : `Take ${d.mode} ${d.route.shortName} at`}{" "}
              {time}, from{" "}
              {d.from.stop
                ? d.from.stop.name + " (" + d.from.stop.code + ")"
                : d.from.name}{" "}
              to {d.to.name} ({difference} minutes journey approx)
            </div>
          );
        })
      )}
    </div>
  );
};

export default FinalOutput;
