import React, { useRef, useEffect } from "react";

//import {useDispatch, useSelector} from 'react-redux';


/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, clickOutsideMenu) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        clickOutsideMenu();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {

  //const dispatch = useDispatch();
  //const state = useSelector(state=>state);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.handleClick);

  return <div ref={wrapperRef}>{props.children}</div>;
}



export default OutsideAlerter;
