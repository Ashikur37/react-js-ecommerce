import React, { Component } from "react";
import { connect } from "react-redux";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import { createStructuredSelector } from "reselect";
import { selectShopSections } from "../../redux/shop/shop.selectors";
import CollectionItemComponent from "../../components/collection-item/collection-item.component";
import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import { Route, matchPath, Routes, useParams  } from "react-router-dom";
import CategoryPage from "../collection/collection.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
  let params = useParams();
  

  return (
    <div className="shop-page">
      {
        params.collectionId ? <CollectionPage collectionId={params.collectionId}/> : <CollectionsOverviewComponent />
      }
     
      {/* <Route path="/:state/:city*" element={<LocationView city />} /> */}
    </div>
  );
};

export default ShopPage;
