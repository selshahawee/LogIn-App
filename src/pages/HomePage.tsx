
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/store';

export function HomePage():JSX.Element {
    

  const user = useSelector((state: RootState) => state.app.user);
  
  
    return (
      <div>
        {JSON.stringify(user)}
        </div>
  )
}

