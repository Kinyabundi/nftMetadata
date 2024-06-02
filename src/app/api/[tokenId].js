export default async function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
      "https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2020/2/5/angamaly-house-01.jpg.transform/845x440/image.jpg";

      const apiResponse = await fetch(`https://api.bridgedataoutput.com/api/v2/OData/test/Property('P_5dba1fb94aa4055b9f29696f')?access_token=6baca547742c6f96a6ff71b138424f21`);

      const realEstateAddress = apiResponse.data.UnparsedAddress;
     const yearBuilt = Number(apiResponse.data.YearBuilt);
      const lotSizeSquareFeet = Number(apiResponse.data.LotSizeSquareFeet);
      const buildingName = apiResponse.data.BuildingName;

    

    res.status(200).json({
      name: buildingName + tokenId,
      description: "Property Pulse Token",
      image: image_url,
      external_url: `https://api.bridgedataoutput.com/api/v2/OData/test/Property('P_5dba1fb94aa4055b9f29696f')?access_token=6baca547742c6f96a6ff71b138424f21`,
      attributes: {
        trait_type: "ERC1155",
        token_id: tokenId,
        contract_address: realEstateAddress,
        token_uri: `https://api.bridgedataoutput.com/api/v2/OData/test/Property('P_5dba1fb94aa4055b9f29696f')?access_token=6baca547742c6f96a6ff71b138424f21`,
        name: buildingName,
        description: "Property Pulse Token",
        image: image_url,
      },
    });
  }