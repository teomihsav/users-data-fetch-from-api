






import React, { Fragment, useState, useEffect } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom';

import styles from './Home.module.css'


const DisplayData = () => {

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setAllUsers(res.data)
            })
            .catch(err => {
                console.log('Error form fetchAllUsers:', err)
                return err
            })
    }, [])


    return (
        <div>
            {
                allUsers.map(item =>
                    <div>
                        <Link to={`/UserDetails/${item.id}`}
                            style={{ textDecoration: 'none', color: 'black' }} >
                            <div key={'item.id'} className={`${styles.pageWrapOut}`}>
                                <div className={styles.row}>
                                    <span> Username: </span>   {item.username}
                                </div>
                                <div className={styles.row}>
                                    <span> E-mail: </span>  {item.email}
                                </div>
                                <div className={styles.row}>
                                    <span> Name: </span>  {item.name}
                                </div>
                                <div className={styles.row}>
                                    <span> Web site: </span>  {item.website}
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div >
    )
}

export default DisplayData