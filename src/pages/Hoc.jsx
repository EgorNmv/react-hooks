import React from 'react';

const starWarsChars = [
    {name: 'Дарт Вэйдер', side: 'dark'},
    {name: 'Люк Скайворкер', side: 'light'},
    {name: 'Палпатин', side: 'dark'},
    {name: 'Обиван Кеноби', side: 'light'}
];

const SomeList = ({list}) => (
    <ul>
        {list.map((char, index) => {
            return (
                <li key={char.name + index}>
                    <strong>{char.name}</strong> - &nbsp;
                    {char.side}
                </li>
            )
        })}
    </ul>
);

const withFilteredProps = Component => ({list, side}) => {
    const filteredList = list.filter(char => char.side === side);
    return <Component list={filteredList}/>
};

const FilteredList = withFilteredProps(SomeList);

export function Hoc () {
return(
    <FilteredList list={starWarsChars} side="light"/>
);
}
