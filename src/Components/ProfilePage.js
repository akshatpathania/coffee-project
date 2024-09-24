import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  // Sample customer profile data with a profile image
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Coffee Street, Espresso City, 45678',
    phone: '123-456-7890',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({
      ...updatedProfile,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedProfile({
          ...updatedProfile,
          imageUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="profile-details">
        {isEditing ? (
          <>
            <div className="profile-image-section">
              <label>Profile Image:</label>
              <img src={updatedProfile.imageUrl} alt="Profile" className="profile-image" />
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>

            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={updatedProfile.name}
              onChange={handleChange}
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={updatedProfile.email}
              onChange={handleChange}
            />

            <label>Address:</label>
            <textarea
              name="address"
              value={updatedProfile.address}
              onChange={handleChange}
            />

            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={updatedProfile.phone}
              onChange={handleChange}
            />

            <button className="save-button" onClick={handleSave}>
              Save Profile
            </button>
          </>
        ) : (
          <>
            <div className="profile-image-section">
              <img src={profile.imageUrl} alt="Profile" className="profile-image" />
            </div>

            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Address:</strong> {profile.address}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>

            <button className="edit-button" onClick={handleEdit}>
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
