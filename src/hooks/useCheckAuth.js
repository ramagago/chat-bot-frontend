import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../auth";

export const useCheckAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const headers = authService.isAuthenticated();

    if (!headers) {
      navigate("/login");
    }
  }, [navigate]);
};
