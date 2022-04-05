import React from 'react';
import Person from './Person';

function NameList(props) {
    const people = [
        {
            name: 'Java',
            age: 26
        },
        {
            name: 'Melody',
            age: 25
        },
        {
            name: 'Eru',
            age: 18
        }
    ];
    // Should be static list that do not change and never reordered or filtered
    const personList = people.map((person, index) => <Person key={index} person={person} />)
    return <div>{personList}</div>;
}

export default NameList;

