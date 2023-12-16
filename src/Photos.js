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
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/1eb6e080-7661-44bb-844e-e85dd6595f42",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/53460440-6c97-410b-a6cb-8e9c93a00c22",
                    name: "IMG_4990-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/bb2f22de-192d-447f-ab58-70d5ba5938d8",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/0170cc7a-44c7-4079-980d-07a4abc39223",
                    name: "IMG_7661-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/540520dc-65ae-4d56-beaf-d02bfc11c069",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/9ef409c5-3820-47e4-9319-64883b2c6411",
                    name: "IMG_7419_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/c4e0c5d3-bc77-4aa9-85e4-4d827998451d",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/d44d1dd7-1667-46ad-a2a6-32a8bad8c9aa",
                    name: "IMG_7344_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/2b63fbab-bdb2-4ffb-be36-a61aa8ef4f6f",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/f4db0ef4-e500-4747-bccf-cc629d97dbf6",
                    name: "IMG_7251_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/2fdb5429-9f21-4c15-800a-2aa0484bf910",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/baf4feb9-39a1-4784-b73e-dbcfd5d870c3",
                    name: "IMG_6786_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/587c8b9b-2262-459d-9243-30c642817df2",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/be6ebdc0-9ea1-4203-ae35-d5b88d6ba950",
                    name: "IMG_6734_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/95d1595a-08a7-4f81-aac8-d54e4a90d898",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/4709c158-11a2-4cb1-881f-fd2235873e16",
                    name: "IMG_6627_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/05fe3b0e-39b6-4c40-ad31-46ff2524ee09",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/a371f14c-d209-41b0-a605-9eaabe879785",
                    name: "IMG_6251"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/59d123c0-770c-4019-b1b6-e0dde2aae28e",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/e5f0dc80-bab8-4f84-b572-ed03ca3da2ab",
                    name: "IMG_6185"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/9e281b0f-4b44-4cda-ae9a-0293163d7495",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/3e83b64d-833e-4215-a8bd-bc8ea90090ea",
                    name: "IMG_6090"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/8e7826aa-f8b7-4423-a7fe-2bec53452ef8",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/355e9694-0a29-4a39-a742-a44b2ae3f322",
                    name: "IMG_6018"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/12cc8c8b-7902-4773-9f5c-e37da2c0e0a5",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/a46e89b4-ca47-4158-8d4f-464b1597d983",
                    name: "IMG_5930"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/4f0f224e-9ab1-4884-838b-9ffb9c0ba2ef",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/0ca52439-4dc8-403d-a9b6-d0afd4130ad3",
                    name: "IMG_5898"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/49df2336-4ff5-4637-90e4-6d776f82c2c5",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/7fc5bb52-50b2-43e7-a023-79e793b0613b",
                    name: "IMG_5885"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/53d4893b-ea6a-46a4-b15f-26784b452655",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/444f3791-d037-4252-b8cd-d78cdbb4936b",
                    name: "IMG_5866"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/691255cd-82ee-4981-aec0-d1c3c22d5e66",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/b6708a36-f7a2-477b-8a87-2b87028f8005",
                    name: "IMG_5626"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/7ece0d00-894a-4285-ae7a-521a84e12a92",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/99b4e591-1b72-4a59-aee6-56e68affdbd5",
                    name: "IMG_5439"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/b837653a-ac30-4364-8cf4-fe6e47b698fe",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/2f93f844-fc6b-40da-8fe0-5aeba0f8dad8",
                    name: "IMG_5341"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/da15171b-2f47-45a3-a4b0-9473116e6c2d",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/3f976911-2c3b-47d7-b912-e70a1457a81e",
                    name: "IMG_5316"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/d80e1772-4a5f-479b-83d6-5d9141a7366a",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/26fece21-980d-4d51-8a47-7a177f37b4b7",
                    name: "IMG_5268"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/ba201966-bfab-4709-b583-93b176e27895",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/13a175f3-7636-449d-8284-9b44624e99bd",
                    name: "IMG_5229-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/c598515e-719c-482b-9738-83645e5b50f4",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/7855882b-ab52-44b9-b7b6-bc879dac2cdb",
                    name: "IMG_5044"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/59e6e00a-be32-4edd-8d42-f3f7544b9a5c",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/a2b891c5-c2ce-46e0-a4dd-b18b2781b649",
                    name: "IMG_4971"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/3d125fee-4eee-47be-b02a-7144dfababc1",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/c3c6aa5b-6cbb-4c2a-ad7b-c5a1fd3a0422",
                    name: "IMG_4940"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/bafeba43-0b72-497c-a4b6-1a0464f977e6",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/b9725256-8ec7-4cdc-b03e-e4350b485ee4",
                    name: "IMG_4932"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/82409bfe-4e18-439d-a828-a43973255627",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/cda91004-b3f7-492b-8ab2-5fe9d6679de6",
                    name: "IMG_4859"
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
