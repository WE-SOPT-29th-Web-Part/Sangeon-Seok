import React from 'react';
import { Profile } from '../components/Home/Profile'
import { HomeNav } from '../components/Home/HomeNav'
import { ArticleContainer } from '../components/Home/ArticleContainer'
import { Header } from '../components/common/Header';

export function Home() {
  return (
    <div>
      <Header />
      <Profile />
      <HomeNav />
      <ArticleContainer />
    </div>
  );
};