import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { ProductSort,  ProductFilterSidebar } from '../sections/@dashboard/products';
// mock

import WatchCard from '../sections/@dashboard/products/WatchCard';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://18.209.48.166:3001/chronedoapi/getallwatches');
        const data = await response.json();

        // Assuming the watches array is in data.watches
        const transformedData = data.watches.map((watch) => ({
          id: watch.id,
          watchName: watch.listing_title,
          price: watch.fixed_price.fixed_price, // Update with the correct property path
          date: watch.auction.instant_date, // Update with the correct property path
          time: watch.auction.instant_time, // Update with the correct property path
          image: watch.photos.cover, // Update with the correct property path
        }));

        setWatches(transformedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

//   const data = {
//     "watches": [
//         { "id": "1", "watchName": 'Rolex Datejust Oyster 41mm',  "price": "8'000", "date": "22.06.2022", "time": "18:35", "image": 'https://chronedo-main.s3.amazonaws.com/testing5567%40gmail.com/accessories_more1.jpg' },
//         { "id": "2", "watchName": 'Olivia Burton Oyster 41mm',  "price": "4'000", "date": "26.02.2022", "time": "17:35", "image": 'https://chronedo-main.s3.amazonaws.com/testing5567%40gmail.com/accessories_more1.jpg' },
//         { "id": "3", "watchName": 'Casio Oyster Oyster 41mm',  "price": "3'000", "date": "16.08.2022", "time": "16:35", "image": 'https://chronedo-main.s3.amazonaws.com/testing5567%40gmail.com/accessories_more1.jpg' },
//         { "id": "4", "watchName": 'Tissot Black Oyster 41mm', "price": "1'500", "date": "07.10.2022", "time": "15:35", "image": 'https://chronedo-main.s3.amazonaws.com/testing5567%40gmail.com/accessories_more1.jpg' },
//         { "id": "5", "watchName": 'Citizen Black Oyster 41mm',  "price": "2'000","date": "09.05.2022", "time": "14:35", "image": 'https://chronedo-main.s3.amazonaws.com/testing5567%40gmail.com/accessories_more1.jpg' },
//         { "id": "6", "watchName": 'Hublot Burton Oyster 41mm',  "price": "4'500", "date": "25.11.2022", "time": "13:35", "image": 'https://chronedo-main.s3.amazonaws.com/testing5567%40gmail.com/accessories_more1.jpg' }]
// }

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <div style={{ height: '2px' }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
            {watches.map((item, index) => (
              <div key={index} style={{ width: 'calc(50% - 10px)' }}>
                <WatchCard item={item} />
              </div>
            ))}
          </div>


      </Container>
    </>
  );
}
