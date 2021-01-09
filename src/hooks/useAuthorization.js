import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export function useAuthorization(isGuestAllowed = true, isUserAllowed = true) {
  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && !isUserAllowed) {
      history.push("/products");
    } else if (!user && !isGuestAllowed) {
      history.push("/");
    }

    return () => {};
  }, []);
}
