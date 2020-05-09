import React from 'react';
import "./Home.scss";
import Drawer from 'shared/layouts/Drawer';
import HeaderToolbarMain from 'shared/layouts/HeaderToolbarMain';
import FlexContainer from 'shared/styled/FlexContainer';
import ViewCategories from './views/ViewCategories';
import ColumnNavigator from './components/ColumnNavigator';

function Home() {
  return (
    <Drawer appbar={<HeaderToolbarMain />}>
      <FlexContainer sizeHeight="100%" justify="space-between">
        <ColumnNavigator.Aside>
          <ViewCategories />
        </ColumnNavigator.Aside>
        <ColumnNavigator.CenterViewNews>
        
        </ColumnNavigator.CenterViewNews>
        <ColumnNavigator.Aside>
        </ColumnNavigator.Aside>
      </FlexContainer>
    </Drawer>
  )
}

export default Home;
