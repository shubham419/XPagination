import React from 'react'

const CustomTable = ({data}) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => {
                    return(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default CustomTable