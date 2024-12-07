import Certifications from '@/app/compoents/Certifications'
import React from 'react'
import { Container, Table } from 'react-bootstrap'
 
const page = () => {
  return (
    <div>
       <Container>
        
        <Table className="custom-table" hover responsive>
            <tbody>
              {specifications.map((item, idx) => (
                <tr key={idx}>
                  <td
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#008AC7",
                      textAlign: "left",
                      padding: "10px",
                    }}
                  >
                    {item.label}
                  </td>
                  <td
                    style={{
                      fontSize: "16px",
                      color: "#333",
                      textAlign: "left",
                      padding: "10px",
                    }}
                  >
                    : {item.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
  
          <Certifications />
        </Container>
    </div>
  )
}

export default page 