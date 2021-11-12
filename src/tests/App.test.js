/* Simple tests to ensure components renders without errors */

import React from 'react'
import App from '../App'
import SiteHeader from '../components/site/SiteHeader'
import Description from '../components/content/Description'
import InventoryList from '../components/inventory/InventoryList'
import InventoryItem from '../components/inventory/InventoryItem'
import AddToOrderModal from '../components/inventory/AddToOrderModal'
import AddToOrderOption from '../components/inventory/AddToOrderOption'
import Basket from '../components/basket/Basket'

import { Provider } from 'react-redux';
import {createStore} from 'redux'
import allReducer from '../reducers/combinedReducers'

const store = createStore(allReducer)

import { shallow, mount } from 'enzyme'
import "../setupTest"

let inventoryItem = {
  "item_id": 9,
  "item_name": "Amet Velit Do",
  "item_description": "sint ad ipsum Lorem fugiat nostrud irure incididunt adipisicing id",
  "item_image_listing": "https://placehold.co/480x300",
  "item_image_details": "https://placehold.co/840x300",
  "base_price": 11.90,
  "options": [
    {
      "option_name": "Nulla Sit Belit Quis",
      "type": "checkbox",
      "values": [
        { "name": "pariatur deserunt id", "price": 1.00 },
        { "name": "sint dolor laboris", "price": 2.00 },
        { "name": "minim ad eu", "price": 1.00 }
      ]
    },
    {
      "option_name": "Amet Elit Weim Voluptate",
      "type": "radio",
      "values": [
        { "name": "qui id cupidatat", "price": 0.00 },
        { "name": "irure cupidatat aliqua", "price": 0.00 },
        { "name": "sunt nostrud dolore", "price": 0.00 }
      ]
    },
    {
      "option_name": "Consectetur Amet Esse Lorem",
      "type": "checkbox",
      "values": [
        { "name": "exercitation nulla aute", "price": 1.00 },
        { "name": "deserunt adipisicing anim", "price": 3.00 },
        { "name": "culpa occaecat mollit", "price": 1.00 }
      ]
    }
  ]
}

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
  it("renders SiteHeader component without crashing", () => {
    shallow(<SiteHeader />);
  });   
  it("renders Description component without crashing", () => {
    shallow(<Description />);
  });   
  it("renders InventoryList component without crashing", () => {
    shallow(<InventoryList />);
  });  
  it("renders InventoryItem component without crashing", () => {
    shallow(<InventoryItem inventoryItem={inventoryItem} />);
  });  
  it("renders AddToOrderModal component without crashing", () => {
    shallow(<Provider store={store}><AddToOrderModal /></Provider>);
  });  
  it("renders AddToOrderOption component without crashing", () => {
    shallow(<AddToOrderOption option={inventoryItem.options[0]} />);
  });    
  it("renders Basket component without crashing", () => {
    shallow(<Provider store={store}><Basket /></Provider>);
  });     
});

