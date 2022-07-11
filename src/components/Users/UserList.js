import Card from "../UI/Card";
import styles from "./UserList.module.css"

function UserList (props) {

    return (
        <Card className={styles.users}>
        <ul>
            {props.users.map(user => 
            <li key={user.id}>
                {user.name} - {user.age} років
            </li>
            )}
        </ul>
        </Card>
    );
}

export default UserList;