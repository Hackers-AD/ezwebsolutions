import React, { useState, useEffect, useContext } from "react";
import { app } from '../firebase';
import { getFirestore, collection, addDoc, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { themeContext } from './context/themeContext';

const ProjectTalk = () => {
    const db = getFirestore(app);
    const { theme } = useContext(themeContext);

    const initialData = {
        email: '',
        phone: '',
        company_name: '',
        message: ''
    }
    const [data, setData] = useState(initialData);
    const initialMesasge = {
        class: "d-none",
        status: "success",
        message: "Your message is sent, we will contact you soon.",
    }
    const [message, setMessage] = useState(initialMesasge);

    const handleChange = (e, label) => {
        setData(d => {
            return {...d, [label]: e.target.value}
        })
        setMessage(msg => {
            return {...msg, class: "d-none"}
        });
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "projectTalk"), data);
            const newData = {...data, id: docRef.id}
            await setDoc(doc(db, 'projectTalk', docRef.id), newData);
            setMessage(msg => {
                return {...msg, class: "d-block"}
            });
            setData(initialData);
        } catch (err) {
            console.error("Error adding document: ", err);
            setMessage({
                class: "d-block",
                status: "warning",
                message: "Something went wrong. We'll fix it soon.",
            });
        }
    }

    const [contacts, setContacts] = useState([]);

    const allDocs = async() => {
        const docs = await getDocs(collection(db,'projectTalk'));
        setContacts([]);
        docs.forEach((doc) => {
            setContacts(c => [...c, doc.data()]);
        })
    }
    useEffect(() => {
        allDocs();      
    }, []);

    const deleteContact = async(id) => {
        await deleteDoc(doc(db, 'projectTalk', id));
        allDocs();
    }

    return (
        <div className="container my-5" id="contact" data-aos="fade-up">
            <div className="">
                <div className="h1">Execute Your Business with Data Science and Artificial Intelligence</div>
                <p className="py-1">Let's discuss your company goals</p>
            </div>
            {/* {contacts.length !==0 ?
            <div className="table-responsive">
                <table className={"table table-"+theme}>
                    <thead>
                        <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Message</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((c, idx) => {
                            return(
                                <tr key={idx}>
                                    <th scope="row">{idx+1}</th>
                                    <td>{c.email}</td>
                                    <td>{c.phone}</td>
                                    <td>{c.company_name}</td>
                                    <td>{c.message}</td>
                                    <td><button className="btn btn-danger" onClick={() => deleteContact(c.id)}>Delete</button></td>
                                </tr>   
                            )
                        })}
                    </tbody>
                </table>
            </div>: null } */}
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="row">
                    <div className={"col-md-6 " + message.class}>
                        <div className={"alert alert-" + message.status + " alert-dismissible fade show"} role="alert">
                            <strong className="text-capitalize">{message.status}!</strong> {message.message}
                            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {/* <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                            <input type="text" name="username" className="form-control py-3" placeholder="Username" 
                                value={data.username} onChange={(e) => handleChange(e, 'username')} />
                        </div> */}
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                            <input type="email" name="email" className="form-control py-3" placeholder="Email address" 
                                value={data.email}  onChange={(e) => handleChange(e, 'email')} required />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa-solid fa-phone"></i></span>
                            <input type="text" name="phone" className="form-control py-3" placeholder="Phone" 
                                value={data.phone}  onChange={(e) => handleChange(e, 'phone')} required />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa-solid fa-building"></i></span>
                            <input type="text" name="company_name" className="form-control py-3" placeholder="Company name" 
                                value={data.company_name}  onChange={(e) => handleChange(e, 'company_name')} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa-solid fa-message"></i></span>
                            <textarea name="message" className="form-control" rows={8} style={{resize: 'none'}} placeholder="Type your message" 
                                value={data.message}  onChange={(e) => handleChange(e, 'message')}></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-grid">
                        <button className="btn btn-lg btn-outline-warning btn-rounded-lg">Submit Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default ProjectTalk;