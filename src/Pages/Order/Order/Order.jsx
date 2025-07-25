import { useState } from 'react';
import Cover from '../../../Shared/Cover/Cover';
import orderCover from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import TabOrder from '../TabOrder/TabOrder';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Order = () => {
    const categories = ['salad', 'dessert', 'drinks', 'soup', 'pizza']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu()
    const salad = menu.filter(items => items.category === 'salad')
    const dessert = menu.filter(items => items.category === 'dessert')
    const drinks = menu.filter(items => items.category === 'drinks')
    const soup = menu.filter(items => items.category === 'soup')
    const pizza = menu.filter(items => items.category === 'pizza')
    
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <div>
                <Cover bgImg={orderCover} title={"order now"} description={"Would You like to Try this dish"}></Cover>
                <div className='max-w-10/12 mx-auto my-10'>
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>salad</Tab>
                            <Tab>dessert</Tab>
                            <Tab>drinks</Tab>
                            <Tab>soup</Tab>
                            <Tab>pizza</Tab>
                        </TabList>
                        <TabPanel>
                            <TabOrder items={salad}></TabOrder>
                        </TabPanel>
                        <TabPanel>
                            <TabOrder items={dessert}></TabOrder>
                        </TabPanel>
                        <TabPanel>
                            <TabOrder items={drinks}></TabOrder>
                        </TabPanel>
                        <TabPanel>
                            <TabOrder items={soup}></TabOrder>
                        </TabPanel>
                        <TabPanel>
                            <TabOrder items={pizza}></TabOrder>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default Order;