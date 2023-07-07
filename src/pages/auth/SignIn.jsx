import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { supabase } from "../../plugins/supabase";
const SignIn = () => {
  const { session } = useContext(AuthContext);
  const location = useLocation();

  if (!session) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="w-96">
          <Auth
            supabaseClient={supabase}
            providers={["google", "facebook"]}
            socialLayout="horizontal"
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#84735e",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    );
  } else {
    return <Navigate to={location.search?.split("=")?.at(1) || "/"} />;
  }
};

export default SignIn;
