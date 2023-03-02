import Login from '@/components/login';
import {AppContext} from '@/contexts/UserContext';
import React, {useContext} from 'react';
import Costs from './costs';
import Reports from './reports';

const Home = () => {
  const {items} = useContext(AppContext);

  if(items === undefined) {
    return <Login></Login>;
  }
  if(items?.userName === "shamim" || items?.userName === "shahin") {
    return <Reports></Reports>;
  }

  if(items?.userName === "sujon") {
    return <Costs></Costs>;
  }
};

export default Home;