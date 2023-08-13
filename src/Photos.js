import React from "react";
import Swal from "sweetalert2";


class Photos extends React.Component{
    constructor(){
        super();
        this.state = {
            photos: [
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    lowAddress: "",
                    highAddress: ""
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5942.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5930.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5898.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5885.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5866.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5626.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5439.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5341.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5318.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5316.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5308.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5268.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5230.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_5044.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_4971.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_4942.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_4940.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_4932.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
                    name: "IMG_4913.jpg"
                },
                {
                    date: "2023-08-17",
                    location: "Istanbul/Turkey",
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
            html: "<div class='popPhoto'><img class='popPhotoImage' src='./photo_high/"+photo.name+"'></img><div class='popPhotoTexts'><div class='popPhotoText'>"+ photo.date+"</div><div class='popPhotoText'>"+ photo.location+"</div> </div> </div>"
            // html: "<div class='popPhoto'><img class='popPhotoImage' src='./photo_high/"+photo.name+"'></img></div>"
        })
    }

    makePhoto(k){
        return ( <div className="photoInstance">
            <div className="photoInstanceImage" onClick={() => this.popPhoto(k)}>
                <img className="photoInstanceImageImage" src={"./photo_low/" + k.name} alt="photo image"></img>
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
