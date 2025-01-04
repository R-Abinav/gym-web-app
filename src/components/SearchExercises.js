import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    //To Fetch the categories as soon as the page loads
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExercisesData();
    },[]);

    const handleSearch = async () => {
        if(search){
            const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/name/${search.toLowerCase()}`, exerciseOptions);
            
            //Search Functionality
            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                || item.target.toLowerCase().includes(search)
                || item.bodyPart.toLowerCase().includes(search)
                || item.equipment.toLowerCase().includes(search),
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

            setSearch('');
            setExercises(searchedExercises);
        }
    }

    return (
        <Stack
            mt= "30px"
            alignItems= "center"
            justifyContent= "center"
            p= "20px"
        >
            <Typography
                fontWeight= "700"
                sx={{
                    fontSize: {
                        lg: '44px',
                        xs: '30px'
                    }
                }}
                mb= "50px"
                textAlign= "center"      
            >
                Get Your Desired <br/> Exercises
            </Typography>

            <Box
                position = 'relative'
                mb= '70px'
            >
                <TextField
                    height= '76px'
                    onChange = {(e) => 
                        setSearch(e.target.value.toLowerCase())
                    }
                    placeholder='Search Exercises'
                    value= {search}
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: {
                            lg: '800px',
                            xs: '350px'
                        },
                        backgroundColor: '#fff',
                        borderRadius: '40px',
                    }}
                    type='text'
                >
                </TextField>
                
                <Button
                    className='search-btn'
                    sx={{
                        borderTopLeftRadius: '0',
                        borderBottomLeftRadius: '0',
                        backgroundColor: '#ff2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: {
                            lg: '175px',
                            xs: '80px'
                        },
                        fontWeight: '550',
                        fontSize: {
                            lg: '20px',
                            xs: '14px'
                        },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                    onClick = {handleSearch}
                >
                    Search
                </Button>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    p: '20px'
                }}
            >
                <HorizontalScrollBar 
                    data={bodyParts}
                    bodyParts
                    setBodyPart={setBodyPart}
                    bodyPart={bodyPart}
                />
            </Box>
        </Stack>
    );
}

export default SearchExercises;