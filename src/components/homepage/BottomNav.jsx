"use client";
import { NavLink } from "react-router";
import styled from "styled-components";
import { useAppState } from "../../context/AuthContext";

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #4a4a4a;
  transition: color 0.3s;

  &.active {
    color: #ff6d00;
  }
`;

function BottomNav() {
  const { user } = useAppState();

  return (
    <div className="left-0 right-0 fixed bottom-0 xs:bottom-5 xs:mx-2   z-10 lg:grid lg:grid-cols-[20vw,1fr,20vw] sm:min-w-full">
      <div className="hidden lg:block"></div>
      <div className="flex items-center justify-between px-4 h-16 xs:shadow-2xl xs:rounded-md bg-[#23313d] pt-3">
        <StyledNavLink to="/home" end>
          {({ isActive }) => (
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
              <img src="/assets/home.svg" className="h-[24px]" />
              <p
                className={`font-normal text-sm ${
                  isActive ? "text-[#FF6D00]" : "text-textGrey"
                }`}
              >
                Home
              </p>
            </div>
          )}
        </StyledNavLink>
        <StyledNavLink to={!user ? "/login" : `/sports`}>
          {() => (
            <div className="flex flex-col items-center justify-center gap-1">
              <img
                src="/assets/sports.svg"
                className="h-[24px] w-auto"
                alt="sports"
              />
              <p
                className={`font-normal text-sm 
                  text-textGrey
                `}
              >
                Sports
              </p>
            </div>
          )}
        </StyledNavLink>{" "}
        {user ? (
          <StyledNavLink to={`/playGame/spribe/aviator`}>
            {({ isActive }) => (
              <div className="flex flex-col items-center justify-center gap-1">
                <img
                  src="/assets/aviator1.svg"
                  className="h-[24px] w-auto"
                  alt="aviator"
                />
                <p
                  className={`font-normal text-sm ${
                    isActive ? "text-[#FF6D00]" : "text-textGrey"
                  }`}
                >
                  Aviator
                </p>
              </div>
            )}
          </StyledNavLink>
        ) : (
          <StyledNavLink to={`/login`}>
            {({ isActive }) => (
              <div className="flex flex-col items-center justify-center gap-1">
                <img
                  src="/assets/aviator1.svg"
                  className="h-[24px] w-auto"
                  alt="aviator"
                />
                <p
                  className={`font-normal text-sm ${
                    isActive ? "text-[#FF6D00]" : "text-textGrey"
                  }`}
                >
                  Aviator
                </p>
              </div>
            )}
          </StyledNavLink>
        )}
        <StyledNavLink to="/promotion">
          {({ isActive }) => (
            <div className={`flex flex-col items-center justify-center gap-1 `}>
              <img src="/assets/promotion.svg" className="h-[24px]" />
              <p
                className={`font-normal text-sm ${
                  isActive ? "text-[#FF6D00]" : "text-textGrey"
                }`}
              >
                Promos
              </p>
            </div>
          )}
        </StyledNavLink>
        <StyledNavLink to={user ? "/profile" : "/login"}>
          {({ isActive }) => (
            <div className="flex flex-col items-center justify-center gap-1">
              <img src="/assets/profile.svg" className="h-[24px]" />
              <p
                className={`font-normal text-sm ${
                  isActive ? "text-[#FF6D00]" : "text-textGrey"
                }`}
              >
                Profile
              </p>
            </div>
          )}
        </StyledNavLink>
      </div>
    </div>
  );
}

export default BottomNav;
