import React from "react";
import './user-profile.scss';
import { Link } from "react-router-dom";
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

export default function UserProfile() {
  return (
    <div className='user-profile div-shadow'>
        <Link to='/' className="user-edit-btn">Edit</Link>

      <div className="user-item">
        <div className="mb-3 text-center">
          <img className="user-img mx-auto" src="https://pps.whatsapp.net/v/t61.24694-24/158090991_918063538878051_8566632081671337790_n.jpg?ccb=11-4&oh=01_AdT3HzBnjpQ9AecN7hYPV8JkUh8svIomAjRno50d-wQBBg&oe=64C64E6E" alt="" />
          <h1 className="user-title">Amdadul Shabbir</h1>
          <p className="user-email">sample@gmail.com</p>
        </div>
        
        <div className="user-details">
            <div className="user-detail-item">
              <div className="user-detail-item-icon"><AiOutlinePhone/></div>
              {/* <div className="user-detail-item-value">3</div> */}
            </div>
            <div className="user-detail-item">
              <p className="user-detail-item-icon"><AiOutlineMail/></p>
              {/* <div className="user-detail-item-value">3</div> */}
            </div>
            <div className="user-detail-item">
              <p className="user-detail-item-icon"><CiLocationOn/></p>
              {/* <div className="user-detail-item-value">34</div> */}
            </div>
        </div>
       
      </div>
    </div>
  );
}
