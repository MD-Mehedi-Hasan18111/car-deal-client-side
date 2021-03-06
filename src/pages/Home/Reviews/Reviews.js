import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ReviewCard from '../../ReviewCard/ReviewCard';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://gentle-cliffs-80284.herokuapp.com/reviews')
            .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div className="my-5">
            <Container>
            <h2 className="text-center mb-4 fw-bold" style={{color: "#34495e"}}>Customer Reviews!</h2>
                <Row xs={1} md={2} lg={3} className="g-4 mx-2">
                    {
                        reviews?.map(review => <ReviewCard key={review._id} review={review} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;