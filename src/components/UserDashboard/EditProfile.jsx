import Button from "../ui/Button";
import InputGroup from "../ui/InputGroup";

const EditProfile = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">Edit profile</h2>
      </div>
      <div className="bg-white p-8 min-h-[300px]">
        <form>
          <div className="grid grid-cols-3 gap-3">
            <InputGroup label="First Name" type="text" size="normal" />
            <InputGroup label="Last Name" type="text" size="normal" />
            <InputGroup label="Email" type="email" size="normal" />
            <InputGroup label="Mobile" type="number" size="normal" />
            <InputGroup label="Address" type="text" size="normal" />
          </div>
          <div className="w-48 mt-10">
            <Button text="update" variant="basic" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
