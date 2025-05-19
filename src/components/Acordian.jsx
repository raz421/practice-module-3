import { useState } from "react";
import Panel from "./Panel";

export default function Accordian() {
  const [isvalue, setIsValue] = useState(0);

  return (
    <div>
      <Panel
        title={"About"}
        isvalue={isvalue == 0}
        onSend={() => setIsValue(0)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
        dolores!
      </Panel>
      <Panel
        title={"Programe"}
        isactive={isvalue == 1}
        onSend={() => setIsValue(1)}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad tempore sed
        esse ratione cupiditate facere aut vitae voluptates dolor, voluptate
        commodi officia harum ea officiis modi impedit iste rem suscipit.
      </Panel>
    </div>
  );
}
