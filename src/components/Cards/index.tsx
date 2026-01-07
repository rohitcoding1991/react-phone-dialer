import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface CardsProps {
  value: JSX.Element;
}

const Cards: React.FC<CardsProps> = ({ value }) => {
  return (
    <Box sx={{ width: 275 }}>
      <Card variant="outlined">
        <CardContent>
          {value}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Cards;
