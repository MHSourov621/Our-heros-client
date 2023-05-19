import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactTabCard from './ReactTabCard';



const ReactTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [marvel, setMarvel] = useState([]);
    const [dc, setDc] = useState([]);
    const [power, setPower] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/category/Marvel')
            .then(res => res.json())
            .then(data => setMarvel(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/category/DC')
            .then(res => res.json())
            .then(data => setDc(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/category/Power')
            .then(res => res.json())
            .then(data => setPower(data))
    }, [])
    return (
        <div className='mb-28'>
            <div className='text-6xl text-orange-500 text-center mb-10'>
                <h2 className='border-b-2 border-orange-400 inline'>Shop by category</h2>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Marvel Heros</Tab>
                    <Tab>DC Heros</Tab>
                    <Tab>Power Ranger</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3'>
                        {
                            marvel.map(hero => <ReactTabCard
                                key={hero._id}
                                hero={hero}
                            ></ReactTabCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3'>
                        {
                            dc.map(hero => <ReactTabCard
                                key={hero._id}
                                hero={hero}
                            ></ReactTabCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3'>
                        {
                            power.map(hero => <ReactTabCard
                                key={hero._id}
                                hero={hero}
                            ></ReactTabCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTab;