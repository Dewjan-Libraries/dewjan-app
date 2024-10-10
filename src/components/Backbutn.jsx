import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex pt-40 flex-col  pl-5 items-start gap-1">
          <Link to="/">
            <button
              type="submit"
              className="text-3xl text-white bg-[#070c47] border-solid py-1 px-3"
            >
              <FontAwesomeIcon icon={faHome} />
            </button>
          </Link>
        </div>
  )
}

export default Home