import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Home = () => {
    const [repo, setRepo] = useState([])
    useEffect(() => {
      axios.get("https://api.github.com/users/Nisanisa7/repos")
      .then((res)=>{
          const result = res.data
          setRepo(result)
        })
      .catch((err)=>{
          console.log(err);
      })
    }, [])
    console.log(repo, 'ini result');
    return (
        <Styles>
          <CardTitle>
             My Github Project
          </CardTitle>
          <Card>
              <table>
                  <tr>
                      <th>Id</th>
                      <th>Project Name</th>
                      <th>URL</th>
                      <th>Language</th>
                  </tr>
                   {repo.map((item)=> (
                  <tr>
                       <td>{item.id}</td>
                       <td>{item.name}</td>
                       <td>{item.url}</td>
                       <td>{item.language}</td>
                  </tr>
                   ))}
              </table>
          </Card>
        </Styles>
    )
}

export default Home
const Styles = styled.div`
margin-top: 50px;
`
const CardTitle = styled.div`
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    height: 100%;
    background: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    margin-bottom: 25px;
`
const Card = styled.div`
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    height: 100%;
    background: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;

    table{
        width: 100%;
        th{
            background: white;
            height: 30px;
            border-bottom: 5px solid #DCDCDC;
        }
    }
`
