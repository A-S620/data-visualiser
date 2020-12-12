//Imports from libraries
import 'jsdom-global/register';
import React from 'react';

//Interface Components
//Domain Components
import CreateAnalysedData from '../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { AnalyseData } from '../../../src/domain/UIHandlers/AnalyseData';

//Store components

//Test data
const dataAsObjects = [
    { col1: '32', col2: '45', col3: 'foo' },
    { col1: '79', col2: '5', col3: 'foo' },
    { col1: '76', col2: '23', col3: 'foo' },
];
const dataFields = ['col1', 'col2', 'col3'];
const integerFields = ['col1', 'col2'];

const integerDataObjects = [
    { col1: 32, col2: 45 },
    { col1: 79, col2: 5 },
    { col1: 76, col2: 23 },
];

const dataWithoutFloats = [
    {
        id: 'aaa',
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },
];
const dataWithoutFloatsFields = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];
describe('Analyse Data', () => {
    it('Should return a notification when there are no integer fields in the data', () => {
        //Given I have some data with no integer fields
        //When I process the data using the AnalyseData class
        //Then it should return a notification
        const analyseData = new AnalyseData(dataWithoutFloatsFields, dataWithoutFloats);
        const notifications = analyseData.validate();
        expect(notifications.getNotifications()[0]).toEqual(
            "Imported Data doesn't contain more than 2 integer fields, so it cannot be visualised"
        );
    });
    it('Should return a notification when there 2 or more integer fields in the data', () => {
        //Given I have some data with 2 or more integer fields
        //When I process the data using the AnalyseData class
        //Then it should return a notification
        const analyseData = new AnalyseData(dataFields, dataAsObjects);
        const notifications = analyseData.validate();
        expect(notifications.getNotifications()[0]).toEqual(
            'Imported file has the following integer fields col1,col2, and can be visualised'
        );
    });
});
