import React, { useRef, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
export default function Main() {
  const field = useRef();
  const [data, setData] = useState();

  const [item, setItem] = useState([]);

  function add() {
    setItem((datas) => [...datas, data]);
    setData("");
    field.current.focus();
  }
  
  const deletes=(id)=>{
        setItem((i) => {
          return i.filter((arr, index) => {
            return index !== id;
          });
        });
  }
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="card px-3">
              <div className="card-body">
                <h2 className="card-title text-center mt-2 mb-4">Todo List</h2>
                <div className="row">
                  <div className="col-sm-10">
                    <input
                      type="text"
                      onChange={(e) => setData(e.target.value)}
                      value={data}
                      ref={field}
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-2">
                    <button onClick={add} className="btn btn-primary">
                      +
                    </button>
                  </div>
                </div>

                <ul className="list-group list-group-numbered">
                  {item.map((task,index) => (
                    <div className="row">
                      <div className="col-sm-10">
                        <li className="my-4 fs-3 ">{task} </li>
                      </div>
                      <div className="col-sm-2">
                        <button className="btn btn-danger my-4" onClick={()=>deletes(index)}><FaTrashCan /></button>
                        </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>
  );
}
