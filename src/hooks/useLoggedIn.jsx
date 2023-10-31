import { useAuth } from "../contexts/AuthProvider";

const useLoggedIn = () => {
  const [auth] = useAuth();

  if (!auth.token && !auth.user) {
    return false;
  }

  return true;
};

export default useLoggedIn;
