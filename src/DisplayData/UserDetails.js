



import React, { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

import axios from 'axios'

import styles from './Home.module.css'


const UserDetails = () => {

    let { slug } = useParams()
    const [userDetail, setuserDetail] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/users/${slug}`)
            .then(res => {
                // console.log('Response: ', res.data);
                setuserDetail(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log('Error form fetchAllUsers:', err)
                return err
            })
    }, [])

    return ( // It's prеttier without Loading... div
        // loading ? <div>Loading...</div> : 
        <div>
            <div key={userDetail.id} className={`${styles.pageWrapOut}`}>
                <div className={styles.row}>
                    <span> Name: </span>   {userDetail.name}
                </div>
                <div className={styles.row}>
                    <span> Username: </span>  {userDetail.username}
                </div>
                <div className={styles.row}>
                    <span> E-mail: </span>  {userDetail.email}
                </div>
                <div className={styles.row}>
                    <span> Address: </span>  {userDetail.address && userDetail.address.city}
                </div>
                <div className={styles.row}>
                    <span> Phone number: </span>  {userDetail.phone}
                </div>
                <div className={styles.row}>
                    <span> Web site: </span>  {userDetail.website}
                </div>
                <div className={styles.row}>
                    <span> Company: </span>  {userDetail.company && userDetail.company.name}
                </div>
                <p></p>
                <Link to='/'>
                    <button style={{backgroundColor: '#76b0fc'}}>Back</button>
                </Link>
            </div>
        </div >
    )
}

export default UserDetails
