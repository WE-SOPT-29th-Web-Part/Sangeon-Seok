import React from 'react';
import Loading from './Loading'
import Resolve from './Resolve';
import Reject from './Reject';

const Result = ({userInfo, setUserInfo}) => {
  switch (userInfo.status) {
    case "loading":
      return <Loading />
    case "resolved":
      return <Resolve userInfo={userInfo.data} setUserInfo={setUserInfo}/>
      // 현재 userInfo 내에 data와 status 모두 들어와있기 때문에 확실히 data로 지정해준다.
    case "rejected":
      return <Reject />
    case "idle":
    default:
      return <></>
  };
}

export default Result;