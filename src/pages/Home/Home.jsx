import React from 'react';
import scss from "./Home.module.scss";
import HeaderToolbarMain from 'shared/components/layouts/HeaderToolbarMain';
import { UIFlexContainer } from 'shared/styled/UIFlexContainer';
import ColumnNavigator from './dependencies/components/ColumnNavigator';
import Ranking from './dependencies/RankingFeeds';
import ViewCategories from './dependencies/CategoriesEats';
import NewsFeedOrdered from './dependencies/NewsFeedOrdered';
import MyDescription from './dependencies/MyDescription';
import Drawer from 'shared/components/layouts/Drawer';

function Home() {
  return (
    <Drawer appbar={<HeaderToolbarMain />}>
      <UIFlexContainer sizeHeight="100%" justify="space-between" className={scss.drawerBody}>

        <ColumnNavigator.Aside >
          <ViewCategories />
        </ColumnNavigator.Aside>

        <ColumnNavigator.CenterViewNews>
          <Ranking />
          <NewsFeedOrdered />
        </ColumnNavigator.CenterViewNews>

        <ColumnNavigator.Aside>
          <MyDescription />
        </ColumnNavigator.Aside>

      </UIFlexContainer>
    </Drawer>
  )
}

export default Home;
