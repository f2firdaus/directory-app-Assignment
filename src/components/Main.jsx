import { useEffect } from "react";
import { useState } from "react";
// import { useFetcher } from "react-router-dom";

const Main = () => {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [mobNo, setMobno] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [age, setAge] = useState("");
  const [storageData, setStoregedata] = useState({});
  const [details, setDetails] = useState([]);
  const [hide, setHide] = useState("");
  
useEffect(() => {
    setStoregedata({
      Name: `${name}`,
      BirthDate: `${birthdate}`,
      AadharNumber: `${aadhar}`,
      MobileNumber: `${mobNo}`,
      Age: `${age}`,
    });
  }, [name, birthdate, aadhar, mobNo, age]);

    useEffect(() => {
        if (birthdate === "") {  
        } else {
            let date = new Date(birthdate);
            let diff = Date.now() - date.getTime();
            let agedate = new Date(diff);
            let years = agedate.getUTCFullYear();
            let finaleAge = Math.abs(years - 1970);
            // console.log(object);
            setAge(finaleAge)
            // console.log(age)
      }
  },[birthdate]);

    const saveData = (e) => {
     
    let arr = [];
    details.forEach((item) => {
      if (item.AadharNumber !== e.AadharNumber) {
        arr.push(item);
      }
    });
    setDetails(arr);
  };
  const addData = () => {
    if (name === "" || birthdate === "" || aadhar === "" || mobNo === "") {
      alert(" Fill all the details");
    } else if (aadhar.length !== 12) {
      alert("Aadhar should be 12 digits");
    } else if (mobNo.length !== 10) {
      alert("mobile no. should be 10 digits");
    } else {
      setDetails([...details, storageData]);
      setHide("none");
    }
  };
  useEffect(() => {
    if (details.length === 0) {
      return;
    } else {
      localStorage.setItem("data", JSON.stringify(details));
    }
  }, [details]);
  const deleteAll = () => {
    setName("");
    setBirthdate("");
    setAadhar("");
    setMobno("");
    setAge("");
  };
  const displayData = () => {
    setHide("");
    setName("");
    setBirthdate("");
    setAadhar("");
    setMobno("");
    setAge("");
  };

  return (
    <>
      <div className="main">
        <div className="add-details">
          <div className="add">Add New Person</div>
          <div className="table-details">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of birth</th>
                  <th>Aadhar Number</th>
                  <th>Mobile Number</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {details.map((e, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td className="td">
                          <input type={"text"} defaultValue={e.Name} />
                        </td>
                        <td>
                                  <input type={"date"} defaultValue={e.Birthdate} />
                        </td>
                        <td>
                          
                          <input
                            type="text"
                            defaultValue={e.AadharNumber}
                                  />
                                  
                        </td>
                        <td>
                          <input type="number" defaultValue={e.MobileNumber} />
                        </td>
                        <td>
                          <input type="number" defaultValue={e.Age} />
                        </td>
                        <td>
                          <button className="save btn" onClick={() => saveData(e)}>Save</button>
                          <button
                            className="btn delete"
                            
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <tr style={{ display: hide }}>
                  <td>
                    <input
                      type="text" value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                  <td className="td">
                   
                    <input
                      type={"date"} value={birthdate}
                      onChange={(e) => setBirthdate(e.target.value)}
                    />
                  </td>
                  <td>
                   
                    <input
                      type={"number"} value={aadhar}
                      onChange={(e) => setAadhar(e.target.value)}
                    />{" "}
                  </td>
                  <td>
                 
                    <input
                      type="number" value={mobNo}
                      onChange={(e) => setMobno(e.target.value)}/>
                                     
                  </td>
                  <td>{age}</td>
                  <td className="td-1">
                    <button
                      className=" btn2 save-hide"
                      onClick={() => addData()}>
                      Save
                    </button>
                    <button className="btn2" onClick={()=>deleteAll()}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
        <button className="add1" onClick={() => displayData()}> Add</button>           
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
