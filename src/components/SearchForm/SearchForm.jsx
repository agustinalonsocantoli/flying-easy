// React
import { useState } from 'react';
// Icons
import { TbArrowsExchange2 } from 'react-icons/tb';
// Styled 
import { SearchFormBox, FirstBox, SecondBox, Button, Icon, Picker } from './FormStyled';
// Libraries
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;



export const SearchForm = () => {
    const [ search, setSearch ] = useState({
        from: '',
        to: '',
        class: '',
        direct: false,
        flighType: '',
        date: [],
    })

    const formatDate = (data) => {
        let newDate = []

        data.map((item) => (
            newDate.push(`${item.$D}-${item.$M + 1}-${item.$y}`)
        ))

        setSearch(prev => ({...prev, date: newDate}))
    }

    const styledDate = {
        fontFamily: 'Roboto',
        fontWeight: 200,
        fontSize: 18,
        padding: '3px 5px',
        outline: 'none',
    }

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        let newValue;

        if(type === "checkbox") {
            let checkValue = false;

            if(checked) {
                checkValue = true;
            } else {
                checkValue = false;
            }

            newValue = checkValue;
        } else {
            newValue = value;
        }
        
        setSearch(prev => ({...prev, [name]: newValue}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(search);
    }

    const handleClick = () => {
        setSearch(prev => ({
            ...prev, 
            from: search.to,
            to: search.from
        }))
    }

    return(
        <SearchFormBox>
            <form onSubmit={handleSubmit}>
                <FirstBox>
                    <div>
                        <input type="radio" name='flighType' value='return' onChange={handleInput}/>
                        <label>Return</label>
                        <input type="radio" name='flighType' value='oneWay' onChange={handleInput}/>
                        <label>One way</label>
                    </div>

                    <div>
                        <select name="class" onChange={handleInput}>
                            <option value="economy">Economy</option>
                            <option value="business">Business</option>
                            <option value="first">First</option>
                        </select>
                    </div>

                    <div>
                        <input type="checkbox" name='direct' onChange={handleInput}/>
                        <label>Direct flights only</label>
                    </div>
                </FirstBox>

                <SecondBox>
                    <input type="text" placeholder='Where from?' name='from' value={search.from} onChange={handleInput}/>
                    <Icon onClick={handleClick}><TbArrowsExchange2 /></Icon>
                    <input type="text" placeholder='Where to?' name='to' value={search.to} onChange={handleInput}/>


                    <RangePicker
                    onChange={(value) => formatDate(value)} 
                    bordered={false}
                    format={'DD-MM-YYYY'}
                    style={styledDate}
                    />

                </SecondBox>

                <Button type='submit'>Search Flights</Button>
            </form>
        </SearchFormBox>
    )
}