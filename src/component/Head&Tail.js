import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { navBar } from "./navbar";

function HeadTail() {
  const [data, setData] = useState({ value: "Select Value" });

  const [uiData, setUiData] = useState({});

  const validation = () => {
    if (data.value !== "Select Value") {
      const obj = {};
      let keyOfObject =
        data.preValue && data.value === data.preValue
          ? Object.keys(uiData).length - 1
          : Object.keys(uiData).length;

      obj[keyOfObject] = [];
      obj[keyOfObject].push(data.value);

      setUiData((pre) => ({
        ...pre,
        [keyOfObject]: pre[keyOfObject]
          ? [...pre[keyOfObject], data.value]
          : [data.value],
      }));
    }

    data.value === "Select Value"
      ? setData((pre) => ({
          ...pre,
          error: "Please select value from dropdown",
        }))
      : setData((pre) => ({
          ...pre,
          error: "",
          preValue: pre.value,
          value: "Select Value",
        }));
  };

  const getValue = (e) => {
    setData((pre) => ({ ...pre, value: e.target.value }));
  };

  return (
    <>
      {navBar?.map((item) => (
        <>
          <Link style={item.decoration} to={item.path}>
            {item.title}
          </Link>
        </>
      ))}
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <select value={data?.value} onChange={getValue}>
          <option value="Select Value">Select Value</option>
          <option value="Head">Head</option>
          <option value="Tail">Tail</option>
        </select>
        <br />
        <br />
        <button onClick={validation}>Submit</button>
        <br />
        <br />
        <span style={{ color: "red" }}>{data?.error}</span>

        <table>
          <tbody>
            {Object.keys(uiData)?.map((item) => (
              <tr key={item}>
                {uiData[item]?.map((val, index) => (
                  <td key={index}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HeadTail;
