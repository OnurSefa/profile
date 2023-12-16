import React from "react";
import Swal from "sweetalert2";


class Photos extends React.Component{
    constructor(){
        super();
        this.state = {
            loadImages: false,
            currentPage: 1,
            itemPerPage: 6,
            photos: [
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/192f0fb3-c559-4fe2-a6c0-68efbbfc6f0d",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/96ff1db7-47e5-40fb-8d00-cecbc4b54bbc",
                    name: "IMG_0010"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/9c8efb22-1535-40ab-b1e6-cc1c6d56ba7d",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/5c6a8c7c-9d3f-4a36-ac3b-c002c098f3ab",
                    name: "IMG_0012"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/158aa143-09a8-40fa-8d9c-82b5bab2c5fb",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/c36b1371-1e35-4b66-a90b-8c774f56e39c",
                    name: "IMG_0015"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/cbc08882-0536-4fd2-bd71-6996062dbc61",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/f690c04a-7f07-4be0-aff1-f7756fce4b1f",
                    name: "IMG_0016"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/8b283733-a8f2-43ad-bb95-2dc8110f0e53",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/fb66375f-651b-444a-a5a2-3484f72b650a",
                    name: "IMG_4990-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/f5b28404-a169-4fae-bc23-6346b2929b96",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/f5bd35a2-e5ce-4cc1-94e3-7e24c6810c4e",
                    name: "IMG_5229-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/4ff330ae-de2f-49c3-8260-3c568d09fd9b",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/5c47074e-9907-46e4-9445-e2b0706bfea2",
                    name: "IMG_5341-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/7d394461-d44b-44c3-9045-b98ff28d6a52",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/3be6d9e4-00d4-4ab2-8eb0-c1fd485b8818",
                    name: "IMG_5443-3"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/c2aac72c-3b9d-4758-8d4a-18d4e69b37dc",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/34b5c0af-b312-44fe-b208-2ebba94d20b5",
                    name: "IMG_5866-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/31343129-3327-473e-a850-c86353431344",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/2dfb98bc-20da-4e50-9247-370866b4e195",
                    name: "IMG_5885-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/47d2cb81-30e2-4b25-826b-2ea9beac0047",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/cf49df88-1f0f-42a9-848a-e50a4535f172",
                    name: "IMG_5899-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/ea22d21f-ccf2-41a7-bfce-f858fc48286c",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/57774cd8-ba13-48be-b056-971cb6c9041d",
                    name: "IMG_6014-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/7c164b99-c960-486e-a310-212490eed8e1",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/0e35ce34-b65b-4d0d-898b-c71a5e22eb2a",
                    name: "IMG_6185_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/79eac8a2-737b-4c72-8efb-4a9b1e4e7b23",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/96855e13-4333-48a8-b3c4-d6cbbe0c711c",
                    name: "IMG_6251"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/a77c0591-4d43-4d82-a318-3987c6cd85c9",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/332b2829-6f8e-4d94-9a27-f6f4f8ead851",
                    name: "IMG_6627_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/47df246a-07d5-411e-8244-77758569c7dd",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/06a58511-b670-4856-a10e-141c580796c8",
                    name: "IMG_6734_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/cef2a3c4-8959-4790-bb62-f52bbaf7fc1a",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/e3b538ee-1ddc-445c-ac61-41b9c5ed947b",
                    name: "IMG_6786_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/26e47ee3-5004-4119-932f-5938dbbc5924",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/7f7c08aa-2e80-4d39-9685-393cf41b8407",
                    name: "IMG_6889-3"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/05a175da-c8fd-43ee-8731-3cd7a47dabd9",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/dc36e6fa-f16b-4ec4-919a-7ef6b75e61e3",
                    name: "IMG_7251_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/74130f48-1541-46ac-8a4b-43fe06c4855a",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/936f71c5-907a-4d5f-936b-69235d24ba35",
                    name: "IMG_7344_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/d5d3bdd1-be23-4416-9009-1fa09cf3ecd8",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/aa2d3855-befd-4bc9-8923-e140411e63cc",
                    name: "IMG_7419_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/133a9b63-be0e-4f2c-97f3-be04f8d3f459",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/c59f44e0-48e0-4ea7-8b2a-17047e9fd217",
                    name: "IMG_7423-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/718b08e1-dae6-4a5b-8202-d65c573319f4",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/dafece72-44d4-494f-bbd2-62a88f8d154d",
                    name: "IMG_7502-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/b27dbb37-85e9-428d-8326-b3c963ee65c3",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/61d6549a-c4f3-4cb7-bc07-5b4c7550b66f",
                    name: "IMG_7661-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/0d8ae6ae-ce33-43d3-bf03-a81f35881f93",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/af1b13fc-2223-4d60-81fe-3bed5ddb577f",
                    name: "IMG_8101-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/235ece77-d1ff-4bab-bfc4-3143e2ebb211",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/658e0a49-5ca3-486d-9cc7-97dc225eb971",
                    name: "IMG_8107-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/55ea3b9b-b171-4736-8304-7143bc6c3fac",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/08b1ff65-7510-46a2-afb9-2817d01f2420",
                    name: "IMG_8108-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/4f6f5780-cf93-403b-b53b-db7fc557c6ec",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/524b18a1-04e8-49dd-a870-501412e9c828",
                    name: "IMG_8139-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/96b267b5-b6ce-486b-83d6-34f326fd0814",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/da0df638-4868-43e7-96d5-80a7f697cff3",
                    name: "IMG_8194-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/a9d3e7f2-d22b-4bc7-a82b-ff4d62c21e16",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/d1b7a9f9-52b0-4fc3-935b-272db28fbf16",
                    name: "IMG_8202-2"
                },
            ]
        }
    }

    popPhoto(photo){
        Swal.fire({
            showConfirmButton: false,
            width: 1010,
            // text: photo.date + " " + photo.location,
            html: "<div class='popPhoto'><img class='popPhotoImage' src='"+photo.highAddress+"'></img> </div>"
            // html: "<div class='popPhoto'><img class='popPhotoImage' src='./photo_high/"+photo.name+"'></img></div>"
        })
    }

    makePhoto(k, l){
        return ( <div className="photoInstance">
            <div className="photoInstanceImage" onClick={() => this.popPhoto(k)}>
                <img className="photoInstanceImageImage" src={l? "": k.lowAddress} alt="photo image"></img>
            </div>
        </div>)
    }

    changePageIndex(neuIndex){
        if(neuIndex !== this.state.currentPage){
            this.setState({
                currentPage: neuIndex,
                loadImages: true
            }, ()=>this.setState({loadImages: false}))
        }
    }
    makePageIndex(k){
        return (
            <div className="photoPageIndex">
                <div className="photoPageIndicesSpace"></div>
                <div className="photoIndexInstance" onClick={()=>this.changePageIndex(k)}>
                    {
                        k
                    }
                </div>
                <div className="photoPageIndicesSpace"></div>
            </div>
        )
    }

    render(){
        const startIndex = (this.state.currentPage - 1) * this.state.itemPerPage;
        const endIndex = this.state.currentPage * this.state.itemPerPage;
        const allPhotos = this.state.photos;
        let currentPhotos = allPhotos.slice(startIndex, endIndex);

        const pageNumbers = []
        for (let i=1; i<=Math.ceil(allPhotos.length / this.state.itemPerPage); i++){
            pageNumbers.push(i);
        }

        const loadImages = this.state.loadImages;

        return <div className="photo">
            <div className="photoImages">
                {
                    currentPhotos.map((key) => this.makePhoto(key, loadImages))
                }
            </div>
            <div className="photoPageIndices">
                {
                    pageNumbers.map( (key) => this.makePageIndex(key))
                }
            </div>
        </div>
    }
}

export default Photos
