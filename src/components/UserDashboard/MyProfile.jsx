const MyProfile = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">My profile</h2>
      </div>
      <div className="bg-white p-8 grid grid-cols-3 gap-3 min-h-[300px]">
        <div className="p-2">
          <h5>Name</h5>
          <p>sumon barai</p>
        </div>
        <div className="p-2">
          <h5>Email</h5>
          <p>sumonbarai@gmail.com</p>
        </div>
        <div className="p-2">
          <h5>Mobile</h5>
          <p>01815223111</p>
        </div>
        <div className="p-2">
          <h5>Address</h5>
          <p>khulna</p>
        </div>
        <div className="p-2">
          <h5>Gender</h5>
          <p>Male</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
