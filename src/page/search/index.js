import { Container, Skeleton, Stack, Box  }   from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Fragment, useEffect } from 'react';
import {
    Link, useParams 
} from "react-router-dom";
import SearchBox from '../../components/searchBox';
import { asyncGetData, setValue } from '../../store/features/data'; // 引入actions
import { useSelector, useDispatch } from 'react-redux';
import ReactECharts from 'echarts-for-react';


const SkeletonItem = () =>{
    return (
        <Stack spacing={1}>
            <Skeleton variant="text" width="75%" height={30} />
            <Skeleton variant="text" width="50%" height={30} />
            <Skeleton variant="rectangular" width="100%">
                <div style={{ paddingTop: '100%' }} />
            </Skeleton>
        </Stack>
    )
}

const SearchItem = (data)=>{
    const date = []
    const sv = []
    data.forecast_search_msv.map(i=>{
        date.push(i.date)
        sv.push(i.sv)

    })
    const opt = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: sv,
            type: 'line',
            areaStyle: {}
          }
        ]
      };
    return (
        <Box component="div">
            <div>{data.name}</div>
            <div>Growth {data.growth}%</div>
            <ReactECharts option={opt}></ReactECharts>
            {/* // {data.forecast_search_msv} */}
            <div>{data.update_dt}</div>
        </Box>
    )
}

function Search() {
    const { keyword } = useParams();
    const { data, isLoading } = useSelector((state) => state.search);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(asyncGetData(keyword))
    },[keyword])
    console.log(data)
    return (
        <Fragment>
            <div className='header'><Link className='title' to={ '/' }>BestSearch</Link><SearchBox value={{keyword}}></SearchBox></div>
            <Container className='container' disableGutters={true} maxWidth="md">
                <h1>Related product trends</h1> 
                <Grid container spacing={2}>
                    {
                        (isLoading ? Array.from(new Array(8)) : data).map((item, index) => {
                            return <Grid key={index} sm={12}  xs={12} md={6} lg={3} xl={3}>{
                                item ? SearchItem(item) : (
                                    <SkeletonItem />
                                )
                            }</Grid>
                        })

                    }
                </Grid>  
            </Container>
        </Fragment>
    );
  }
  
  export default Search;