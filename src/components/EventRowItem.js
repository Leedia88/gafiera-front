import Button from 'react-bootstrap/Button';


export default function EventRowItem(props){

    const registerUser = () => {
        console.log("registered!!");
    }

    return (
        <>
            <tr onClick={() => props.deleteEvent(props.rowNumber)}>
                <th scope="row">{props.rowNumber}</th>
                <td scope="row">{props.rowDate}</td>
                <td scope="row">{props.rowDescription}</td>
                <td scope="row">{props.rowOrganizer}</td>
                <td scope="row">
                    <Button variant='link' onClick={registerUser}>Register</Button>
                </td>
            </tr>
            
        </>
    )
}

