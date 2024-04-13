import { useState, useEffect } from 'react';
import './SignUp.css';
import Header from '../Common/Header';
import {Link} from 'react-router-dom';
import {storage} from '../../firebase';
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid';


function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [imageUpload, setImageUpload] = useState(null); 
    const [imageUrl, setImageUrl] = useState('')


    const imageListRef = ref(storage, `images/`)

    const uploadFile = (e) => {
        document.getElementById('fileInput').click();
        if(imageUpload == null) return;

        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload)
        .then(() => {
          uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
            })
          })
        })
    };

    useEffect(() => {
        listAll(imageListRef).then((response) => {
           response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrl(url);
                })
           })
        })
    },[imageListRef]);

    return (
        <>
        {
            (firstName === "" || lastName === "") ? 
            (<Header/>) :
            (
                <div className="flex-container-21">
                    <div><p className="prev btn btn-primary ms-2"><i className="fa-solid fa-chevron-left"></i></p></div>
                    <div><Link to="/phone" className="next btn btn-primary me-2">NEXT</Link></div>
                </div>
            )
        }



            <div className="flex-container-42">
                <div className="flex-container-43">
                    {
                        (imageUrl === "") ? 
                        (   
                            <div className="icon">
                                <img src="https://i.ibb.co/3YnGGYM/phone-In-Hand.pnghttps://i.ibb.co/3YnGGYM/phone-In-Hand.png" width="100%" height="100%" alt="icon" />
                            </div>) : 
                        ( 
                            <div className="icon">
                                <img src={imageUrl} width="100%" height="100%" alt="icon" />
                            </div>
                        )
                    }
                   

                    <div className="profile-text">
                        <p className="label-text-1" onClick={uploadFile}>Add Picture</p>
                    </div>

                    <div className="firstName-text">
                        <input type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} placeholder="First Name" />
                    </div>

                    <div className="firstName-text">
                        <input type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}} placeholder="Last Name" />
                    </div>

                    <input id="fileInput" type="file" accept='image/*' style={{display:'none'}} onChange={(e) => {setImageUpload(e.target.files[0])}}/>
                </div>
            </div>
        </>
    )
}


export default SignUp;