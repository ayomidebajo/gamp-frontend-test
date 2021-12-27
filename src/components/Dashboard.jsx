import React, { useEffect } from "react";
import { Redirect } from "react-router";
import Logo from "../assets/logo 2.png";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/actions";
import setAuthToken from "../utils/setAuthToken";
import Spinner from "../assets/Fading squares.gif";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const token = localStorage.getItem("token");
  const { auth } = useSelector((state) => state);

  if (!token) {
    return <Redirect to="/login" />;
  }
  setAuthToken(token);
  console.log(auth, "auths");
  return (
    <div className="main--container">
      <div className="nav-bar--container">
        <ul className="nav-link__container">
          <li className="nav-link logo">
            <img src={Logo} alt="" srcSet="" />
          </li>
          <li className="nav-link">Repair</li>
          <li className="nav-link">Business</li>
          <li className="nav-link ">
            <div className="nav-btn">Protect Device</div>
          </li>
          <li className="nav-link">
            <div className="profile-dropdown">
              <div className="avatar-background">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 3.78947C3.75 5.87874 5.4325 7.57895 7.5 7.57895C9.5675 7.57895 11.25 5.87874 11.25 3.78947C11.25 1.70021 9.5675 0 7.5 0C5.4325 0 3.75 1.70021 3.75 3.78947ZM14.1667 16H15V15.1579C15 11.9082 12.3825 9.26316 9.16667 9.26316H5.83333C2.61667 9.26316 0 11.9082 0 15.1579V16H14.1667Z"
                    fill="#49A05C"
                  />
                </svg>
              </div>{" "}
              Hi, Omotayo
              <span className="profile-drop__triangle"></span>
            </div>
          </li>
        </ul>
      </div>
      <div className="mobile-nav">
        <div className="">
          {" "}
          <img src={Logo} width="90%" alt="logo" />
        </div>
        <div className="hamburger__container">
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </div>
      </div>
      <div className="dashboard--container">
        <div className="sidebar">
          <div className="profile-sidebar">
            <div className="profile-sidebar__child">
              <div className="avatar-background">
                <svg
                  width="25"
                  height="23"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 3.78947C3.75 5.87874 5.4325 7.57895 7.5 7.57895C9.5675 7.57895 11.25 5.87874 11.25 3.78947C11.25 1.70021 9.5675 0 7.5 0C5.4325 0 3.75 1.70021 3.75 3.78947ZM14.1667 16H15V15.1579C15 11.9082 12.3825 9.26316 9.16667 9.26316H5.83333C2.61667 9.26316 0 11.9082 0 15.1579V16H14.1667Z"
                    fill="#49A05C"
                  />
                </svg>
              </div>
              <div className="">
                <p className="text-green">My profile</p>
                <p>Paul Omotayo</p>
              </div>
            </div>
          </div>
          <ul className="sidebar-links__container">
            <li className="sidebar-link">
              <div className="sidebar-link__child">
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6689 7.86891L8.3992 0.175224C8.34686 0.119678 8.28468 0.0756107 8.21624 0.0455436C8.1478 0.0154765 8.07443 0 8.00033 0C7.92623 0 7.85286 0.0154765 7.78442 0.0455436C7.71598 0.0756107 7.6538 0.119678 7.60146 0.175224L0.331803 7.86891C0.120014 8.09322 0 8.3979 0 8.71567C0 9.3755 0.506529 9.91197 1.12954 9.91197H1.89551V15.4019C1.89551 15.7327 2.14789 16 2.46028 16H6.87079V11.813H8.84749V16H13.5404C13.8528 16 14.1052 15.7327 14.1052 15.4019V9.91197H14.8711C15.1712 9.91197 15.4588 9.78673 15.6706 9.56055C16.1101 9.09325 16.1101 8.33622 15.6689 7.86891Z"
                      fill="#49A05C"
                    />
                  </svg>
                </span>
                Home
              </div>
            </li>
            <li className="sidebar-link">
              <div className="sidebar-link__child">
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4 0H4.80001C3.91761 0 3.20001 0.7176 3.20001 1.6V11.2C3.20001 12.0824 3.91761 12.8 4.80001 12.8H14.4C15.2824 12.8 16 12.0824 16 11.2V1.6C16 0.7176 15.2824 0 14.4 0ZM4.80001 11.2V1.6H14.4L14.4016 11.2H4.80001Z"
                      fill="#49A05C"
                    />
                    <path
                      d="M1.6 4.80001H0V14.4C0 15.2824 0.7176 16 1.6 16H11.2V14.4H1.6V4.80001ZM10.4 3.20001H8.8V5.60001H6.4V7.20001H8.8V9.60001H10.4V7.20001H12.8V5.60001H10.4V3.20001Z"
                      fill="#49A05C"
                    />
                  </svg>
                </span>
                Protected Plans
              </div>
            </li>
            <li className="sidebar-link">
              <div className="sidebar-link__child">
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8958 10.5304V4.7976C13.8916 3.5128 12.9894 1.6 10.5208 1.6V0L7.15413 2.4L10.5208 4.8V3.2C12.0602 3.2 12.2049 4.4312 12.2125 4.8V10.5304C11.0005 10.8776 10.1084 11.936 10.1084 13.2C10.1084 14.744 11.4298 16 13.0542 16C14.6786 16 16 14.744 16 13.2C16 11.936 15.1078 10.8776 13.8958 10.5304ZM13.0542 14.4C12.3581 14.4 11.7917 13.8616 11.7917 13.2C11.7917 12.5384 12.3581 12 13.0542 12C13.7502 12 14.3167 12.5384 14.3167 13.2C14.3167 13.8616 13.7502 14.4 13.0542 14.4ZM5.89164 2.8C5.89164 1.256 4.57023 0 2.94582 0C1.32141 0 0 1.256 0 2.8C0 4.064 0.892162 5.1224 2.10416 5.4696V10.5304C0.892162 10.8776 0 11.936 0 13.2C0 14.744 1.32141 16 2.94582 16C4.57023 16 5.89164 14.744 5.89164 13.2C5.89164 11.936 4.99947 10.8776 3.78748 10.5304V5.4696C4.99947 5.1224 5.89164 4.064 5.89164 2.8ZM1.68332 2.8C1.68332 2.1384 2.24976 1.6 2.94582 1.6C3.64187 1.6 4.20831 2.1384 4.20831 2.8C4.20831 3.4616 3.64187 4 2.94582 4C2.24976 4 1.68332 3.4616 1.68332 2.8ZM4.20831 13.2C4.20831 13.8616 3.64187 14.4 2.94582 14.4C2.24976 14.4 1.68332 13.8616 1.68332 13.2C1.68332 12.5384 2.24976 12 2.94582 12C3.64187 12 4.20831 12.5384 4.20831 13.2Z"
                      fill="#49A05C"
                    />
                  </svg>
                </span>
                Linked Device
              </div>
            </li>
            <li className="sidebar-link">
              <div className="sidebar-link__child">
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2 4H13.5V2C13.5 0.9 12.69 0 11.7 0H6.3C5.31 0 4.5 0.9 4.5 2V4H1.8C0.81 4 0 4.9 0 6V16H18V6C18 4.9 17.19 4 16.2 4ZM6.3 2H11.7V4H6.3V2ZM16.2 14H1.8V11H3.6V12H5.4V11H12.6V12H14.4V11H16.2V14ZM14.4 9V8H12.6V9H5.4V8H3.6V9H1.8V6H16.2V9H14.4Z"
                      fill="#49A05C"
                    />
                  </svg>
                </span>
                Repairs
              </div>
            </li>
            <li className="sidebar-link">
              <div className="sidebar-link__child">
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9753 8.85232C13.0794 8.75802 13.137 8.63173 13.1357 8.50063C13.1344 8.36954 13.0743 8.24414 12.9683 8.15144C12.8624 8.05874 12.7191 8.00616 12.5692 8.00502C12.4194 8.00388 12.275 8.05428 12.1672 8.14535L7.9995 11.7917L6.11765 10.1452C6.00987 10.0542 5.86551 10.0038 5.71568 10.0049C5.56584 10.0061 5.42251 10.0586 5.31655 10.1513C5.21059 10.244 5.15049 10.3694 5.14919 10.5005C5.14789 10.6316 5.20549 10.7579 5.30959 10.8522L7.9995 13.2056L12.9753 8.85232Z"
                      fill="#49A05C"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.9999 4.99974V15.4992C15.9999 15.897 15.8193 16.2785 15.4978 16.5598C15.1763 16.8411 14.7402 16.9991 14.2855 16.9991H3.99905C3.54436 16.9991 3.10829 16.8411 2.78678 16.5598C2.46526 16.2785 2.28464 15.897 2.28464 15.4992V1.49992C2.28464 1.10212 2.46526 0.720606 2.78678 0.439317C3.10829 0.158027 3.54436 0 3.99905 0H10.2852L15.9999 4.99974ZM10.2852 5.49971C10.1337 5.49971 9.98831 5.44703 9.88114 5.35327C9.77397 5.25951 9.71376 5.13234 9.71376 4.99974V0.999947H3.99905C3.84749 0.999947 3.70213 1.05262 3.59496 1.14639C3.48779 1.24015 3.42758 1.36732 3.42758 1.49992V15.4992C3.42758 15.6318 3.48779 15.759 3.59496 15.8527C3.70213 15.9465 3.84749 15.9992 3.99905 15.9992H14.2855C14.4371 15.9992 14.5824 15.9465 14.6896 15.8527C14.7968 15.759 14.857 15.6318 14.857 15.4992V5.49971H10.2852ZM10.8567 1.9139L13.8123 4.49976H10.8567V1.9139Z"
                      fill="#49A05C"
                    />
                    <path
                      d="M1.14294 3.00165V16.5009C1.14294 16.8987 1.32357 17.2802 1.64508 17.5615C1.9666 17.8428 2.40266 18.0009 2.85735 18.0009H13.7153V19.0008H2.85735C2.09954 19.0008 1.37276 18.7374 0.8369 18.2686C0.301042 17.7998 0 17.1639 0 16.5009V3.00165H1.14294Z"
                      fill="#49A05C"
                    />
                  </svg>
                </span>
                Claims
              </div>
            </li>
            <li className="">
              <div className="sidebar-btn">Logout</div>
            </li>
          </ul>
        </div>
        <div className="dashboard-table__container">
          <div className="current-path">
            <span className="arrow-left">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.125 5.14347H2.7475L5.92375 1.40666C6.07227 1.23163 6.14373 1.00599 6.12239 0.779355C6.10106 0.552724 5.98869 0.343676 5.81 0.198198C5.63131 0.0527213 5.40094 -0.0172684 5.16957 0.00362668C4.93819 0.0245217 4.72477 0.13459 4.57625 0.309617L0.20125 5.45201C0.171816 5.49292 0.145494 5.53589 0.1225 5.58057C0.1225 5.62343 0.1225 5.64914 0.0612502 5.69199C0.0215894 5.79026 0.000823481 5.89487 0 6.00054C0.000823481 6.1062 0.0215894 6.21081 0.0612502 6.30908C0.0612502 6.35193 0.0612499 6.37764 0.1225 6.4205C0.145494 6.46519 0.171816 6.50816 0.20125 6.54906L4.57625 11.6915C4.65852 11.7882 4.76154 11.866 4.87799 11.9193C4.99444 11.9727 5.12145 12.0002 5.25 12C5.45445 12.0004 5.65258 11.9306 5.81 11.8029C5.8986 11.7309 5.97184 11.6426 6.02552 11.5428C6.07921 11.4431 6.11228 11.334 6.12284 11.2218C6.13341 11.1095 6.12126 10.9963 6.0871 10.8887C6.05294 10.781 5.99743 10.681 5.92375 10.5944L2.7475 6.8576H13.125C13.3571 6.8576 13.5796 6.7673 13.7437 6.60657C13.9078 6.44584 14 6.22784 14 6.00054C14 5.77323 13.9078 5.55523 13.7437 5.3945C13.5796 5.23377 13.3571 5.14347 13.125 5.14347Z"
                  fill="#161C26"
                />
              </svg>
            </span>
            <p className="current-path__child text-bold">Protection Plans</p>
          </div>
          <div className="dashboard-table-body__container">
            <div className="">
              <ul className="dashboard-table-innerlinks__container">
                <li className="innerlink text-green">screen protection (3)</li>
                <li className="innerlink text-mute">service contract (0)</li>
              </ul>
            </div>
            <div className="dashboard-table-cards__container">
              {auth.loading ? (
                auth?.data?.map((item) => (
                  <div className="table-card" key={item._id}>
                    <div className="item">
                      <p>Date purchased</p>
                      <p className="text-green2 text-bold">{item.createdAt}</p>
                    </div>
                    <div className="item">
                      <p>Amount Paid</p>
                      <p className="text-green2 text-bold">{item.price}</p>
                    </div>
                    <div className="item">
                      <p>Phones Covered</p>
                      <p className="text-green2 text-bold">
                        {item.numOfPhones}
                      </p>
                    </div>
                    <div className="item">
                      <p>Laptops Covered</p>
                      <p className="text-green2 text-bold">
                        {item.numOfLaptops}
                      </p>
                    </div>
                    <div className="item">
                      {" "}
                      <div className="table-btn">view details</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="spinner">
                  <img src={Spinner} alt="" />
                </div>
              )}
            </div>
            <ul className="pages-container">
              <ul className="pages-list__container">
                <li className="prev-page">&lt; </li>

                <li className="page page-active">1</li>
                <li className="page">2</li>
                <li className="page">3</li>
                <li className="page-rest">...</li>

                <li className="next-page"> &gt; </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
