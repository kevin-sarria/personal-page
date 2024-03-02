import { useDispatch, useSelector } from 'react-redux'
import { AboutMe, Footer, Header, MyProjects } from './'
import { useEffect } from 'react';
import { searchAllProjectsAndAllTechnologies } from '../../store';

export const HomePage = () => {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(searchAllProjectsAndAllTechnologies());
  }, [] );

  return (
    <>
        <Header />
        <AboutMe />
        <MyProjects />
        <Footer />
    </>
  )
}
