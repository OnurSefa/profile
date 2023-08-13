import React from "react";
import Swal from "sweetalert2";


class Photos extends React.Component{
    constructor(){
        super();
        this.state = {
            photos: [
                {
                    date: "2023-08-13",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/ff13b024-a6e9-4acf-b69a-5c571055b81b",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/295786ee-bcd0-4a39-8cf8-e039bf37ce05",
                    name: "IMG_6018"
                },
                {
                    date: "2023-08-12",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/f77bffa4-f830-4b2d-884b-9dfa8f5fa973",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/12fbba46-5ea0-4b72-9fdb-3d706def0d94",
                    name: "IMG_5942.jpg"
                },
                {
                    date: "2023-08-12",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/19af792c-a3c7-459e-a699-e313a637c94e",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/020fe1e3-c0e3-4d05-aee0-d77024ceea6e",
                    name: "IMG_5930.jpg"
                },
                {
                    date: "2023-08-08",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/d9828c7c-46d0-4d85-9a04-d8d60959408c",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/e9c8f801-4fd3-4759-a870-77b12a4dfe7c",
                    name: "IMG_5898.jpg"
                },
                {
                    date: "2023-08-08",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/17399b07-0334-4fb8-9287-5fad3f007a8e",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/e435bb0f-a03f-4133-9244-83263d2ee522",
                    name: "IMG_5885.jpg"
                },
                {
                    date: "2023-08-05",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/2cb6ec7d-2f0e-4fb7-8377-5754dea8ee18",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/2331a628-faae-4eb7-bae8-92a143b2d1d2",
                    name: "IMG_5866.jpg"
                },
                {
                    date: "2023-08-05",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/ac1ba254-9773-46f9-b1b9-c01264aad871",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/78d2b4b8-a5d6-4213-a6bf-e62fcb8d29dd",
                    name: "IMG_5626.jpg"
                },
                {
                    date: "2023-08-05",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/f0a0cbd8-a0cf-44de-b96a-2f891cf58ef9",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/a2623a55-c99c-4b78-a0ce-42de4267d4d3",
                    name: "IMG_5439.jpg"
                },
                {
                    date: "2023-08-04",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/b3d11597-1feb-4e6f-abf0-05acae077c89",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/9fe9dedd-807f-4000-b511-5b225b4b9e03",
                    name: "IMG_5341.jpg"
                },
                {
                    date: "2023-08-02",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/e2ce47da-e256-460d-9233-f82e25d1f189",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/c35651ca-dbe9-4e13-8b10-a60aac07e16a",
                    name: "IMG_5318.jpg"
                },
                {
                    date: "2023-08-02",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/60ada12b-0273-40c7-b355-c2b4bfa74a51",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/61eaaad3-0e5e-4d88-848b-4c39a60f8b8a",
                    name: "IMG_5316.jpg"
                },
                {
                    date: "2023-08-02",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/eeba2f1e-4751-4b52-8083-5d5bfedaa9dd",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/addc1fb6-def2-4e5a-862f-8e68f9407f99",
                    name: "IMG_5308.jpg"
                },
                {
                    date: "2023-08-02",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/6f7c010c-f777-4156-bc0c-1b32e73a4b24",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/993e90ac-19c1-4bd9-b769-d9aa7cbf3243",
                    name: "IMG_5268.jpg"
                },
                {
                    date: "2023-08-02",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/6458207c-c4c4-4a33-a800-f90e9de96666",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/0d7fc86c-cec9-4b78-931e-f23bfe8f91e6",
                    name: "IMG_5230.jpg"
                },
                {
                    date: "2023-08-01",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/beb98e00-0aea-4836-bbb8-b5bc08508933",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/c80f3c03-0387-4d1e-9317-bf099a8fa304",
                    name: "IMG_5044.jpg"
                },
                {
                    date: "2023-08-01",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/dfcb1599-8844-4b8f-bfab-c8d0001fb24a",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/e75547c6-fa9f-4b42-9286-719d286f1265",
                    name: "IMG_4971.jpg"
                },
                {
                    date: "2023-08-01",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/84c5db68-cced-4720-8a74-018ae4e53554",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/fd3d2d5d-dca5-41be-94b6-7d2fb2f4b39d",
                    name: "IMG_4942.jpg"
                },
                {
                    date: "2023-08-01",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/45732786-85ee-49a1-bf51-669057766c6e",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/d3066e29-3f72-421b-905f-d43f0684f8bf",
                    name: "IMG_4940.jpg"
                },
                {
                    date: "2023-08-01",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/3c2e2fd2-a983-47fd-8870-e53179c9f34e",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/fed8e3b8-19d3-47c1-b996-18f55ee5d495",
                    name: "IMG_4932.jpg"
                },
                {
                    date: "2023-08-01",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/5bcb53ec-1ce2-4441-979d-8cdd65714909",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/5adf33bd-2cc4-48a4-b8e5-8af8c4875d2e",
                    name: "IMG_4913.jpg"
                },
                {
                    date: "2023-07-28",
                    location: "Istanbul/Turkey",
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/5dde8c84-7990-4aa6-a032-a29480091723",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/441c184e-1cf4-4c5f-83d7-8560e3ee687d",
                    name: "IMG_4859.jpg"
                },
            ]
        }
    }

    popPhoto(photo){
        Swal.fire({
            showConfirmButton: false,
            width: 1000,
            // text: photo.date + " " + photo.location,
            html: "<div class='popPhoto'><img class='popPhotoImage' src='"+photo.highAddress+"'></img><div class='popPhotoTexts'><div class='popPhotoText'>"+ photo.date+"</div><div class='popPhotoText'>"+ photo.location+"</div> </div> </div>"
            // html: "<div class='popPhoto'><img class='popPhotoImage' src='./photo_high/"+photo.name+"'></img></div>"
        })
    }

    makePhoto(k){
        return ( <div className="photoInstance">
            <div className="photoInstanceImage" onClick={() => this.popPhoto(k)}>
                <img className="photoInstanceImageImage" src={k.lowAddress} alt="photo image"></img>
            </div>
        </div>)
    }

    render(){
        let currentPhotos = this.state.photos;

        return <div className="photo">
            <div className="photoImages">
                {
                    currentPhotos.map((key) => this.makePhoto(key))
                }
            </div>
        </div>
    }
}

export default Photos
