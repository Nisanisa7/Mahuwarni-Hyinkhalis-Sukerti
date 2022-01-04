import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [repo, setRepo] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Nisanisa7/repos`)
      .then((res) => {
        const result = res.data;
        setRepo(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [repo]);
//   const handleSearch = async(e) =>{
//     e.preventDefault()
//     const {data} = await axios.get(`https://api.github.com/users/${search}/repos`)
//     console.log(data,'ini hasil search');
//     setRepo(data.data)
//   }
  return (
    <Styles>
      <CardTitle>
        <h1>Github Repository</h1>
        <h3>This is my github repository</h3>
        {/* <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button onClick={(e) => handleSearch(e)}>Search</button> */}
      </CardTitle>
      <Card>
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Project Name</th>
              <th>URL</th>
              <th>Language</th>
            </tr>
           
            <>
                {repo.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.clone_url}</td>
                <td>
                  {item.language !== null ? (
                    <button>{item.language}</button>
                  ) : (
                    <div className="text">-</div>
                  )}
                </td>
              </tr>
            ))}</>
          </tbody>
         
        </table>
      </Card>
    </Styles>
  );
};

export default Home;
const Styles = styled.div`
  margin-top: 50px;
`;
const CardTitle = styled.div`
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  height: 100%;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  margin-bottom: 25px;
`;
const Card = styled.div`
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  height: 100%;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  table {
    width: 100%;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #cccc;
    th {
      width: 20%;
      background: #e8e9eb;
      padding: 8px 8px;
      display: table-cell;
      vertical-align: top;
    }
    td {
      border: 1px solid #cccc;
      display: table-cell;
      padding: 8px 8px;
      button {
        text-align: center;
        outline: none;
        border: none;
        height: 40px;
        width: 80px;
        background: rgb(255, 205, 97);
        border-radius: 8px;
        color: white;
        font-size: 14px;
      }
      .text {
        text-align: center;
      }
    }
  }
`;
