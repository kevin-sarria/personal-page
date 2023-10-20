import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closingSession, validatingSession } from "../store";
import { localSpace } from "../interceptors";

const token = localSpace.get('token') ?? null;

export const useCheckAuth = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect( () => {

    if( !token ) {
      dispatch(closingSession());
      return;
    };

    dispatch(validatingSession());

  }, [] );

  return status;
}