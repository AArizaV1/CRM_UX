import { useRef } from 'react'

import styles from './NewDeal.module.css'

function NewDeal() {
    const formRef = useRef()

    // TIP: use this console log to see the content of the ref
    // console.log(formRef)

    const sendFormData = (event) => {
        event.preventDefault()
        console.log(event)

        fetch('URL...', {
            method: 'POST',
            body: JSON.stringify({
                name: formRef.current.name.value
            })
        })
    }

    return (
        <div className={styles.background}>
            <div className={styles.form}>
                <h4>Create New Deal</h4>
                <form ref={formRef} onSubmit={sendFormData}>
                    <div className={styles.formWrapper}>
                        <input type="text" placeholder='Name...' name='name'></input>
                        <input type="text" placeholder='Last Name...' name='lastName'></input>
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default NewDeal