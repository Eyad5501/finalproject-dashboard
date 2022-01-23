



function EmployeeCompanyRow(props) {
  const { employee } = props
 
 
  return (
  <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{employee._id}</td>
      <td>
        {employee.firstName} {employee.lastName}
      </td>
      <td>{employee.email}</td>
      <td>
        <img src={employee.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{employee.phone}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
          {employee.fields?.map(field=>
        <p>{field.typeField}</p>
        )}
</td>
    </tr>
  )
}

export default EmployeeCompanyRow