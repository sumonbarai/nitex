import Button from "../ui/Button";
import InputGroup from "../ui/InputGroup";

const ChangePassword = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">Change Password</h2>
      </div>
      <div className="bg-white p-8 min-h-[300px]">
        <form>
          <div>
            <InputGroup label="Current Password" type="text" size="normal" />
            <InputGroup label="New Password" type="text" size="normal" />
            <InputGroup label="Confirm Password" type="text" size="normal" />
          </div>
          <div className="w-48 mt-10">
            <Button text="save change" variant="basic" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
