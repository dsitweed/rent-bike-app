import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { supabase } from "../../plugins/supabase";
const SignIn = () => {
  const { session } = useContext(AuthContext);

  if (!session) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="w-96">
          <Auth
            supabaseClient={supabase}
            providers={["google", "facebook"]}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#d97706",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    );
  } else {
    return <Navigate to={"/"} />;
  }
};

export default SignIn;
