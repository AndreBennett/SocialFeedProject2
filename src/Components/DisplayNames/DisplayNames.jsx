
const DisplayNames = (props) => {
    return ( 
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
            <tbody>
              {props.parentName.map((entry, index) => {
                return (
                  <tr key={index}>
                    <td>{entry.name}</td>
                  </tr>
                );
              })}
            </tbody>
        </thead>
      </table>
    );
}
export default DisplayNames;