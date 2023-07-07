import { IconCategory } from "@tabler/icons-react";
import { useContext } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { supabase } from "../../plugins/supabase";

const Header = () => {
  const { session } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const itemClass = (path) => {
    return path === location.pathname
      ? "px-3 py-2 bg-secondary text-primary rounded-lg"
      : "px-3 py-2 text-secondary bg-inherit rounded-lg hover:bg-secondary hover:bg-opacity-20";
  };
  if (!session) {
    return <Navigate to="/auth/signin" />;
  }

  return (
    <div className="">
      <div
        className="bg-primary px-4 py-3"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="flex items-center gap-2 text-secondary">
          <IconCategory />
          <p className="text-xl font-bold">バイク借り</p>
        </div>
        <div className="inline-flex gap-2">
          <button onClick={() => navigate("/")} className={itemClass("/")}>
            ホーム
          </button>
          <button
            onClick={() => navigate("/order")}
            className={itemClass("/order")}
          >
            オーダー
          </button>
          <button
            onClick={() => navigate("/history")}
            className={itemClass("/history")}
          >
            オーダー歴史
          </button>
        </div>
        <div>
          {!session ? (
            <button
              onClick={() => navigate("/auth/signin")}
              className="px-3 py-2 rounded-lg bg-secondary text-primary"
            >
              ログイン
            </button>
          ) : (
            <button
              onClick={() => supabase.auth.signOut()}
              className="px-3 py-2 rounded-lg bg-secondary text-primary"
            >
              サインアウト
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
