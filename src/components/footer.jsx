import React, { useState } from "react";
import '../css/footer.css';
import { Link } from "react-router-dom";
import { app } from '../firebase';
import { getFirestore, addDoc, updateDoc,doc, collection, getDocs } from 'firebase/firestore';

const Footer = () => {
    const [subscribe, setSubscribe] = useState('');
    const initialAlert ={
        class: 'd-none',
        status: 'success',
        message: 'Email subscribed.',
        iconClass: "fa-solid fa-circle-check",
    }
    const [alert, setAlert] = useState(() => initialAlert);
    const db = getFirestore(app);

    const handleChange = (e) => {
        setSubscribe(e.target.value);
        setAlert({...initialAlert})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const docs = await getDocs(collection(db, 'subscribe'));
        let data = []
        docs.forEach(doc => {
            if(doc.data().email === subscribe){
                data.push(doc.data());
            }
        })
        if(data.length === 0){
            try{
                const docRef = await addDoc(collection(db, 'subscribe'), {email: subscribe});
                const subsRef = doc(db, 'subscribe', docRef.id);
                await updateDoc(subsRef,{id: docRef.id})
                setAlert(a => ({...a, class:'d-block'}));
            }catch(err){
                console.log(err)
            }
        }else{
            setAlert({
                class: 'd-block',
                status: 'warning',
                message: 'This email is already subscribed.',
                iconClass: "fa-solid fa-circle-exclamation",
            });
        }
        setSubscribe('');
    }

    return (
        <div className="py-5 shadow-lg">
            <div className="container">
                <div className="navbar row align-items-start">
                    <div className="col-md-4 py-3">
                        <div className="h4">Ezweb Solutions</div>
                        <p>
                            <Link to="#" className="react-links">aneildhakal21@gmail.com</Link>
                        </p>
                        <div className="d-flex">
                            <div className="ps-2 h3">
                                <a href="https://facebook.com" className="react-links" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </div>
                            <div className="ps-2 h3">
                                <a href="https://twitter.com" className="react-links" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </div>
                            <div className="ps-2 h3">
                                <a href="https://instagram.com" className="react-links" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 py-3">
                        <div className="h4">Menus</div>
                        <ul className="ul">
                            <li className="footer-menu">
                                <Link className="react-links" to="/#about"><i className="fa-solid fa-chevron-right"></i> About</Link>
                            </li>
                            <li className="footer-menu">
                                <Link className="react-links" to="/services"><i className="fa-solid fa-chevron-right"></i> Services</Link>
                            </li>
                            <li className="footer-menu">
                                <Link className="react-links" to="/industries"><i className="fa-solid fa-chevron-right"></i> Industries</Link>
                            </li>
                            <li className="footer-menu">
                                <Link className="react-links" to="/portfolio"><i className="fa-solid fa-chevron-right"></i> Portfolio</Link>
                            </li>
                            <li className="footer-menu">
                                <Link className="react-links" to="/blog"><i className="fa-solid fa-chevron-right"></i> Blog</Link>
                            </li>
                            <li className="footer-menu">
                                <Link className="react-links" to="/#contact"><i className="fa-solid fa-chevron-right"></i> Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 py-3">
                        <div className="h4">Subscribe Newsletters</div> 
                        <p>Subscribe to our newsletters to get the recent updates.</p>
                        <div className={alert.class}>
                            <div className={"alert alert-" + alert.status + " alert-dismissible fade show"} role="alert">
                                <i className={alert.iconClass}></i>
                                <strong className="text-capitalize">
                                    {" "+ alert.status}! 
                                </strong> 
                                {" "+ alert.message}
                            </div>
                        </div>
                        <form className="d-flex" onSubmit={handleSubmit}>
                            <input type="email" className="form-control" placeholder="Email address"
                                value={subscribe} onChange={handleChange} required />
                        </form>
                    </div>
                </div>
            </div>
            <hr className="text-warning" />
            <div className="text-center">
                ©2021, Ezweb Solutions. All Rights Reserved.
                <br /> Developed by Ezweb Solutions
            </div>
        </div>
    );
}
 
export default Footer;