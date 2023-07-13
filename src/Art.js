import React from 'react';
import Swal from 'sweetalert2';


class Art extends React.Component{
    constructor(){
        super();
        this.state = {
            arts: [

                {
                    name: "Purity",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664406-3877966e-3423-4aaf-8416-46b262409b56.png",
                    direction: 0
                },
                {
                    name: "Buried Bodies",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664412-8898d1e8-b0fb-4c4a-8741-f3cc39e7950f.png",
                    direction: 0
                },
                {
                    name: "Daydream",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664433-fae042eb-97ae-41c4-ad04-3ec3c70dd412.png",
                    direction: 0
                },
                {
                    name: "Its me Now",
                    technique: 6,
                    source: "https://user-images.githubusercontent.com/91468534/200664572-a6bf8fdf-fefc-4725-a0c4-4fd7734d1cd0.png",
                    direction: 0
                },
                {
                    name: "Yalan, Itiraf ve Haz",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664676-07eee100-3af9-4317-9847-c3daa160a776.png",
                    direction: 0
                },
                {
                    name: "Zihin Cirpiniyor",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664686-8727b820-b776-4086-9896-c2c33a982698.png",
                    direction: 0
                },
                {
                    name: "Path and Light",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664604-bc214b8e-76c3-4b28-96bb-8ae58b694a74.png",
                    direction: 0
                },
                {
                    name: "Anger Inside",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664425-97c0b2ad-dd8b-4c25-9726-8a7a661cf472.png",
                    direction: 0
                },
                {
                    name: "Decide Whether Entropy",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664440-15806a6e-17b6-4dfe-82f2-e66b5be1dd3d.png",
                    direction: 0
                },
                {
                    name: "Conversation",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664435-ada606ec-40b5-452f-a021-f25200907a8c.png",
                    direction: 0
                },
                {
                    name: "Black Fox",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664557-0ebea2c4-7521-4d6d-9e76-97cb2e8fa217.png",
                    direction: 0
                },
                {
                    name: "Regret",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664617-cf69eeb5-c7fa-45a1-b2c5-5040b3917d7d.png",
                    direction: 0
                },
                {
                    name: "Strict",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664643-600ee81b-9041-4d20-aee0-4d34b4f6f897.png",
                    direction: 0
                },
                {
                    name: "When the Body Shines",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664670-3874236d-ce6d-476e-91f4-454851bc1b47.png",
                    direction: 0
                },
                {
                    name: "Emperor",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664534-6fe0ef93-b044-4588-a11d-4f06e3ed9d16.png",
                    direction: 1
                },

                {
                    name: "The Nature of Mind",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664657-3386dfb5-4cfa-4feb-aed6-69fe785964d2.png",
                    direction: 0
                },
                {
                    name: "Throug the Broken Reality, to the Pain",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664662-19f8b0ee-ddae-47fc-a709-4e5010de93ea.png",
                    direction: 0
                },
                {
                    name: "Path",
                    technique: 4,
                    source: "https://user-images.githubusercontent.com/91468534/200664319-ba66a1f8-0af2-47d2-b381-6aaec708b933.png",
                    direction: 0
                },
                {
                    name: "Bilincim Eridi",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664383-e60ece64-5b57-4cb1-a120-2c708b4e4070.png",
                    direction: 0
                },
                {
                    name: "A Symbol",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664387-07cc616b-bb47-4cf2-8745-9dcaa323c927.png",
                    direction: 0
                },
                {
                    name: "Huzurun Boyundurugu",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664389-665fad23-1548-46b9-aefa-f962d202c086.png",
                    direction: 0
                },
                {
                    name: "Inside",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664393-d6486e8d-2ecc-4e84-87c3-724e3bbd38a5.png",
                    direction: 0
                },
                {
                    name: "Yalnizlilk",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664396-567fd610-2161-4f26-a6ea-5e37b43c136b.png",
                    direction: 0
                },
                {
                    name: "Silence",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664398-7ed5f648-dcf0-4489-8ed7-a275fb717a03.png",
                    direction: 0
                },
                {
                    name: "Wukong",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664400-c4d9c2a0-f25a-4f62-bd6d-a9b2843078c7.png",
                    direction: 0
                },
                {
                    name: "The Drummer",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664408-809d5367-f9c0-451a-bf6a-64809dd5671a.png",
                    direction: 0
                },
                {
                    name: "Focused and Distracted",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664415-f12894eb-8741-44fb-a0ca-d9fd036f0def.png",
                    direction: 0
                },
                {
                    name: "Remember your City",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664417-7b0c75ce-f27a-47c4-b050-83b6a9200060.png",
                    direction: 0
                },
                {
                    name: "First Time being Exist",
                    technique: 5,
                    source: "https://user-images.githubusercontent.com/91468534/200664420-3164fd4d-724c-47c7-9d22-9e35fb671672.png",
                    direction: 0
                },
                {
                    name: "Burn While Not Here",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664428-06d43384-b2cb-4812-9017-4397cb19cd65.png",
                    direction: 0
                },
                {
                    name: "Burned Life",
                    technique: 4,
                    source: "https://user-images.githubusercontent.com/91468534/200664431-d8119e5a-ed64-4892-8a65-738fecb56590.png",
                    direction: 0
                },
                {
                    name: "Dalgin",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664439-518f021e-8fdd-433f-951c-6a2614e75e6a.png",
                    direction: 0
                },
                {
                    name: "Diamond Head",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664444-e5b721a1-dd66-47e9-baa4-d937140729ac.png",
                    direction: 0
                },
                {
                    name: "Dirt on Dirtiness",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664445-e4017747-7bab-4384-a59b-bfac3bfdd6d9.png",
                    direction: 0
                },
                {
                    name: "Evil Samurai",
                    technique: 6,
                    source: "https://user-images.githubusercontent.com/91468534/200664446-57103a7f-69d3-4bba-be72-96369f10bd45.png",
                    direction: 0
                },
                {
                    name: "The Head",
                    technique: 3,
                    source: "https://user-images.githubusercontent.com/91468534/200664457-bd8c7269-7390-445f-803f-685ad3aca0a5.png",
                    direction: 0
                },
                {
                    name: "The Fox",
                    technique: 6,
                    source: "https://user-images.githubusercontent.com/91468534/200664460-71842798-e893-4603-a53a-db1135ada955.png",
                    direction: 0
                },
                {
                    name: "Frog and Frog",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664465-09fa289d-38ce-4168-acf9-a4dc1620ae8d.png",
                    direction: 0
                },
                {
                    name: "Explosive Gift",
                    technique: 6,
                    source: "https://user-images.githubusercontent.com/91468534/200664468-3f8cf784-73de-4bff-8a18-af04884cbe22.png",
                    direction: 0
                },
                {
                    name: "Gokyuzu ve Yapraklar",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664470-07c3c8fd-14cd-4c43-a04b-f7f0957e613f.png",
                    direction: 0
                },
                {
                    name: "Hands are not Real",
                    technique: 7,
                    source: "https://user-images.githubusercontent.com/91468534/200664474-911d93c8-0e79-4c9c-9ed7-d431a8e69699.png",
                    direction: 0
                },
                {
                    name: "Icimden ne kopuyorsa?",
                    technique: 2,
                    source: "https://user-images.githubusercontent.com/91468534/200664476-91805fe5-ee3d-4941-968b-1387746f40bb.png",
                    direction: 0
                },
                {
                    name: "Think",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664490-13f03f9d-d8d6-4617-9427-ab742ca875fd.png",
                    direction: 1
                },
                {
                    name: "View",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664493-3b5fd3c6-5481-46c9-96d8-6e659e9234db.png",
                    direction: 1
                },
                {
                    name: "My Demons",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664495-bbe000e0-5541-4086-bc7d-66d8268bacf0.png",
                    direction: 1
                },
                {
                    name: "The Old Man",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664499-70e43e14-56a7-4a38-acbd-a7c8511554d5.png",
                    direction: 1
                },
                {
                    name: "Tasbih",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664503-10a4cff7-92a5-45db-aafc-0d603a8c94d7.png",
                    direction: 0
                },
                {
                    name: "My old Friend",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664506-3e6a32c0-63d6-4da1-ba33-3b7b70e15859.png",
                    direction: 1
                },
                {
                    name: "Me",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664512-44548fa9-f68a-4300-861c-0ff9945d65ba.png",
                    direction: 1
                },
                {
                    name: "Sunflower",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664649-d4afbcfd-e224-4e2b-9bfd-8946250975b0.png",
                    direction: 0
                },
                {
                    name: "Deer God",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664654-d92f6485-51b9-44d1-80a3-4b62aba0dc13.png",
                    direction: 0
                },
                {
                    name: "Tide Effect",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664667-1385ee95-a058-4c5b-aacc-fa0b1088ab5d.png",
                    direction: 0
                },
                {
                    name: "We won't Reach the Holy Apple",
                    technique: 2,
                    source: "https://user-images.githubusercontent.com/91468534/200664668-d77a93a7-e0ab-4229-b51b-c36cbf4f3571.png",
                    direction: 0
                },
                {
                    name: "Russian Hunter",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664563-b1253296-6b51-4e8e-9e89-d67539870a72.png",
                    direction: 1
                },
                {
                    name: "Inside the Blurred Reality",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664569-f2f5006c-6899-4eec-baba-e899b74f5677.png",
                    direction: 0
                },
                {
                    name: "Jelly",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664574-b2f373fa-d29b-4a54-bd41-7cfe85a5cc84.png",
                    direction: 0
                },
                {
                    name: "Sit here",
                    technique: 3,
                    source: "https://user-images.githubusercontent.com/91468534/200664579-ac82ca11-5f49-4a31-acb4-4961a146c0c3.png",
                    direction: 0
                },
                {
                    name: "Bagirmayin Lutfen",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664584-8dbf7c62-d7b7-407c-b7d0-2a68c4bea0ca.png",
                    direction: 0
                },
                {
                    name: "Fruits",
                    technique: 2,
                    source: "https://user-images.githubusercontent.com/91468534/200664587-17e601b1-e7e4-44cc-bbbb-38c6b5db138f.png",
                    direction: 0
                },
                {
                    name: "When Your Soul Burns Out Of Your Mind",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664673-b7a427fa-92ac-4725-999a-2972c2fa57cb.png",
                    direction: 0
                },
                {
                    name: "The Tree",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664516-60863095-9426-48e8-bda0-6ba91e78b116.png",
                    direction: 1
                },
                {
                    name: "The Street",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664518-9ace0c6b-a2b5-4f39-aa54-649d1f255978.png",
                    direction: 0
                },
                {
                    name: "Tree Head",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664520-0b41c475-3b0a-4dbc-a0c3-aaa587c71cd1.png",
                    direction: 1
                },
                {
                    name: "Kaktus",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664526-253a1cfd-a17a-4994-a269-863f5cd816f6.png",
                    direction: 1
                },
                {
                    name: "Flower",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664529-6af830fb-aabf-4a92-8016-f9f0bd20610d.png",
                    direction: 1
                },
                {
                    name: "Lonely Man",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664531-ac72d11a-80df-491b-b37f-a21a97dedb76.png",
                    direction: 1
                },
                {
                    name: "Just Imagine",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664539-bdef2cfe-5050-4864-92e5-c84f6182939d.png",
                    direction: 1
                },
                {
                    name: "Burning",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664544-58b49803-87ba-4bee-a6a9-dc6b39e8c939.png",
                    direction: 1
                },
                {
                    name: "Multiple Thoughts",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664545-101052c5-785f-427b-92da-df3fdfda451d.png",
                    direction: 1
                },
                {
                    name: "The Soldier",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664547-14eb0ca2-1b99-44fb-ba4c-c79762677ced.png",
                    direction: 1
                },
                {
                    name: "My Room",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664551-1ba804c7-acea-4764-a70c-e0a88443e40a.png",
                    direction: 1
                },
                {
                    name: "Savor",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664560-eacde8ff-dbde-402b-b928-24573793a244.png",
                    direction: 1
                },
                {
                    name: "The Alien?",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664561-e93102f7-e7ea-4da6-bb0a-f6754513aef6.png",
                    direction: 1
                },
                {
                    name: "Samurai",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664592-f119b7e1-9cd5-45db-8b42-3689a0e034d3.png",
                    direction: 0
                },
                {
                    name: "No",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664598-470d7857-2efa-44e7-baaa-d1878ef6e701.png",
                    direction: 0
                },
                {
                    name: "See",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664602-f1954a43-a524-4f38-9368-094b02ae771e.png",
                    direction: 0
                },
                {
                    name: "Power of Blue",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664608-4fcdf20f-928d-4f70-8a6d-f7dcfdba9426.png",
                    direction: 0
                },
                {
                    name: "Red Drean",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664612-6c0f3f12-a741-4a3d-aed4-6c7e1b9bd877.png",
                    direction: 0
                },
                {
                    name: "Ruyaya Uyanmak",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664619-9453fb80-44e4-4d61-9193-4eda35de0eb8.png",
                    direction: 0
                },
                {
                    name: "The Scream",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664625-42df6579-98b8-4945-b1c8-bc4d3f1bc952.png",
                    direction: 0
                },
                {
                    name: "Skin of the Reality is now Burning under the Rainbow Flame",
                    technique: 2,
                    source: "https://user-images.githubusercontent.com/91468534/200664627-099a2289-1129-43cd-b250-581390f37d67.png",
                    direction: 0
                },
                {
                    name: "Skull",
                    technique: 7,
                    source: "https://user-images.githubusercontent.com/91468534/200664632-41aaf8b6-3eaf-4b25-8ee2-50beda1756c6.png",
                    direction: 0
                },
                {
                    name: "Flesh Scent",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664404-9768f5b7-2fbf-4f60-9166-c42c6a7fb2c7.png",
                    direction: 0
                },
                {
                    name: "Darth Vader",
                    technique: 1,
                    source: "https://user-images.githubusercontent.com/91468534/200664370-d1fbaf40-64af-423b-9def-0f0592505ba9.png",
                    direction: 0
                },
                {
                    name: "Spectral Beggers",
                    technique: 0,
                    source: "https://user-images.githubusercontent.com/91468534/200664641-53f0e3e1-8c49-47df-a81d-335bac342767.png",
                    direction: 0
                },
                
            ]
        }
    }

    popArt(art){
        let techniques =         
        ["oil on canvas", 
        "ink on paper", 
        "acrylic on canvas", 
        "acrylic on paper", 
        "water color on paper",
        "artificial intelligence",
        "digital painting",
        "pencil"
    ]

        Swal.fire({
            showConfirmButton: false,
            html: "<div class='popArt'><img class='popArtImage' src='"+art.source+"'></img><b class='popArtTitle'>"+art.name+"</b> <div class='popArtText'> "+techniques[art.technique]+" </div> </div>"
        })
    }

    makeArt(k){
        return ( <div className="artInstance">
                <div className="artInstanceImage" onClick={()=>this.popArt(k)}>
                    <img className="artInstanceImageImage" src={k.source} alt="art image" style={k.direction==0?{transform: "rotate(0deg)"}:k.direction==1?{transform: "rotate(90deg)"}:k.direction==2?{transform: "rotate(180deg)"}:{transform: "rotate(270deg)"}}></img>
                </div>
            </div>
        )

    }

    render(){

        let currentArts = this.state.arts;

        return <div className="art">
            <div className="artImages">
                {
                    currentArts.map( (key) => this.makeArt(key)) 
                }
            </div>
        </div>
    }

}

export default Art

