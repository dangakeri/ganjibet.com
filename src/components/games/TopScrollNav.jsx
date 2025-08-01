import { Flex, Badge } from "antd";
import { Link } from "react-router";
import toast from "react-hot-toast";
import ScrollButton from "../homepage/ScrollButton";
import { useAppState } from "../../context/AuthContext";

function TopScrollNav() {
  const { user } = useAppState();
  function comingSoon(game) {
    return toast.success(`${game} coming soon! We will keep you posted.`, {
      position: "top-center",
    });
  }

  return (
    <div className="overflow-x-auto flex gap-2 shrink no-scrollbar mx-4 mt-2">
      <Flex gap="12px ">
        {user ? (
          <Link to="/sports">
            <ScrollButton title="Sports" src="./assets/sports.svg" />
          </Link>
        ) : (
          <ScrollButton
            title="Sports"
            src="./assets/sports.svg"
            onClick={() => navigate("/login")}
          />
        )}

        {user ? (
          <Link to={`/playGame/spribe/aviator`}>
            <Badge.Ribbon
              color="red"
              text="Hot"
              style={{
                fontSize: "12px",
                height: "18px",
                fontWeight: "bold",
                lineHeight: "18px",
                padding: "0 10px",
                top: "-1px",
              }}
            >
              <ScrollButton title="Aviator" src="./assets/aviator1.svg" />
            </Badge.Ribbon>
          </Link>
        ) : (
          <Badge.Ribbon
            color="red"
            text="Hot"
            style={{
              fontSize: "12px",
              height: "18px",
              fontWeight: "bold",
              lineHeight: "18px",
              padding: "0 10px",
              top: "-1px",
            }}
          >
            <ScrollButton title="Aviator" src="./assets/aviator1.svg" />
          </Badge.Ribbon>
        )}
        <Link to={`/scrollAll`}>
          <ScrollButton title="Crash" src="./assets/crash.svg" />
        </Link>
        <Badge.Ribbon
          color="blue"
          text="New"
          style={{
            //
            fontSize: "12px",
            height: "18px",
            fontWeight: "bold",
            lineHeight: "18px",
            padding: "0 10px",
            top: "-1px",
          }}
        >
          <ScrollButton
            onClick={() => comingSoon("Virtuals")}
            title="Virtuals"
            src="./assets/virtuals.svg"
          />
        </Badge.Ribbon>

        {/* <Link to={`/viewAll/spribe`}>
          <ScrollButton title="Slots" src="./assets/slots.svg" />
        </Link> */}
      </Flex>
    </div>
  );
}

export default TopScrollNav;
