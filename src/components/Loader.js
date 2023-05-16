import React from 'react'
import HashLoader from "react-spinners/HashLoader";

const Loader = ({loading}) => {
    const override = {
        display: "inline",
        margin: "0 auto",
        borderColor: "red",
        flex:"20%",
        position:"absolute",
        right:"15px"

      };

  return (
    <> 
    <HashLoader
    color="white"
    loading={loading}
    cssOverride={override}
    size={20}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  </>
  )
}

export default Loader