// Credential provided by Yelp to use their API
const apiKey = 'Wi6sXou2Vjyf17fl4AKrobNQx_xJQbFQmiqVgxhIDjXj-nDZi8L0teKTMCOXcguN4aPygXg97bNeYM1eMPAagJvrbCk8G4RfScqDIrmltOaeE3pr7SendGGWwZVoW3Yx';

// Yelp module that stores functionality to interact with Yelp API. Retrieves search results
const Yelp = {
    search (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                    {
                        headers: {
                            Authorization: `Bearer ${apiKey}`
                        }
                    }).then(response => {
                        return response.json();
                    }).then(jsonResponse => {
                        if(jsonResponse.businesses) {
                            return jsonResponse.businesses.map(business => ({
                                id: business.id,
                                imageSrc: business.image_url,
                                name: business.name,
                                address: business.location.adress1,
                                city: business.location.city,
                                state: business.location.state,
                                zipCode: business.location.zip_code,
                                category: business.categories[0].title,
                                rating: business.rating,
                                reviewCount: business.review_count
                            }));
                        }
                    });
    }
};

export default Yelp;