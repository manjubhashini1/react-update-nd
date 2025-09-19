import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, title, expandAccordion, onToggle }) => {
     const dispatch = useDispatch();
     const handleAddItem = (items)=> {
        dispatch(addItem(items))
     }

    //handling accordion from here means it is uncontrolled component
    return (
        <div>
            <div className="flex flex-col m-5">
                {
                // uncontrolled
                /* <button onClick={()=> setExpand(!expand)} className="flex justify-between items-center border-2 rounded-lg p-5">
                    <h1>{title}</h1>
                    {expand ? <span>⬆</span> : <span>⬇</span>}             
                </button> */}
                <button onClick={onToggle} className="flex justify-between items-center border-2 rounded-lg p-5">
                    <h1>{title}</h1>
                    {expandAccordion ? <span>⬆</span> : <span>⬇</span>}             
                </button>
                {expandAccordion && items.map((item, index) => (
                    <div className="flex border-b-gray-400 border-b-2 py-5 gap-5" key={index}>
                        <div className="w-10/12">
                            <h1 className="text-lg font-bold">{item.card?.info?.name}</h1>
                            <h2 className="text-sm text-green-500 font-bold">₹ {item.card?.info?.price / 100}</h2>
                            <h1 className="line-clamp-2">{item.card?.info?.description}</h1>
                        </div>
                        <div className="w-2/12 relative">
                        <img src={CDN_URL + item.card?.info?.imageId} />
                        <button 
                        className="absolute bottom-[0.8] w-[100%]"
                        onClick={()=>handleAddItem(item)}
                        >Add</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList;