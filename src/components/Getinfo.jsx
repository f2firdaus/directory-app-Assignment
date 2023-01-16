import { useState } from "react";

const Getinfo = () => {
  const [input, setInput] = useState();
  const [result, setResult] = useState("");
  let str = localStorage.getItem("data");
  let data = JSON.parse(str);

    const check = () => {
        data.forEach((e) => {
            if (e.AadharNumber === input) {
                setResult(e);
            }
        })
    }
  return (
    <>
      <div className="getinfo">
        <div className="retrive-details">
          <div className="rettrv">
            <h4>Retrieve Information</h4>
          </div>
          <div className="search-find">
            <input
              type="number"
              onChange={(e) => setInput(e.target.value)}
              className="search"
            />
            <button onClick={()=>check()} className="find">Find</button>
          </div>
          <div className="result">
            {result === "" ? (
              <h1 className="nodata">No DATA</h1>
            ) : (
              <div className="details-find">
                <h4 className="h4">
                  Name: <span>{result.Name} </span>{" "}
                </h4>
                <h4 className="h4">
                  DOB: <span>{result.BirthDate} </span>{" "}
                </h4>
                <h4 className="h4">
                  Aadhar: <span>{result.AadharNumber} </span>{" "}
                </h4>
                <h4 className="h4">
                  Mobile No: <span>{result.MobileNumber} </span>{" "}
                </h4>
                <h4 className="h4">
                  Age: <span>{result.Age} </span>{" "}
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Getinfo;
