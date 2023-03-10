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
    const [ dates, setDates ] = useState([])

    const formatDate = (data) => {
        let newDate = []

        data.map((item) => (
            newDate.push(`${item.$D}-${item.$M + 1}-${item.$y}`)
        ))

        setDates(newDate)
    }

    const styledDate = {
        fontFamily: 'Roboto',
        fontWeight: 200,
        fontSize: 18,
        padding: '3px 5px',
        outline: 'none',
    }

    return(
        <SearchFormBox>
            <form>
                <FirstBox>
                    <div>
                        <input type="radio" name='fligh_type'/>
                        <label>Return</label>
                        <input type="radio" name='fligh_type'/>
                        <label>One way</label>
                    </div>

                    <div>
                        <select name="class">
                            <option value="economy">Economy</option>
                            <option value="business">Business</option>
                            <option value="first">First</option>
                        </select>
                    </div>

                    <div>
                        <input type="checkbox" name='direct'/>
                        <label>Direct flights only</label>
                    </div>
                </FirstBox>

                <SecondBox>
                    <input type="text" placeholder='Where from?' />
                    <Icon><TbArrowsExchange2 /></Icon>
                    <input type="text" placeholder='Where to?' />


                    <RangePicker
                    onChange={(value) => formatDate(value)} 
                    bordered={false}
                    format={'DD-MM-YYYY'}
                    style={styledDate}
                    />

                </SecondBox>

                <Button>Search Flights</Button>
            </form>
        </SearchFormBox>
    )
}