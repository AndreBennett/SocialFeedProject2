
const DisplayPosts = (props) => {
    return (
          <table>
            <thead>
              <tr>
                <th>Post</th>
              </tr>
                <tbody>
                  {props.parentPost.map((entry, index) => {
                    return (
                      <tr key={index}>
                        <td>{entry.post}</td>
                      </tr>
                    );
                  })}
                </tbody>
            </thead>
          </table>
       );
  }
   
  export default DisplayPosts;