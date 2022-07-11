import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./CreateUser.module.css"

function CreateUser (props) {

    const [inputName, setInputName] = useState('')
    const [inputAge, setInputAge] = useState('')
    const [error, setError] = useState()

    const createUserHandler = (event) => {
        event.preventDefault();
        if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
            setError({
                title: 'Некоректний ввід',
                message: 'Поля не можуть бути пустими'
            })
            return;
        }

        if (+inputAge < 1) {
            setError({
                title: 'Некоректний вік',
                message: 'Вік має бути більше 0'
            })
            return;
        }
        
        props.onCreateUser(inputName, inputAge)

        setInputName('');
        setInputAge('');
    }

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setInputAge(event.target.value);
    }

    const errorHandler = () => {
        setError(false);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onCloseModal={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor="name">Ім'я</label>
                    <input id="name" type='text' onChange={nameChangeHandler} value={inputName}/>
                    <label htmlFor="age">Вік</label>
                    <input id="age" type='number' onChange={ageChangeHandler} value={inputAge}/>
                    <Button type='submit'>Додати Користувача</Button>
                </form>
            </Card>
        </div>
    );

}

export default CreateUser;