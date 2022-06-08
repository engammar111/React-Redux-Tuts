import React from "react";
import ReactDOM from "react-dom";
import { CommentDetail } from "./CommentDetail";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCrad";

const App = () => {
  return (
    <div div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="ammar"
          time="Today at 6:00PM"
          comment="very good Man!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="ahmed"
          time="Today at 6:00PM"
          comment="very good Man!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="mohamed"
          time="Today at 6:00PM"
          comment="very good Man!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
