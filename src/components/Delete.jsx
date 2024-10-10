import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const Delete = () => {
  return (
    <div className="flex pt-40 flex-col  pl-5 items-start gap-1">
      <Link to="/list">
        <button
          className="text-3xl text-white   bg-[#070c47] border-solid py-1 px-3 "
          type="submit"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </Link>
    </div>
  );
};

export default Delete;
