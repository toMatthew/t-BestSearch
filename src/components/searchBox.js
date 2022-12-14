import { TextField, IconButton  }   from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react'
import {
    useNavigate
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setValue } from '../store/features/data'; // 引入actions


function SearchBox (props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const { value } = props
    const [keyword, setKeyword] = useState(value?.keyword.replaceAll("+", ' ') || '')
    
    const to = () =>{
        const k = keyword.replaceAll(" ", '+')
        dispatch(setValue(k))
        navigate(`/search/${k}`)
    }
    const searchOnChange = (e) => {
        const value  = e.target.value
        setKeyword(value)
      }
    const onEnter = (e)=>{
        if (e.keyCode === 13) {
            to()
          }
    }
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <TextField size="small" fullWidth={true} onKeyUp={onEnter} value={keyword} onChange={searchOnChange}></TextField>
            <IconButton onClick={ to } >
                <SearchIcon/>
            </IconButton>
        </div>
    )
}

export default SearchBox;
