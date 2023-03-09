// React
import { useState } from 'react';
// Styled 
import { SearchFormBox } from './FormStyled';
// Libraries
import moment from 'moment';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;



export const SearchForm = () => {
    const [ dates, setDates ] = useState([])

    console.log(dates);
    
    return(
        <SearchFormBox>
            <form>
                <div>
                    <input type="radio" name='fligh_type'/>
                    <label>Return</label>
                    <input type="radio" name='fligh_type'/>
                    <label>One way</label>

                    <select name="class">
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="first">First</option>
                    </select>

                    <input type="checkbox" name='direct'/>
                    <label>Direct flights only</label>
                </div>

                <div>
                    <input type="text" placeholder='Where from?' />
                    <input type="text" placeholder='Where to?' />

                    <RangePicker onChange={(value) => setDates(value)} />

                </div>
            </form>
        </SearchFormBox>
    )
}