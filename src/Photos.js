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
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/b57c8e10-d092-4180-bcae-9f3bbddf4d17",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/1323d785-19a5-4a6b-ad06-a95d55592112",
                    name: "IMG_0010"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/61d5f338-ed5b-4991-9fc8-e9521140c6be",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/a9bb6de9-9c37-4d58-8807-f718c74bd321",
                    name: "IMG_0012"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/6348156d-2860-4d5d-81f4-5e0563adfe86",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/f78dd085-83d8-4788-8e67-bad26d733aef",
                    name: "IMG_0015"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/533a75f7-45d3-4663-8a70-cad8016e56af",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/5263c0c1-a9a5-406a-80f9-f161b4b30df6",
                    name: "IMG_0016"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/de085864-6aff-4679-a63a-5869ced548ae",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/29d87d80-99fa-4f1f-8efc-5776a5603fd6",
                    name: "IMG_8107-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/3c251791-e9dd-44b5-9b89-6c7e2dde2ddc",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/357830c6-e236-4707-8cc7-1d2bfc04af83",
                    name: "IMG_6786_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/6bcc52f6-f4d5-4393-85ad-b9ae1923c800",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/a2d7197f-c6a5-4611-8492-55dc9eec8d48",
                    name: "IMG_7419_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/acce354e-8d17-4a7d-b306-5154734959f1",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/ea55b759-15ea-435e-bb9a-af7d58d3d67d",
                    name: "IMG_5443-3"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/df984178-2a79-4f3a-95ca-51d0d5849641",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/4d2dae1e-baa0-489f-965a-e013e79c418c",
                    name: "IMG_5866-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/92679ab5-9cc5-46ad-aa3b-6d4dcc1d0b99",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/aa83d8f9-8fa2-4ec9-9a63-57c933f09b9c",
                    name: "IMG_5885-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/be61a0ba-4053-4619-b37c-70513251742b",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/9e2af829-8895-4206-afd7-7967034eb4c6",
                    name: "IMG_5899-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/9f3794a9-1660-4398-8ec8-ba8c53c4f2fb",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/43a622ef-0b92-4917-8047-48ed16b47746",
                    name: "IMG_6014-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/cf280824-f00b-4cf9-bfd0-213b513deb8e",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/5b02089a-6c1a-4c18-8c43-ab5b506014e5",
                    name: "IMG_6185_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/1ca6f96d-13b1-423e-81e2-11f023da11f8",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/58c3552a-2c26-4b09-b309-36d878ccbde5",
                    name: "IMG_6251"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/01cc77bd-d1ba-4958-9cc0-a7eb26acde03",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/b3e09d20-8dab-47fe-a063-ae1048d37743",
                    name: "IMG_6627_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/05e7d047-6cee-4133-a017-966769d4844f",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/4c6fadf0-ce26-4944-90a6-87a775fb750f",
                    name: "IMG_6734_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/063560c9-3ded-43f4-b4fa-af7159ac1777",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/b4859656-22c6-46c9-a408-806451943462",
                    name: "IMG_6889-3"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/7f14961e-a962-43d3-98b0-30f048c3621a",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/b7fbd783-b4cd-4532-9673-d8d4410ddcea",
                    name: "IMG_7251_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/7fe6de41-df65-4973-a370-55775ddab66e",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/95cb709b-f496-4f19-b270-6d7ee92c0334",
                    name: "IMG_7344_edited"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/83007a39-99d2-4bc2-8ee9-42b630bfab14",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/db9f023e-0a00-42f8-a252-9d6e7410ccb5",
                    name: "IMG_7423-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/cf7efef9-8063-4906-9d4e-ce4ee26b7ab3",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/f4e60cb7-7f3b-44be-b5fc-491149487619",
                    name: "IMG_5341-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/1b20c5bb-ed29-4431-a7bc-b6d9e88bf50d",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/401662ea-b7cf-4913-8e26-1c13455318df",
                    name: "IMG_7502-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/1ed9b100-f584-47b9-bea0-472fba3f7cf3",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/026715aa-494c-4fbb-a9ae-e39faabc461e",
                    name: "IMG_7661-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/7b8c54a7-f186-4daa-bd06-6beedced8a02",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/b359a3da-f2f8-4f39-85b5-94f2667b2207",
                    name: "IMG_8101-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/e853dcad-47f0-434c-96f3-2a0717828bc2",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/3d0ac775-8a9a-414c-b71d-f2c58e111af2",
                    name: "IMG_8108-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/db01542d-e183-46e8-9e85-4ffa7b865abb",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/e23ed4ea-2751-4eb5-b39f-e1dc5144731a",
                    name: "IMG_8139-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/c95f150b-7fa3-4ab5-bc52-ab3aae3b9b2d",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/7b498a33-a158-4f1a-a099-3fe7d5a2a0f2",
                    name: "IMG_8194-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/dfd20953-b98a-4563-a821-cb7177eae9b8",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/d29864cd-a2b4-4a66-9a04-d70d8137bc85",
                    name: "IMG_8202-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/88379db7-9723-4055-96b0-349cd777f44a",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/be026e50-02fe-4c12-87b9-2086fabd5f06",
                    name: "IMG_4990-2"
                },
                {
                    lowAddress: "https://github.com/OnurSefa/profile/assets/12373950/2c74d76e-558f-47e5-92a1-06ec9d001dc1",
                    highAddress: "https://github.com/OnurSefa/profile/assets/12373950/22576c4c-9798-49ac-92b4-229fec2461a8",
                    name: "IMG_5229-2"
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
            window.scrollTo({top: 0, left:0, behavior: 'smooth'});
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
