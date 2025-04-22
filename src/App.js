import { dataArray } from "./data";
import { useState } from "react";
import "./styles.css";
const Checkbox = ({ data, checkedState, setCheckedState }) => {
  const handleChange = (e, item) => {
    setCheckedState((prev) => {
      const newState = { ...prev, [item.id]: e.target.checked };
      const updateChildren = (item) => {
        item?.children?.forEach((children) => {
          newState[children.id] = e.target.checked;
          console.log(newState);
          children?.children && updateChildren(children);
        });
      };
      updateChildren(item);

      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;
        const allChecked = node.children.every((child) => verifyChecked(child));
        newState[node.id] = allChecked;
        return allChecked;
      };
      dataArray.forEach((node) => verifyChecked(node));
      return newState;
    });
  };

  return (
    <div style={{}}>
      {data.map((item) => {
        return (
          <div style={{ paddingLeft: "20px", paddingBottom: "2px" }}>
            <div className="container">
              <input
                id={item.id}
                type="checkbox"
                checked={checkedState[item.id] || false}
                onChange={(e) => handleChange(e, item)}
              />
              <span className="title">{item.title}</span>
            </div>
            {item.children && (
              <Checkbox
                data={item.children}
                checkedState={checkedState}
                setCheckedState={setCheckedState}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default function App() {
  const [checkedState, setCheckedState] = useState({});

  return (
    <div>
      <Checkbox
        data={dataArray}
        checkedState={checkedState}
        setCheckedState={setCheckedState}
      />
    </div>
  );
}
