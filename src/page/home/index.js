import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Home = () => {
    const [repo, setRepo] = useState([])
    useEffect(() => {
      
    }, [])
    return (
        <Styles>
          <CardTitle>
             My Github Project
          </CardTitle>
          <Card>
              <table>
                  <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Commit</th>
                      <th>URL</th>
                      <th>Language</th>
                  </tr>
                  <tr>
                   
                  </tr>
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
