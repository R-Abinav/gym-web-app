import React from 'react';
import { Typography, Button , Stack } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail; 
    console.log(gifUrl);

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }

    ]

    return(
        <Stack
            mt='60px'
            gap='60px'
            sx={{
                flexDirection: {
                    lg: 'row'
                },
                p: '20px',
                alignItems: 'center'
            }}  
        >
            <img 
                src={gifUrl}
                alt={name}
                loading='lazy'
                className='detail-image'
            />

            <Stack
                sx={{
                    gap:{
                        lg: '35px',
                        xs: '20px'
                    }
                }}
            >
                <Typography
                    variant='h3'
                    textTransform='capitalize'
                >
                    {name}
                </Typography>
                <Typography
                    variant='h6'
                >
                    Exercises keep you strong.{` `}
                    <span style={{color: '#ff2625',textTransform: 'capitalize'}}>{name}</span> is one of the best exercises to target your {target}.
                    It will help improve your mood and gain energy.
                </Typography>

                {extraDetail.map((item) => {
                    return (
                        <Stack 
                            key={item.name} 
                            direction='row'
                            gap='24px'
                            alignItems='center'
                        >
                            <Button 
                                sx={{
                                    background: '#fff2db',
                                    borderRadius: '50%',
                                    width: '100px',
                                    height: '100px'
                                }}
                            >
                                <img 
                                    src={item.icon}
                                    alt={bodyPart}
                                    style={{
                                        width: '50px',
                                        height: '50px'
                                    }}
                                />
                            </Button>
                            <Typography 
                                variant='h5'
                                textTransform='capitalize'
                            >
                                {item.name}
                            </Typography>
                        </Stack>
                    );
                }
                )}
            </Stack>
        </Stack>
    );
}

export default Detail