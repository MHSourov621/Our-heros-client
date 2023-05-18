import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const ReactTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='mb-28'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Marvel Heros</Tab>
                    <Tab>DC Heros</Tab>
                    <Tab>Power Ranger</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTab;